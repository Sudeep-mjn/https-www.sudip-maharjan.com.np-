import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useStatues } from '../../context/StatueContext';
import { FilterSection } from './FilterSection';
import { SearchBar } from './SearchBar';
import { StatueCard } from './StatueCard';
import { StatueModal } from './StatueModal';
export const StatueGallery = () => {
  const {
    t
  } = useLanguage();
  const {
    filteredStatues,
    selectedStatue
  } = useStatues();
  return <section id="gallery" className="py-20 bg-gradient-to-b from-black to-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#D4AF37]">
          {t('galleryTitle')}
        </h2>
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="md:w-1/3">
              <SearchBar />
            </div>
            <div className="md:w-2/3">
              <FilterSection />
            </div>
          </div>
        </div>
        {filteredStatues.length === 0 ? <div className="text-center py-16">
            <p className="text-xl text-[#F5F5F5]">
              No statues found matching your criteria.
            </p>
          </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStatues.map(statue => <StatueCard key={statue.id} statue={statue} />)}
          </div>}
      </div>
      {selectedStatue && <StatueModal />}
    </section>;
};