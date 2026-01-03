
import React, { useState } from 'react';
import { PredictionInput, TranslationSchema, Locale } from '../types';

interface PredictionFormProps {
  onPredict: (inputs: PredictionInput) => void;
  isLoading: boolean;
  t: TranslationSchema;
  locale: Locale;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onPredict, isLoading, t, locale }) => {
  const [formData, setFormData] = useState<PredictionInput>({
    age: 50,
    sex: 'Male',
    cp: 'asymptomatic',
    trestbps: 120,
    chol: 200,
    fbs: false,
    exang: false,
    restecg: 'normal',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPredict(formData);
  };

  const handleChange = (name: keyof PredictionInput, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClass = "w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none text-white";
  const labelClass = "block text-sm font-semibold text-slate-300 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl space-y-6 border border-slate-700/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{t.form.age}</label>
          <input 
            type="number" 
            value={formData.age} 
            onChange={(e) => handleChange('age', parseInt(e.target.value))}
            min="1" max="120"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>{t.form.sex}</label>
          <div className="flex p-1 bg-slate-900 rounded-xl">
            {(['Male', 'Female'] as const).map(s => (
              <button
                key={s}
                type="button"
                onClick={() => handleChange('sex', s)}
                className={`flex-1 py-1.5 text-sm font-medium rounded-lg transition-all ${
                  formData.sex === s 
                    ? 'bg-slate-700 shadow text-red-500' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {s === 'Male' ? t.form.male : t.form.female}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClass}>{t.form.chestPain}</label>
          <select 
            value={formData.cp}
            onChange={(e) => handleChange('cp', e.target.value)}
            className={inputClass}
          >
            {Object.entries(t.form.options.cp).map(([value, label]) => (
              <option key={value} value={value} className="bg-slate-800">{label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>{t.form.bloodPressure}</label>
          <input 
            type="number" 
            value={formData.trestbps} 
            onChange={(e) => handleChange('trestbps', parseFloat(e.target.value))}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>{t.form.cholesterol}</label>
          <input 
            type="number" 
            value={formData.chol} 
            onChange={(e) => handleChange('chol', parseFloat(e.target.value))}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>{t.form.restEcg}</label>
          <select 
            value={formData.restecg}
            onChange={(e) => handleChange('restecg', e.target.value)}
            className={inputClass}
          >
            {Object.entries(t.form.options.restecg).map(([value, label]) => (
              <option key={value} value={value} className="bg-slate-800">{label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            checked={formData.fbs}
            onChange={(e) => handleChange('fbs', e.target.checked)}
            className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-red-600 focus:ring-red-500"
          />
          <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200">
            {t.form.fastingSugar}
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            checked={formData.exang}
            onChange={(e) => handleChange('exang', e.target.checked)}
            className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-red-600 focus:ring-red-500"
          />
          <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200">
            {t.form.exerciseAngina}
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all transform active:scale-[0.98] ${
          isLoading 
            ? 'bg-slate-700 cursor-not-allowed opacity-50' 
            : 'bg-gradient-to-r from-red-600 to-rose-600 hover:shadow-lg hover:from-red-700 hover:to-rose-700'
        }`}
      >
        {isLoading ? (locale === 'AR' ? 'جاري الحساب...' : 'Calculating...') : t.form.calculate}
      </button>
    </form>
  );
};

export default PredictionForm;
