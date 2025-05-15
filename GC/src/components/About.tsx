import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
export const About = () => {
  const {
    t,
    language
  } = useLanguage();
  return <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#D4AF37]">
          {t('aboutTitle')}
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-2 border-2 border-[#D4AF37] rounded-lg transform translate-x-4 translate-y-4"></div>
              <img src="https://images.unsplash.com/photo-1601887389937-0b02c26b602c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Craftsman working on copper statue" className="rounded-lg w-full h-auto object-cover shadow-lg relative z-10" />
            </div>
          </div>
          {/* Content */}
          <div className="md:w-1/2">
            <div className="bg-black bg-opacity-80 p-6 rounded-lg border border-[#C1272D] shadow-lg">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }}>
                <p className="text-lg mb-6 text-[#F5F5F5]">
                  {language === 'en' ? t('aboutContent') : <>
                      <span className="block mb-4">{t('aboutContent')}</span>
                      <span className="block text-sm text-gray-400 mt-2">
                        English Version Available
                      </span>
                    </>}
                </p>
                {/* Owner Information */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h3 className="text-xl font-bold mb-6 text-[#D4AF37]">
                    Meet Our Master Craftsman
                  </h3>
                  <div className="flex flex-col md:flex-row items-center mb-6">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                      <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Surendra Maharjan" className="w-full h-auto rounded-lg object-cover border-4 border-[#D4AF37] shadow-xl" />
                    </div>
                    <div className="w-full md:w-2/3 md:pl-8">
                      <h4 className="text-2xl font-semibold text-[#F5F5F5] mb-2">
                        Surendra Maharjan
                      </h4>
                      <p className="text-xl text-[#D4AF37] mb-4">
                        Master Artisan & Owner
                      </p>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        With over three decades of experience in traditional
                        Nepali craftsmanship, Surendra Maharjan has been
                        creating exquisite copper statues that have brought joy
                        to countless customers worldwide. His dedication to
                        preserving authentic techniques while embracing
                        contemporary designs has established G.C. Handicraft as
                        a trusted name in the industry.
                      </p>
                    </div>
                  </div>
                  {/* Stats Grid */}
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <div className="text-[#D4AF37] text-xl font-bold">
                        30+
                      </div>
                      <div className="text-gray-400 text-sm">
                        Years Experience
                      </div>
                    </div>
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <div className="text-[#D4AF37] text-xl font-bold">
                        1000+
                      </div>
                      <div className="text-gray-400 text-sm">
                        Happy Customers
                      </div>
                    </div>
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <div className="text-[#D4AF37] text-xl font-bold">
                        500+
                      </div>
                      <div className="text-gray-400 text-sm">
                        Unique Designs
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};