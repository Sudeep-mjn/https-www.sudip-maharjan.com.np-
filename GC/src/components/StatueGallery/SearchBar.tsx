import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useStatues } from '../../context/StatueContext';
export const SearchBar = () => {
  const {
    t
  } = useLanguage();
  const {
    searchTerm,
    setSearchTerm
  } = useStatues();
  return <div className="relative">
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder={t('searchPlaceholder')} className="w-full py-2 px-4 pl-10 bg-gray-900 border border-gray-700 rounded-md text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>;
};