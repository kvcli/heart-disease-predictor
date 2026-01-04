
export type Sex = 'Male' | 'Female';
export type ChestPainType = 'typical angina' | 'atypical angina' | 'non-anginal' | 'asymptomatic';
export type RestECG = 'normal' | 'st-t abnormality' | 'lv hypertrophy';

export interface PredictionInput {
  age: number;
  sex: Sex;
  cp: ChestPainType;
  trestbps: number;
  chol: number;
  fbs: boolean;
  exang: boolean;
  restecg: RestECG;
}

export interface PredictionResponse {
  prediction_probability: number;
  prediction: string;
  message: string;
}

export type Locale = 'EN' | 'AR' | 'DE';
export type Theme = 'dark'; // Forced dark mode

export interface FeatureTranslation {
  label: string;
  desc: string;
}

export interface TranslationSchema {
  title: string;
  subtitle: string;
  form: {
    age: string;
    sex: string;
    male: string;
    female: string;
    chestPain: string;
    bloodPressure: string;
    cholesterol: string;
    fastingSugar: string;
    exerciseAngina: string;
    restEcg: string;
    calculate: string;
    validationError: string;
    options: {
      cp: Record<string, string>;
      restecg: Record<string, string>;
    };
    tooltips: {
      cp: string;
      trestbps: string;
      chol: string;
      fbs: string;
      exang: string;
      restecg: string;
    };
  };
  results: {
    heading: string;
    probability: string;
    lowRisk: string;
    highRisk: string;
    recommendation: string;
    translatedMessageHigh: string;
    translatedMessageLow: string;
  };
  sections: {
    context: string;
    contextBody: string;
    dataset: string;
    datasetBody: string;
    features: string;
    featuresBody: string;
    importance: string;
    importanceBody: string;
    disclaimer: string;
    disclaimerBody: string;
    featureList: Record<string, FeatureTranslation>;
    chart: {
      value: string;
      features: Record<string, string>;
    };
    selection: {
      title: string;
      selectedModelTitle: string;
      selectedModelBody: string;
      comparisonTitle: string;
      comparisonBody: string;
      rationaleTitle: string;
      rationalePoints: {
        userCentric: { title: string; body: string };
        balanced: { title: string; body: string };
        interpretable: { title: string; body: string };
        efficient: { title: string; body: string };
      };
      conclusion: string;
    };
  };
  footer: {
    contact: string;
    mission: string;
    social: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
}
