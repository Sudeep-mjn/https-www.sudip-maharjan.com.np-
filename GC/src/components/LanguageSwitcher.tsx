import React from 'react';
import { useLanguage } from '../context/LanguageContext';
export const LanguageSwitcher = () => {
  const {
    language,
    setLanguage
  } = useLanguage();
  return <div className="flex items-center space-x-2">
      <button className={`px-2 py-1 rounded ${language === 'en' ? 'bg-[#C1272D] text-white' : 'bg-transparent text-[#F5F5F5] hover:text-[#D4AF37]'}`} onClick={() => setLanguage('en')}>
        EN
      </button>
      <button className={`px-2 py-1 rounded ${language === 'ne' ? 'bg-[#C1272D] text-white' : 'bg-transparent text-[#F5F5F5] hover:text-[#D4AF37]'}`} onClick={() => setLanguage('ne')}>
        नेपाली
      </button>
    </div>;
};