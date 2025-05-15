import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
export const Header = () => {
  const {
    t
  } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors">
            G.C. Handicraft
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/products" className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors">
            Products
          </Link>
          <a href="#about" className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors">
            {t('about')}
          </a>
          <a href="#gallery" className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors">
            {t('gallery')}
          </a>
          <a href="#contact" className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors">
            {t('contact')}
          </a>
          <LanguageSwitcher />
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden bg-black bg-opacity-95 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#about" className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t('about')}
            </a>
            <a href="#gallery" className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t('gallery')}
            </a>
            <a href="#contact" className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t('contact')}
            </a>
            <LanguageSwitcher />
          </div>
        </div>}
    </header>;
};