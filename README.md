# CardiaCheck AI - Heart Disease Prediction

CardiaCheck AI is a professional, intuitive, and visually stunning web-based application designed for preliminary heart disease risk assessment. By leveraging advanced machine learning models, users can get an "easy check" of their cardiac health risk based on basic medical metrics.

## 🚀 Live Demo
**Try the application here:** [CardiaCheck AI Demo](https://heart-disease-predictor-ochre.vercel.app/)

---

## ✨ Key Features

- **🌍 Multilingual Support:** Fully supports English (EN), Arabic (AR), and German (DE) with seamless RTL/LTR switching.
- **🌙 Deep Dark Mode:** A sleek, modern user interface designed for readability and focus.
- **⚡ Real-Time Predictions:** Integration with a high-performance AI model hosted on Hugging Face.
- **📊 Interpretability:** Features a SHAP-based importance chart to explain how each medical metric contributes to the prediction.
- **📱 Fully Responsive:** Optimized for desktop, tablet, and mobile devices.
- **♿ Accessible:** Adheres to WCAG guidelines for an inclusive user experience.

---

## 🔬 Model Selection & Performance

Our deployment strategy prioritizes user accessibility and transparency. We explored multiple architectures before selecting the optimal model for production.

### 1. Selected Model: Tuned Logistic Regression
We chose a **Tuned Logistic Regression model** trained exclusively on features a general user can easily provide. This model offers a robust balance of performance and accessibility.

**Test Set Performance:**
- **Accuracy**: `0.7899`
- **Precision**: `0.8133`
- **Recall**: `0.8026`
- **F1-Score**: `0.8079`
- **ROC AUC**: `0.8517`

### 2. Performance Comparison
During development, we also fine-tuned a complex **Neural Network model**. While powerful, it required specialized medical data (e.g., `thalch`, `oldpeak`, `ca`) not readily accessible to general users.

**Neural Network Metrics:**
- **Accuracy**: `0.7826`
- **ROC AUC**: `0.8788` (Slightly higher raw power, but lower usability)

### 3. Why Logistic Regression?
1. **User-Centric Design**: Operates on metrics anyone can input without invasive specialist tests.
2. **Acceptable & Balanced Performance**: A ROC AUC of `0.8517` is highly effective for preliminary screening.
3. **High Interpretability**: Linear coefficients provide clear explanations for every prediction, fostering user trust.
4. **Computational Efficiency**: Extremely fast inference for near-instant web responsiveness.

---

## 🛠️ Medical Metrics Used

The model processes 8 key features to provide an assessment:
1. **Age:** Patient's age in years.
2. **Sex:** Biological gender.
3. **Chest Pain Type:** Typical angina, atypical angina, non-anginal, or asymptomatic.
4. **Resting Blood Pressure:** mm Hg.
5. **Serum Cholesterol:** mg/dl.
6. **Fasting Blood Sugar:** > 120 mg/dl indicator.
7. **Exercise Induced Angina:** Presence of chest pain during exercise.
8. **Resting ECG Results:** Normal, ST-T wave abnormality, or LV hypertrophy.

---

## ⚠️ Medical Disclaimer

**This prediction is for informational purposes only and should NOT be used as medical advice.** Always consult with a qualified healthcare professional for formal diagnosis and treatment. This tool is intended for preliminary screening and educational awareness.

---

## 👨‍💻 Connect with Me

If you have any questions or would like to collaborate, feel free to reach out:

- **Portfolio:** [devthoughtsbyaziz.vercel.app](https://devthoughtsbyaziz.vercel.app/)
- **LinkedIn:** [Abdulaziz Aljaadi](https://www.linkedin.com/in/abdulaziz-aljaadi/)
- **GitHub:** [@kvcli](https://github.com/kvcli)
- **Hugging Face:** [@kvcli](https://huggingface.co/kvcli)
- **Email:** azoz.aljaadi@gmail.com

---
Built with ❤️ by Abdulaziz Aljaadi.
