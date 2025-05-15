import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
export const Hero = () => {
  const {
    t
  } = useLanguage();
  return <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-full h-full">
          <img src="https://images.unsplash.com/photo-1582727657635-c771002bdada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#D4AF37] drop-shadow-lg">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-3xl mb-8 max-w-3xl mx-auto text-[#F5F5F5] drop-shadow-md">
            {t('heroSubtitle')}
          </p>
          <motion.a href="#gallery" className="inline-block px-8 py-4 bg-[#C1272D] text-white text-lg rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            {t('heroButton')}
          </motion.a>
        </motion.div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-24 bg-gradient-to-t from-black to-transparent"></div>
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        <div className="h-16 bg-black"></div>
      </div>
      {/* Add these effects to the existing Hero component */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: [0, 1, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1
    }} className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <div className="w-1 h-20 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"></div>
      </motion.div>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: [0, 1, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1,
      delay: 1
    }} className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <div className="w-1 h-20 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"></div>
      </motion.div>
      <motion.div initial={{
      scale: 1
    }} animate={{
      scale: [1, 1.05, 1]
    }} transition={{
      duration: 4,
      repeat: Infinity
    }} className="absolute -top-20 left-1/2 transform -translate-x-1/2">
        <div className="w-40 h-40 rounded-full bg-[#D4AF37] opacity-10 blur-3xl"></div>
      </motion.div>
    </section>;
};