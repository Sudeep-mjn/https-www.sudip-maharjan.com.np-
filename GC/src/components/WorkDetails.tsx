import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
// Enhanced work details with more business information
const workDetails = {
  1: {
    title: {
      en: 'Traditional Buddha Collection',
      ne: 'परम्परागत बुद्ध संग्रह'
    },
    description: {
      en: 'Our Traditional Buddha Collection represents the pinnacle of Nepali craftsmanship. Each piece is meticulously handcrafted using centuries-old techniques passed down through generations.',
      ne: 'हाम्रो परम्परागत बुद्ध संग्रहले नेपाली कारीगरीको शिखर प्रतिनिधित्व गर्दछ। प्रत्येक टुक्रा पुस्तौंदेखि हस्तान्तरित शताब्दी पुरानो प्रविधिहरू प्रयोग गरी मेहनतपूर्वक हातले बनाइएको छ।'
    },
    timeline: {
      research: '2-3 days',
      design: '3-4 days',
      crafting: '15-20 days',
      finishing: '5-7 days',
      total: '25-34 days'
    },
    process: ['Initial consultation and design approval', 'Material selection and preparation', 'Hand-crafting and detailing', 'Traditional patina application', 'Quality inspection and finishing'],
    materials: ['Pure copper sheets (99.9% purity)', 'Traditional tools and implements', 'Natural patina compounds', 'Premium finishing materials'],
    customization: ['Size customization available', 'Custom patina options', 'Personalized designs available', 'Special packaging options'],
    testimonials: [{
      name: 'John D.',
      location: 'United States',
      comment: 'Exceptional craftsmanship and attention to detail. The Buddha statue exceeded my expectations.'
    }, {
      name: 'Sarah M.',
      location: 'United Kingdom',
      comment: 'Beautiful work and excellent communication throughout the process.'
    }],
    images: ['https://images.unsplash.com/photo-1609644124060-ac26661dde70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1577193453931-ca9224110614?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1582127832282-0c3d5fd5b87f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'],
    pricing: {
      small: '$500-$1000',
      medium: '$1000-$2500',
      large: '$2500-$5000+'
    }
  }
  // Add similar detailed information for other work items...
};
export const WorkDetails = () => {
  const {
    id
  } = useParams();
  const {
    language
  } = useLanguage();
  const work = workDetails[Number(id)];
  if (!work) return <div>Work not found</div>;
  return <main className="pt-20 bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-8 text-[#D4AF37]" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }}>
          {language === 'en' ? work.title.en : work.title.ne}
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Images */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {work.images.map((image, index) => <motion.div key={index} className="rounded-lg overflow-hidden" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2 * index
            }}>
                  <img src={image} alt={`${language === 'en' ? work.title.en : work.title.ne} - ${index + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </motion.div>)}
            </div>
            {/* Pricing Section */}
            <motion.div className="mt-8 bg-gray-900 p-6 rounded-lg" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6
          }}>
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">
                Pricing Guide
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 border border-gray-800 rounded">
                  <div className="text-lg font-semibold text-white">Small</div>
                  <div className="text-[#D4AF37]">{work.pricing.small}</div>
                </div>
                <div className="text-center p-4 border border-gray-800 rounded">
                  <div className="text-lg font-semibold text-white">Medium</div>
                  <div className="text-[#D4AF37]">{work.pricing.medium}</div>
                </div>
                <div className="text-center p-4 border border-gray-800 rounded">
                  <div className="text-lg font-semibold text-white">Large</div>
                  <div className="text-[#D4AF37]">{work.pricing.large}</div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Right Column - Details */}
          <div>
            <motion.div className="bg-gray-900 p-6 rounded-lg mb-8" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }}>
              <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">
                Project Timeline
              </h2>
              <div className="space-y-4">
                {Object.entries(work.timeline).map(([phase, duration], index) => <div key={phase} className="flex justify-between items-center">
                      <span className="text-gray-300 capitalize">{phase}:</span>
                      <span className="text-white">{duration}</span>
                    </div>)}
              </div>
            </motion.div>
            <motion.div className="bg-gray-900 p-6 rounded-lg mb-8" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.2
          }}>
              <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">
                Crafting Process
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {work.process.map((step, index) => <li key={index}>{step}</li>)}
              </ul>
            </motion.div>
            <motion.div className="bg-gray-900 p-6 rounded-lg mb-8" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.4
          }}>
              <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">
                Materials Used
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {work.materials.map((material, index) => <li key={index}>{material}</li>)}
              </ul>
            </motion.div>
            {/* Testimonials */}
            <motion.div className="bg-gray-900 p-6 rounded-lg" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.6
          }}>
              <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">
                Customer Testimonials
              </h2>
              <div className="space-y-4">
                {work.testimonials.map((testimonial, index) => <div key={index} className="border-l-4 border-[#D4AF37] pl-4">
                    <p className="text-gray-300 italic mb-2">
                      "{testimonial.comment}"
                    </p>
                    <p className="text-sm text-gray-400">
                      - {testimonial.name}, {testimonial.location}
                    </p>
                  </div>)}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>;
};