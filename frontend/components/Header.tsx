
import React from 'react';
import { Locale, TranslationSchema } from '../types';

interface HeaderProps {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TranslationSchema;
}

const Header: React.FC<HeaderProps> = ({ locale, setLocale, t }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 p-1.5 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block text-white">{t.title}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-slate-800 p-1 rounded-lg">
            {(['EN', 'AR', 'DE'] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  locale === l 
                    ? 'bg-slate-700 shadow-sm text-red-500' 
                    : 'text-slate-500 hover:text-slate-100'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
