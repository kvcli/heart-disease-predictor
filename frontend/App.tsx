
import React, { useState, useEffect, useMemo } from 'react';
import { Locale, PredictionInput, PredictionResponse } from './types';
import { translations } from './translations';
import Header from './components/Header';
import PredictionForm from './components/PredictionForm';
import ResultDisplay from './components/ResultDisplay';
import InfoSections from './components/InfoSections';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>('EN');
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = useMemo(() => translations[locale], [locale]);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
    document.body.classList.add('bg-slate-900', 'text-slate-100');
    document.body.classList.remove('bg-slate-50', 'text-slate-900');
  }, []);

  const handlePredict = async (inputs: PredictionInput) => {
    setIsLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const response = await fetch('https://kvcli-heart-disease-predictor.hf.space/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data: PredictionResponse = await response.json();
      setPrediction(data);
      // Smooth scroll to results
      setTimeout(() => {
        document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err) {
      setError(locale === 'AR' ? 'فشل الاتصال بالخادم. يرجى المحاولة لاحقاً.' : 'Failed to connect to the prediction server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 dark ${locale === 'AR' ? 'font-arabic' : ''}`} dir={locale === 'AR' ? 'rtl' : 'ltr'}>
      <Header 
        locale={locale} 
        setLocale={setLocale} 
        t={t} 
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-700">
            {t.title}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <PredictionForm onPredict={handlePredict} isLoading={isLoading} t={t} locale={locale} />
          
          <div id="result-section" className="sticky top-24">
            {error && (
              <div className="p-4 bg-red-950/30 border border-red-800 text-red-400 rounded-lg mb-4 animate-pulse">
                {error}
              </div>
            )}
            {prediction && (
              <ResultDisplay prediction={prediction} t={t} />
            )}
            {!prediction && !isLoading && !error && (
              <div className="h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-slate-800 rounded-2xl text-slate-600">
                <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p>{locale === 'AR' ? 'املأ النموذج للحصول على توقعاتك' : 'Fill the form to see your results here'}</p>
              </div>
            )}
            {isLoading && (
              <div className="h-[400px] flex flex-col items-center justify-center bg-slate-800/50 rounded-2xl shadow-xl backdrop-blur-sm border border-slate-700/50">
                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mb-4"></div>
                 <p className="text-slate-400">{locale === 'AR' ? 'جاري تحليل البيانات...' : 'Analyzing medical data...'}</p>
              </div>
            )}
          </div>
        </div>

        <InfoSections t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;
