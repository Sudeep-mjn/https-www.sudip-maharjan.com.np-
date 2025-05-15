import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useStatues } from '../../context/StatueContext';
export const StatueModal = () => {
  const {
    language
  } = useLanguage();
  const {
    selectedStatue,
    setSelectedStatue
  } = useStatues();
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedStatue(null);
      }
    };
    document.addEventListener('keydown', handleEsc);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [setSelectedStatue]);
  if (!selectedStatue) return null;
  return <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button className="absolute top-4 right-4 text-white bg-[#C1272D] rounded-full p-2 hover:bg-opacity-80" onClick={() => setSelectedStatue(null)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Image */}
        <div className="md:w-1/2 h-64 md:h-auto">
          <img src={selectedStatue.image} alt={language === 'en' ? selectedStatue.name.en : selectedStatue.name.ne} className="w-full h-full object-cover" />
        </div>
        {/* Content */}
        <div className="md:w-1/2 p-6 overflow-y-auto">
          <h3 className="text-2xl font-bold mb-2 text-[#D4AF37]">
            {language === 'en' ? selectedStatue.name.en : selectedStatue.name.ne}
          </h3>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-[#C1272D] text-white px-3 py-1 rounded">
              {language === 'en' ? selectedStatue.category.en : selectedStatue.category.ne}
            </span>
            <span className="text-gray-400">
              {selectedStatue.size}" ({selectedStatue.size} inches)
            </span>
          </div>
          <p className="text-[#F5F5F5] mb-6">
            {language === 'en' ? selectedStatue.description.en : selectedStatue.description.ne}
          </p>
          {/* Additional information */}
          <div className="border-t border-gray-700 pt-4 mt-4">
            <h4 className="text-lg font-semibold mb-2 text-[#D4AF37]">
              {language === 'en' ? 'Craftsmanship Details' : 'कारीगरी विवरण'}
            </h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center">
                <span className="w-4 h-4 mr-2 rounded-full bg-[#D4AF37]"></span>
                {language === 'en' ? 'Hand-crafted using traditional techniques' : 'परम्परागत प्रविधिहरू प्रयोग गरी हातले बनाइएको'}
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 mr-2 rounded-full bg-[#D4AF37]"></span>
                {language === 'en' ? 'Pure copper with fine detailing' : 'राम्रो विवरणको साथ शुद्ध तामा'}
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 mr-2 rounded-full bg-[#D4AF37]"></span>
                {language === 'en' ? 'Made in Nepal by master artisans' : 'नेपालमा मास्टर कलाकारहरूद्वारा निर्मित'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
};