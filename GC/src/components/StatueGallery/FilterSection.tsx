import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useStatues } from '../../context/StatueContext';
export const FilterSection = () => {
  const {
    t,
    language
  } = useLanguage();
  const {
    statues,
    selectedCategory,
    setSelectedCategory
  } = useStatues();
  const [specialFilter, setSpecialFilter] = useState<string | null>(null);
  // Extract unique categories
  const categories = ['all', ...new Set(statues.map(statue => statue.category.en.toLowerCase()))];
  // Special categories
  const specialCategories = [{
    id: 'hot',
    label: 'Hot 🔥'
  }, {
    id: 'new',
    label: 'New ✨'
  }, {
    id: 'demand',
    label: 'In Demand 📈'
  }, {
    id: 'quick',
    label: 'Quick Seller ⚡'
  }];
  const handleSpecialFilter = (filterId: string) => {
    if (specialFilter === filterId) {
      setSpecialFilter(null);
    } else {
      setSpecialFilter(filterId);
      setSelectedCategory('all'); // Reset main category when special filter is selected
    }
  };
  return <div className="flex flex-col gap-4">
      {/* Special Categories */}
      <div className="flex flex-wrap gap-2">
        {specialCategories.map(cat => <button key={cat.id} onClick={() => handleSpecialFilter(cat.id)} className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${specialFilter === cat.id ? 'bg-[#C1272D] text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            {cat.label}
          </button>)}
      </div>
      {/* Main Categories */}
      <div className="inline-flex flex-wrap gap-4 bg-gray-900 p-4 rounded-lg shadow-lg">
        {categories.map(category => <button key={category} onClick={() => {
        setSelectedCategory(category);
        setSpecialFilter(null); // Reset special filter when main category is selected
      }} className={`px-6 py-3 rounded-md text-sm transition-all duration-300 ${selectedCategory === category ? 'bg-[#C1272D] text-white shadow-lg transform scale-105' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            {category === 'all' ? t('all') : language === 'en' ? category.charAt(0).toUpperCase() + category.slice(1) : t(category as any)}
          </button>)}
      </div>
    </div>;
};