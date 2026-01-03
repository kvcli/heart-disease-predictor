
import React from 'react';
import { TranslationSchema } from '../types';
import FeatureImportanceChart from './FeatureImportanceChart';

interface InfoSectionsProps {
  t: TranslationSchema;
}

const InfoSections: React.FC<InfoSectionsProps> = ({ t }) => {
  const features = Object.entries(t.sections.featureList);

  return (
    <div className="space-y-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-red-500 rounded-full"></span>
            {t.sections.context}
          </h2>
          <p className="text-slate-400 leading-relaxed">
            {t.sections.contextBody}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-red-500 rounded-full"></span>
            {t.sections.dataset}
          </h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            {t.sections.datasetBody}
          </p>
          <a 
            href="https://archive.ics.uci.edu/ml/datasets/heart+disease" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            UCI Heart Disease Dataset
          </a>
        </section>
      </div>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="w-8 h-1 bg-red-500 rounded-full"></span>
          {t.sections.features}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map(([key, f]) => (
            <div key={key} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 shadow-sm backdrop-blur-sm">
              <span className="block font-bold text-red-500">{f.label}</span>
              <span className="text-xs text-slate-500">{f.desc}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-sm max-w-3xl">
          {t.sections.featuresBody}
        </p>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-1 bg-red-500 rounded-full"></span>
              {t.sections.importance}
            </h2>
            <p className="text-slate-400 leading-relaxed">
              {t.sections.importanceBody}
            </p>
          </div>
          <div className="flex-1 w-full max-w-md bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-700/50">
            <FeatureImportanceChart t={t} />
          </div>
        </div>
      </section>

      <section className="bg-red-950/20 p-8 rounded-3xl border border-red-900/30">
        <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {t.sections.disclaimer}
        </h2>
        <p className="text-red-300 leading-relaxed font-medium">
          {t.sections.disclaimerBody}
        </p>
      </section>
    </div>
  );
};

export default InfoSections;
