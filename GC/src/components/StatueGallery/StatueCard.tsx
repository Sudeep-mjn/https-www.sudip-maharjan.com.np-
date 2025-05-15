import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useStatues, Statue } from '../../context/StatueContext';
interface StatueCardProps {
  statue: Statue;
}
export const StatueCard = ({
  statue
}: StatueCardProps) => {
  const {
    language
  } = useLanguage();
  const {
    setSelectedStatue
  } = useStatues();
  return <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800 hover:border-[#D4AF37] transition-all transform hover:scale-[1.02] cursor-pointer" onClick={() => setSelectedStatue(statue)}>
      <div className="h-64 overflow-hidden">
        <img src={statue.image} alt={language === 'en' ? statue.name.en : statue.name.ne} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">
          {language === 'en' ? statue.name.en : statue.name.ne}
        </h3>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-[#C1272D] text-white text-xs px-2 py-1 rounded">
            {language === 'en' ? statue.category.en : statue.category.ne}
          </span>
          <span className="text-gray-400 text-sm">
            {statue.size}" ({statue.size} inches)
          </span>
        </div>
        <p className="text-gray-300 text-sm line-clamp-3">
          {language === 'en' ? statue.description.en : statue.description.ne}
        </p>
      </div>
    </div>;
};