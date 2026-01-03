
import React from 'react';
import { PredictionResponse, TranslationSchema } from '../types';

interface ResultDisplayProps {
  prediction: PredictionResponse;
  t: TranslationSchema;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ prediction, t }) => {
  const probPercent = (prediction.prediction_probability * 100).toFixed(2);
  const isHighRisk = prediction.prediction_probability > 0.5;
  
  const getLightBg = () => {
    if (prediction.prediction_probability > 0.7) return "bg-red-950/20";
    if (prediction.prediction_probability > 0.3) return "bg-amber-950/20";
    return "bg-emerald-950/20";
  };

  const getTextColor = () => {
    if (prediction.prediction_probability > 0.7) return "text-red-500";
    if (prediction.prediction_probability > 0.3) return "text-amber-500";
    return "text-emerald-500";
  };

  // Translate message based on risk level since API returns English
  const displayMessage = isHighRisk ? t.results.translatedMessageHigh : t.results.translatedMessageLow;

  return (
    <div className="p-6 md:p-8 rounded-2xl shadow-2xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-slate-100">{t.results.heading}</h3>
        <p className={`text-xl font-bold ${getTextColor()}`}>
          {isHighRisk ? t.results.highRisk : t.results.lowRisk}
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Fixed clipping by using viewBox and smaller radius relative to container */}
        <svg className="w-48 h-48 -rotate-90 overflow-visible" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-slate-700"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="url(#gauge-gradient)"
            strokeWidth="8"
            strokeDasharray={263.9}
            strokeDashoffset={263.9 * (1 - prediction.prediction_probability)}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isHighRisk ? "#ef4444" : "#10b981"} />
              <stop offset="100%" stopColor={isHighRisk ? "#991b1b" : "#059669"} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-black text-slate-100">{probPercent}%</span>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{t.results.probability}</span>
        </div>
      </div>

      <div className={`p-5 rounded-xl ${getLightBg()} border border-slate-700/50`}>
        <p className="text-sm leading-relaxed text-slate-300 italic">
          "{displayMessage}"
        </p>
      </div>

      <div className="flex items-start gap-3 text-slate-400 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-xs">
          {t.results.recommendation}
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;
