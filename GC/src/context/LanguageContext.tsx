import React, { useState, createContext, useContext } from 'react';
// English translations
const enTranslations = {
  // Header
  explore: 'Explore Collection',
  about: 'About',
  gallery: 'Gallery',
  contact: 'Contact',
  // Hero
  heroTitle: 'G.C. Handicraft',
  heroSubtitle: 'Preserving Nepali heritage through exquisite copper craftsmanship',
  heroButton: 'Explore Collection',
  // About
  aboutTitle: 'Our Heritage',
  aboutContent: 'G.C. Handicraft has been creating authentic Nepali copper statues for over three generations. Our master craftsmen use traditional techniques passed down through centuries, ensuring each piece reflects the rich cultural heritage of Nepal. Every statue is handcrafted with meticulous attention to detail, making each one a unique piece of art that carries spiritual significance and cultural value.',
  // Gallery
  galleryTitle: 'Statue Collection',
  searchPlaceholder: 'Search by name...',
  category: 'Category',
  size: 'Size',
  all: 'All',
  inches: 'inches',
  // Categories
  buddha: 'Buddha',
  ganesh: 'Ganesh',
  tara: 'Tara',
  manjushree: 'Manjushree',
  // Contact
  contactTitle: 'Get In Touch',
  address: 'Address',
  addressValue: 'Patan Durbar Square, Lalitpur, Nepal',
  phone: 'Phone',
  email: 'Email',
  message: 'Message',
  send: 'Send Message',
  // Footer
  copyright: '© 2023 G.C. Handicraft. All rights reserved.'
};
// Nepali translations
const neTranslations = {
  // Header
  explore: 'संग्रह हेर्नुहोस्',
  about: 'हाम्रो बारेमा',
  gallery: 'ग्यालरी',
  contact: 'सम्पर्क',
  // Hero
  heroTitle: 'जि.सी. हस्तकला',
  heroSubtitle: 'उत्कृष्ट तामा शिल्पकारिता मार्फत नेपाली सम्पदा संरक्षण',
  heroButton: 'संग्रह हेर्नुहोस्',
  // About
  aboutTitle: 'हाम्रो सम्पदा',
  aboutContent: 'जि.सी. हस्तकला तीन पुस्तादेखि प्रामाणिक नेपाली तामाका मूर्तिहरू बनाउँदै आइरहेको छ। हाम्रा मास्टर कारीगरहरूले शताब्दीयौंदेखि हस्तान्तरित परम्परागत प्रविधिहरू प्रयोग गर्दछन्, प्रत्येक टुक्राले नेपालको समृद्ध सांस्कृतिक सम्पदा प्रतिबिम्बित गर्छ। प्रत्येक मूर्ति विस्तृत ध्यानका साथ हातले बनाइएको छ, प्रत्येकलाई अद्वितीय कला बनाउँदै जसले आध्यात्मिक महत्व र सांस्कृतिक मूल्य बोक्छ।',
  // Gallery
  galleryTitle: 'मूर्ति संग्रह',
  searchPlaceholder: 'नामद्वारा खोज्नुहोस्...',
  category: 'वर्ग',
  size: 'आकार',
  all: 'सबै',
  inches: 'इन्च',
  // Categories
  buddha: 'बुद्ध',
  ganesh: 'गणेश',
  tara: 'तारा',
  manjushree: 'मञ्जुश्री',
  // Contact
  contactTitle: 'सम्पर्क गर्नुहोस्',
  address: 'ठेगाना',
  addressValue: 'पाटन दरबार स्क्वायर, ललितपुर, नेपाल',
  phone: 'फोन',
  email: 'इमेल',
  message: 'सन्देश',
  send: 'सन्देश पठाउनुहोस्',
  // Footer
  copyright: '© २०२३ जि.सी. हस्तकला। सर्वाधिकार सुरक्षित।'
};
type Language = 'en' | 'ne';
type Translations = typeof enTranslations;
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof Translations) => string;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const LanguageProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>('en');
  const t = (key: keyof Translations): string => {
    const translations = language === 'en' ? enTranslations : neTranslations;
    return translations[key] || key;
  };
  return <LanguageContext.Provider value={{
    language,
    setLanguage,
    t
  }}>
      {children}
    </LanguageContext.Provider>;
};
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};