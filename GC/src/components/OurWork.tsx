import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
const workItems = [{
  id: 1,
  title: {
    en: 'Traditional Buddha Collection',
    ne: 'परम्परागत बुद्ध संग्रह'
  },
  image: 'https://images.unsplash.com/photo-1582127832282-0c3d5fd5b87f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  description: {
    en: 'Collection of handcrafted Buddha statues with traditional Nepali craftsmanship',
    ne: 'परम्परागत नेपाली कारीगरी सहित हस्तनिर्मित बुद्ध मूर्तिहरूको संग्रह'
  }
}, {
  id: 2,
  title: {
    en: 'Royal Temple Projects',
    ne: 'राजकीय मन्दिर परियोजनाहरू'
  },
  image: 'https://images.unsplash.com/photo-1577193453931-ca9224110614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  description: {
    en: 'Custom statues crafted for royal temples and monasteries',
    ne: 'राजकीय मन्दिर र गुम्बाहरूको लागि निर्मित विशेष मूर्तिहरू'
  }
}, {
  id: 3,
  title: {
    en: 'Modern Interpretations',
    ne: 'आधुनिक व्याख्याहरू'
  },
  image: 'https://images.unsplash.com/photo-1609644124060-ac26661dde70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  description: {
    en: 'Contemporary takes on traditional designs',
    ne: 'परम्परागत डिजाइनहरूमा समकालीन दृष्टिकोण'
  }
}];
export const OurWork = () => {
  const {
    language
  } = useLanguage();
  return <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#D4AF37]" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }}>
          {language === 'en' ? 'Our Featured Work' : 'हाम्रो विशेष कार्य'}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workItems.map(item => <motion.div key={item.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} whileHover={{
          y: -10
        }} transition={{
          duration: 0.3
        }}>
              <Link to={`/work/${item.id}`} className="block">
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
                  <div className="relative h-64">
                    <img src={item.image} alt={language === 'en' ? item.title.en : item.title.ne} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-20"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">
                      {language === 'en' ? item.title.en : item.title.ne}
                    </h3>
                    <p className="text-gray-300">
                      {language === 'en' ? item.description.en : item.description.ne}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>)}
        </div>
      </div>
    </section>;
};