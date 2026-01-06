import uvicorn
import pickle
import pandas as pd
import numpy as np
from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import Literal
from sklearn.compose import ColumnTransformer

# --- 1. Load the model and preprocessor ---
# Ensure these paths are correct relative to where app.py will be run
with open('lr_model_user_input.pkl', 'rb') as file:
    lr_model_user_input = pickle.load(file)

with open('preprocessor_user_input_model.pkl', 'rb') as file:
    preprocessor_user_input_model = pickle.load(file)

print("Model and preprocessor loaded successfully.")

# --- 2. Define Pydantic BaseModel for user input ---
class InputFeatures(BaseModel):
    age: int = Field(..., json_schema_extra={'example': 55}, description="Age in years")
    sex: Literal["Male", "Female"] = Field(..., json_schema_extra={'example': "Male"}, description="Gender of the patient")
    cp: Literal["typical angina", "atypical angina", "non-anginal", "asymptomatic"] = Field(..., json_schema_extra={'example': "non-anginal"}, description="Chest pain type")
    trestbps: float = Field(..., json_schema_extra={'example': 120.0}, description="Resting blood pressure (mm Hg)")
    chol: float = Field(..., json_schema_extra={'example': 230.0}, description="Serum cholestoral in mg/dl")
    fbs: bool = Field(..., json_schema_extra={'example': False}, description="Fasting blood sugar > 120 mg/dl (True/False)")
    exang: bool = Field(..., json_schema_extra={'example': True}, description="Exercise induced angina (True/False)")
    restecg: Literal["normal", "st-t abnormality", "lv hypertrophy"] = Field(..., json_schema_extra={'example': "normal"}, description="Resting electrocardiographic results")

# --- 3. Re-implement Feature Engineering functions ---
def categorize_bp(bp):
    if pd.isna(bp): return np.nan
    if bp < 120:
        return 'normal'
    elif bp < 130:
        return 'elevated'
    elif bp < 140:
        return 'stage1_hypertension'
    else:
        return 'stage2_hypertension'

def categorize_chol(chol):
    if pd.isna(chol): return np.nan
    if chol < 200:
        return 'desirable'
    elif chol < 240:
        return 'borderline_high'
    else:
        return 'high'

cp_severity_map = {'typical angina': 3, 'atypical angina': 2, 'non-anginal': 1, 'asymptomatic': 0}

# --- 4. Initialize FastAPI app ---
app = FastAPI(
    title="Heart Disease Prediction API",
    description="Predict heart disease likelihood based on user-inputtable medical metrics.",
    version="0.1.0"
)

# --- 5. Root endpoint ---
@app.get("/", tags=["Welcome"])
async def read_root():
    return {"message": "Welcome to the Heart Disease Prediction API. Use the /predict endpoint to get predictions."}

# --- 6. Prediction endpoint ---
@app.post("/predict", tags=["Prediction"])
async def predict_heart_disease(features: InputFeatures):
    # Convert input features to a pandas DataFrame
    input_df = pd.DataFrame([features.model_dump()])

    # Apply re-implemented feature engineering
    # These were the engineered features based on user-inputtable ones:
    # ['age_group', 'bp_category', 'chol_category', 'max_hr_predicted', 'age_chol_interaction', 'cp_severity', 'chest_pain_score']

    # age_group
    input_df['age_group'] = pd.cut(input_df['age'], bins=[0, 40, 55, 65, 100], labels=['young', 'middle_aged', 'senior', 'elderly'])

    # bp_category
    input_df['bp_category'] = input_df['trestbps'].apply(categorize_bp)

    # chol_category
    input_df['chol_category'] = input_df['chol'].apply(categorize_chol)

    # max_hr_predicted
    input_df['max_hr_predicted'] = 220 - input_df['age']

    # age_chol_interaction
    input_df['age_chol_interaction'] = input_df['age'] * input_df['chol'] / 1000

    # cp_severity
    input_df['cp_severity'] = input_df['cp'].map(cp_severity_map)

    # chest_pain_score
    input_df['chest_pain_score'] = input_df['cp_severity'] + input_df['exang'].astype(int)

    # Preprocess the DataFrame using the loaded preprocessor
    # The preprocessor expects the columns in the order they were trained with
    # We need to ensure input_df has all the columns expected by the preprocessor
    # The columns identified during training for X_user_input were:
    # ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'exang', 'restecg', 'age_group', 'bp_category', 'chol_category', 'max_hr_predicted', 'age_chol_interaction', 'cp_severity', 'chest_pain_score']

    # Reorder columns to match the training order of preprocessor (if necessary)
    # It's crucial that `preprocessor_user_input_model` was fitted on a DataFrame with these columns in this exact order
    expected_columns_for_preprocessor = [
        'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'exang', 'restecg',
        'age_group', 'bp_category', 'chol_category', 'max_hr_predicted',
        'age_chol_interaction', 'cp_severity', 'chest_pain_score'
    ]
    processed_input = preprocessor_user_input_model.transform(input_df[expected_columns_for_preprocessor])

    # Make prediction
    prediction_proba = lr_model_user_input.predict_proba(processed_input)[0][1] # Probability of disease present
    prediction_class = (prediction_proba > 0.5).astype(int)

    message = ""
    if prediction_class == 1:
        message = f"Based on the provided information, there is a high likelihood ({prediction_proba:.2f}) of heart disease. It is recommended to consult a medical professional for further assessment."
    else:
        message = f"Based on the provided information, the likelihood ({prediction_proba:.2f}) of heart disease is low. However, regular check-ups are always advised."

    return {
        "prediction_probability": round(prediction_proba, 4),
        "prediction": "Disease Present" if prediction_class == 1 else "No Disease",
        "message": message
    }

# To run the app directly from this script for local testing (optional)
if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=7860)
