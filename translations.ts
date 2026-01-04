
import { TranslationSchema } from './types';

export const translations: Record<string, TranslationSchema> = {
  EN: {
    title: "CardiaCheck AI",
    subtitle: "Advanced Heart Disease Risk Assessment",
    form: {
      age: "Age (Years)",
      sex: "Gender",
      male: "Male",
      female: "Female",
      chestPain: "Chest Pain Type",
      bloodPressure: "Resting Blood Pressure (mm Hg)",
      cholesterol: "Serum Cholesterol (mg/dl)",
      fastingSugar: "Fasting Blood Sugar > 120 mg/dl",
      exerciseAngina: "Exercise Induced Angina",
      restEcg: "Resting ECG Results",
      calculate: "Calculate Prediction",
      validationError: "Please fill all fields correctly.",
      options: {
        cp: {
          'typical angina': 'Typical Angina',
          'atypical angina': 'Atypical Angina',
          'non-anginal': 'Non-anginal Pain',
          'asymptomatic': 'Asymptomatic'
        },
        restecg: {
          'normal': 'Normal',
          'st-t abnormality': 'ST-T Wave Abnormality',
          'lv hypertrophy': 'LV Hypertrophy'
        }
      },
      tooltips: {
        cp: "Describes the nature of pain felt in the chest. Can be determined by self-observation or clinical interview.",
        trestbps: "The pressure of circulating blood on the walls of blood vessels. Measured using a standard blood pressure cuff.",
        chol: "A waxy substance found in your blood. Obtained via a standard blood lipid panel test.",
        fbs: "Blood sugar level after at least 8 hours of fasting. Measured using a glucometer or blood test.",
        exang: "Chest pain triggered by physical activity. Reported based on personal experience during exercise.",
        restecg: "Electrical activity of the heart while at rest. Obtained through an Electrocardiogram test at a clinic."
      }
    },
    results: {
      heading: "Risk Assessment Result",
      probability: "Risk Probability",
      lowRisk: "Low Likelihood",
      highRisk: "Higher Likelihood",
      recommendation: "Consult a professional for a formal diagnosis.",
      translatedMessageHigh: "Based on the provided information, there is a high likelihood of heart disease. It is recommended to consult a medical professional for further assessment.",
      translatedMessageLow: "Based on the provided information, there is a low likelihood of heart disease. However, maintaining a healthy lifestyle is always recommended."
    },
    sections: {
      context: "Context of the Problem",
      contextBody: "Heart disease remains a leading cause of mortality worldwide. Early risk assessment through medical metrics can significantly improve clinical outcomes. AI plays a crucial role in processing these metrics to provide immediate, data-driven insights.",
      dataset: "Dataset Used",
      datasetBody: "This model was trained on the UCI Heart Disease Dataset, a benchmark medical repository containing clinical records with various diagnostic attributes.",
      features: "Features Expected",
      featuresBody: "We utilize 8 key features. Complex features like 'Thal' or 'Ca' are excluded as they require invasive tests.",
      importance: "Feature Importance (SHAP)",
      importanceBody: "SHAP analysis indicates how much each feature contributes to the prediction. Higher values represent stronger influence on the model's decision.",
      disclaimer: "Disclaimer",
      disclaimerBody: "This prediction is for informational purposes only and should NOT be used as medical advice. Always consult with a qualified healthcare professional for diagnosis and treatment.",
      featureList: {
        age: { label: 'Age', desc: 'Patient\'s age' },
        sex: { label: 'Sex', desc: 'Biological gender' },
        cp: { label: 'Chest Pain', desc: '4 levels of severity' },
        trestbps: { label: 'Trestbps', desc: 'Resting BP' },
        chol: { label: 'Chol', desc: 'Serum Cholesterol' },
        fbs: { label: 'FBS', desc: 'Fasting Sugar' },
        exang: { label: 'Exang', desc: 'Exercise Angina' },
        restecg: { label: 'RestECG', desc: 'EKG results' },
      },
      chart: {
        value: "Importance Value",
        features: {
          cp: "Chest Pain",
          age: "Age",
          restecg: "Rest ECG",
          exang: "Ex. Angina",
          trestbps: "Blood Pressure",
          chol: "Cholesterol",
          fbs: "Sugar"
        }
      },
      selection: {
        title: "Model Selection & Performance",
        selectedModelTitle: "Selected Model: Tuned Logistic Regression",
        selectedModelBody: "We utilize a Tuned Logistic Regression model trained on 8 user-inputtable features. This model achieves 0.7899 accuracy and 0.8517 ROC AUC, providing a robust balance of performance and accessibility.",
        comparisonTitle: "Comparison vs. Neural Network",
        comparisonBody: "While complex Neural Networks achieve slightly higher ROC AUC (0.8788), they require invasive medical data (like thalch, oldpeak) not readily available to general users.",
        rationaleTitle: "Why We Chose Logistic Regression",
        rationalePoints: {
          userCentric: { title: "User-Centric Design", body: "Focuses on 'easy checks' using data accessible to everyone without specialist tests." },
          balanced: { title: "Balanced Performance", body: "An ROC AUC of 0.8517 provides highly reliable preliminary screening power." },
          interpretable: { title: "High Interpretability", body: "Unlike 'black-box' AI, Logistic Regression clearly shows how each metric impacts your risk." },
          efficient: { title: "Computational Efficiency", body: "Ensures near-instant results and low environmental footprint." }
        },
        conclusion: "This selection ensures CardiaCheck remains a practical, trustworthy, and accessible tool for a broad audience."
      }
    },
    footer: {
      contact: "Get in touch",
      mission: "Empowering individuals with clinical AI insights for better heart health awareness.",
      social: "Social Connect",
      copyright: "CardiaCheck AI. Built with precision for preliminary screening.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  AR: {
    title: "CardiaCheck AI",
    subtitle: "تقييم مخاطر أمراض القلب المتقدم",
    form: {
      age: "العمر (سنوات)",
      sex: "الجنس",
      male: "ذكر",
      female: "أنثى",
      chestPain: "نوع ألم الصدر",
      bloodPressure: "ضغط الدم وقت الراحة (مم زئبق)",
      cholesterol: "كوليسترول المصل (مجم/ديسيلتر)",
      fastingSugar: "سكر الدم الصائم > 120 مجم/ديسيلتر",
      exerciseAngina: "الذبحة الصدرية الناجمة عن ممارسة الرياضة",
      restEcg: "نتائج تخطيط القلب وقت الراحة",
      calculate: "حساب التوقع",
      validationError: "يرجى ملء جميع الحقول بشكل صحيح.",
      options: {
        cp: {
          'typical angina': 'ذبحة صدرية نموذجية',
          'atypical angina': 'ذبحة صدرية غير نموذجية',
          'non-anginal': 'ألم غير ذبحي',
          'asymptomatic': 'بدون أعراض'
        },
        restecg: {
          'normal': 'طبيعي',
          'st-t abnormality': 'شذوذ في موجة ST-T',
          'lv hypertrophy': 'تضخم البطين الأيسر'
        }
      },
      tooltips: {
        cp: "يصف طبيعة الألم في الصدر. يتم تحديده من خلال الملاحظة الذاتية أو المقابلة السريرية.",
        trestbps: "ضغط الدم المتداول على جدران الأوعية الدموية. يتم قياسه باستخدام جهاز قياس ضغط الدم القياسي.",
        chol: "مادة شمعية توجد في الدم. يتم قياسها من خلال تحليل دم شامل.",
        fbs: "مستوى سكر الدم بعد 8 ساعات على الأقل من الصيام. يتم قياسه بجهاز قياس السكر أو فحص دم.",
        exang: "ألم في الصدر ناتج عن النشاط البدني. يتم الإبلاغ عنه بناءً على التجربة الشخصية أثناء التمرين.",
        restecg: "النشاط الكهربائي للقلب أثناء الراحة. يتم الحصول عليه من خلال اختبار تخطيط القلب في العيادة."
      }
    },
    results: {
      heading: "نتيجة تقييم المخاطر",
      probability: "احتمالية الخطر",
      lowRisk: "احتمالية منخفضة",
      highRisk: "احتمالية عالية",
      recommendation: "استشر متخصصًا للحصول على تشخيص رسمي.",
      translatedMessageHigh: "بناءً على المعلومات المقدمة، هناك احتمالية عالية للإصابة بأمراض القلب. يوصى باستشارة أخصائي طبي لمزيد من التقييم.",
      translatedMessageLow: "بناءً على المعلومات المقدمة، هناك احتمالية منخفضة للإصابة بأمراض القلب. ومع ذلك، يوصى دائماً بالحفاظ على نمط حياة صحي."
    },
    sections: {
      context: "سياق المشكلة",
      contextBody: "لا تزال أمراض القلب سبباً رئيسياً للوفاة في جميع أنحاء العالم. يمكن أن يؤدي تقييم المخاطر المبكر من خلال القياسات الطبية إلى تحسين النتائج السريرية بشكل كبير. يلعب الذكاء الاصطناعي دوراً حاسماً في معالجة هذه القياسات لتقديم رؤى فورية قائمة على البيانات.",
      dataset: "مجموعة البيانات المستخدمة",
      datasetBody: "تم تدريب هذا النموذج على مجموعة بيانات UCI لأمراض القلب، وهي مستودع طبي مرجعي يحتوي على سجلات سريراً مع سمات تشخيصية متنوعة.",
      features: "الميزات المتوقعة",
      featuresBody: "نحن نستخدم 8 ميزات رئيسية. يتم استبعاد الميزات المعقدة لأنها تتطلب اختبارات متخصصة.",
      importance: "أهمية الميزة (SHAP)",
      importanceBody: "يوضح تحليل SHAP مدى مساهمة كل ميزة في التوقع. تمثل القيم الأعلى تأثيراً أقوى على قرار النموذج.",
      disclaimer: "إخلاء المسؤولية",
      disclaimerBody: "هذا التوقع لأغراض إعلامية فقط ولا ينبغي استخدامه كاستشارة طبية. استشر دائماً متخصص رعاية صحية مؤهل للتشخيص والعلاج.",
      featureList: {
        age: { label: 'العمر', desc: 'عمر المريض' },
        sex: { label: 'الجنس', desc: 'الجنس البيولوجي' },
        cp: { label: 'ألم الصدر', desc: '4 مستويات من الشدة' },
        trestbps: { label: 'ضغط الدم', desc: 'ضغط الدم وقت الراحة' },
        chol: { label: 'الكوليسترول', desc: 'كوليسترول المصل' },
        fbs: { label: 'السكر', desc: 'سكر الصيام' },
        exang: { label: 'الذبحة', desc: 'الذبحة الناتجة عن الجهد' },
        restecg: { label: 'تخطيط القلب', desc: 'نتائج تخطيط القلب' },
      },
      chart: {
        value: "قيمة الأهمية",
        features: {
          cp: "ألم الصدر",
          age: "العمر",
          restecg: "تخطيط القلب",
          exang: "الذبحة الصدرية",
          trestbps: "ضغط الدم",
          chol: "الكوليسترول",
          fbs: "السكر"
        }
      },
      selection: {
        title: "اختيار النموذج والأداء",
        selectedModelTitle: "النموذج المختار: الانحدار اللوجستي المحسن",
        selectedModelBody: "نعتمد نموذج الانحدار اللوجستي المدرب على 8 سمات. يحقق دقة 0.7899 ومساحة تحت منحنى ROC قدرها 0.8517، مما يوفر توازناً بين الأداء وسهولة الوصول.",
        comparisonTitle: "مقارنة مع الشبكات العصبية",
        comparisonBody: "بينما تحقق الشبكات العصبية أداءً أعلى قليلاً (0.8788)، فإنها تتطلب بيانات طبية معقدة غير متاحة للمستخدم العادي.",
        rationaleTitle: "لماذا اخترنا الانحدار اللوجستي؟",
        rationalePoints: {
          userCentric: { title: "تصميم يركز على المستخدم", body: "يركز على 'الفحوصات السهلة' باستخدام بيانات متاحة للجميع بدون فحوصات متخصصة." },
          balanced: { title: "أداء متوازن", body: "قيمة ROC AUC 0.8517 توفر قوة فحص أولي موثوقة للغاية." },
          interpretable: { title: "قابلية تفسير عالية", body: "على عكس الذكاء الاصطناعي 'الصندوق الأسود'، يوضح هذا النموذج بوضوح تأثير كل قياس." },
          efficient: { title: "كفاءة حسابية", body: "يضمن نتائج فورية واستهلاكاً منخفضاً للموارد." }
        },
        conclusion: "يضمن هذا الاختيار بقاء CardiaCheck أداة عملية وموثوقة لجمهور عريض."
      }
    },
    footer: {
      contact: "تواصل معنا",
      mission: "تمكين الأفراد من خلال رؤى الذكاء الاصطناعي السريرية لتحسين الوعي بصحة القلب.",
      social: "التواصل الاجتماعي",
      copyright: "CardiaCheck AI. بني بدقة للفحص الأولي.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة"
    }
  },
  DE: {
    title: "CardiaCheck AI",
    subtitle: "Fortgeschrittene Herzrisiko-Bewertung",
    form: {
      age: "Alter (Jahre)",
      sex: "Geschlecht",
      male: "Männlich",
      female: "Weiblich",
      chestPain: "Brustschmerz-Typ",
      bloodPressure: "Ruhe-Blutdruck (mm Hg)",
      cholesterol: "Serum-Cholesterin (mg/dl)",
      fastingSugar: "Nüchternblutzucker > 120 mg/dl",
      exerciseAngina: "Belastungsinduzierte Angina",
      restEcg: "Ruhe-EKG-Ergebnisse",
      calculate: "Berechnen",
      validationError: "Bitte füllen Sie alle Felder korrekt aus.",
      options: {
        cp: {
          'typical angina': 'Typische Angina',
          'atypical angina': 'Atypische Angina',
          'non-anginal': 'Nicht-Angina Schmerz',
          'asymptomatic': 'Asymptomatisch'
        },
        restecg: {
          'normal': 'Normal',
          'st-t abnormality': 'ST-T Wellen-Anomalie',
          'lv hypertrophy': 'LV Hypertrophie'
        }
      },
      tooltips: {
        cp: "Beschreibt die Art der Schmerzen in der Brust. Wird durch Selbstbeobachtung oder klinisches Interview bestimmt.",
        trestbps: "Der Druck des zirkulierenden Blutes auf die Gefäßwände. Gemessen mit einer Standard-Blutdruckmanschette.",
        chol: "Eine wachsartige Substanz im Blut. Gemessen durch eine Standard-Blutuntersuchung.",
        fbs: "Blutzuckerspiegel nach mindestens 8 Stunden Fasten. Gemessen mit einem Blutzuckermessgerät oder Labortest.",
        exang: "Brustschmerzen, die durch körperliche Aktivität ausgelöst werden. Basierend auf persönlicher Erfahrung.",
        restecg: "Elektrische Aktivität des Herzens im Ruhezustand. Wird durch ein Elektrokardiogramm in einer Klinik durchgeführt."
      }
    },
    results: {
      heading: "Ergebnis der Risikobewertung",
      probability: "Risikowahrscheinlichkeit",
      lowRisk: "Niedrige Wahrscheinlichkeit",
      highRisk: "Hohe Wahrscheinlichkeit",
      recommendation: "Konsultieren Sie einen Arzt für eine formelle Diagnose.",
      translatedMessageHigh: "Basierend auf den bereitgestellten Informationen besteht eine hohe Wahrscheinlichkeit für eine Herzerkrankung. Es wird empfohlen, einen Arzt für weitere Untersuchungen zu konsultieren.",
      translatedMessageLow: "Basierend auf den bereitgestellten Informationen besteht eine geringe Wahrscheinlichkeit für eine Herzerkrankung. Dennoch wird ein gesunder Lebensstil empfohlen."
    },
    sections: {
      context: "Kontext des Problems",
      contextBody: "Herzerkrankungen sind weltweit eine der häufigsten Todesursachen. Eine frühzeitige Risikobewertung kann die klinischen Ergebnisse erheblich verbessern. KI spielt eine entscheidende Rolle bei der Verarbeitung dieser Metriken.",
      dataset: "Verwendeter Datensatz",
      datasetBody: "Dieses Modell wurde mit dem UCI Heart Disease Dataset trainiert, einem medizinischen Repository mit klinischen Aufzeichnungen.",
      features: "Erwartete Merkmale",
      featuresBody: "Wir nutzen 8 Schlüsselmerkmale. Komplexe Tests sind ausgeschlossen.",
      importance: "Merkmal-Bedeutung (SHAP)",
      importanceBody: "Die SHAP-Analyse zeigt, wie viel jedes Merkmal zur Vorhersage beiträgt. Höhere Werte bedeuten einen stärkeren Einfluss.",
      disclaimer: "Haftungsausschluss",
      disclaimerBody: "Diese Vorhersage dient nur zu Informationszwecken und sollte NICHT als medizinischer Rat verwendet werden. Konsultieren Sie immer einen qualifizierten Arzt.",
      featureList: {
        age: { label: 'Alter', desc: 'Alter des Patienten' },
        sex: { label: 'Geschlecht', desc: 'Biologisches Geschlecht' },
        cp: { label: 'Brustschmerz', desc: '4 Schweregrade' },
        trestbps: { label: 'Blutdruck', desc: 'Ruhe-Blutdruck' },
        chol: { label: 'Cholesterin', desc: 'Serum-Cholesterin' },
        fbs: { label: 'Blutzucker', desc: 'Nüchternblutzucker' },
        exang: { label: 'Angina', desc: 'Belastungsangina' },
        restecg: { label: 'EKG', desc: 'EKG-Ergebnisse' },
      },
      chart: {
        value: "Wichtigkeit",
        features: {
          cp: "Brustschmerz",
          age: "Alter",
          restecg: "Ruhe-EKG",
          exang: "Angina",
          trestbps: "Blutdruck",
          chol: "Cholesterin",
          fbs: "Blutzucker"
        }
      },
      selection: {
        title: "Modellauswahl & Leistung",
        selectedModelTitle: "Gewähltes Modell: Tuned Logistic Regression",
        selectedModelBody: "Wir verwenden ein optimiertes logistisches Regressionsmodell. Mit einer Genauigkeit von 0,7899 und einem ROC AUC von 0,8517 bietet es ein optimales Gleichgewicht zwischen Präzision und Benutzerfreundlichkeit.",
        comparisonTitle: "Vergleich mit Neuronalen Netzen",
        comparisonBody: "Obwohl neuronale Netze einen etwas höheren ROC AUC (0,8788) erreichen, erfordern sie invasive Daten, die den meisten Nutzern nicht zur Verfügung stehen.",
        rationaleTitle: "Warum logistische Regression?",
        rationalePoints: {
          userCentric: { title: "Nutzerzentriertes Design", body: "Konzentriert sich auf einfache Checks mit allgemein zugänglichen Daten." },
          balanced: { title: "Ausgewogene Leistung", body: "Ein ROC AUC von 0,8517 bietet eine hochzuverlässige Erstbewertung." },
          interpretable: { title: "Hohe Interpretierbarkeit", body: "Im Gegensatz zu 'Black-Box'-Systemen zeigt dieses Modell klar auf, wie jeder Wert das Risiko beeinflusst." },
          efficient: { title: "Recheneffizienz", body: "Garantiert sofortige Ergebnisse und schont Ressourcen." }
        },
        conclusion: "Diese Wahl stellt sicher, dass CardiaCheck ein praktisches und vertrauenswürdiges Werkzeug für alle bleibt."
      }
    },
    footer: {
      contact: "Kontakt",
      mission: "Unterstützung von Einzelpersonen durch klinische KI-Einblicke für ein besseres Bewusstsein für die Herzgesundheit.",
      social: "Soziale Kanäle",
      copyright: "CardiaCheck AI. Mit Präzision für das Vorscreening entwickelt.",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen"
    }
  }
};
