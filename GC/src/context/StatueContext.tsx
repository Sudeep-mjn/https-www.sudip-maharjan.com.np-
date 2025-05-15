import React, { useState, createContext, useContext } from 'react';
// Sample statue data
export interface Statue {
  id: number;
  name: {
    en: string;
    ne: string;
  };
  category: {
    en: string;
    ne: string;
  };
  size: number;
  description: {
    en: string;
    ne: string;
  };
  image: string;
}
const statueData: Statue[] = [{
  id: 1,
  name: {
    en: 'Buddha Shakyamuni',
    ne: 'बुद्ध शाक्यमुनि'
  },
  category: {
    en: 'Buddha',
    ne: 'बुद्ध'
  },
  size: 12,
  description: {
    en: 'This exquisite Buddha statue represents Shakyamuni Buddha in meditation pose. Crafted with traditional techniques, this copper statue features intricate details showcasing the serene expression and perfect proportions that are hallmarks of Nepali craftsmanship.',
    ne: 'यो उत्कृष्ट बुद्ध मूर्तिले ध्यान मुद्रामा शाक्यमुनि बुद्धको प्रतिनिधित्व गर्दछ। परम्परागत प्रविधिहरू सहित निर्मित, यो तामा मूर्तिमा शान्त अभिव्यक्ति र सिद्ध अनुपातहरू देखाउने जटिल विवरणहरू छन् जुन नेपाली कारीगरीको विशेषता हो।'
  },
  image: 'https://images.unsplash.com/photo-1590067024562-a7838aa2f6d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 2,
  name: {
    en: 'Lord Ganesh',
    ne: 'भगवान गणेश'
  },
  category: {
    en: 'Ganesh',
    ne: 'गणेश'
  },
  size: 8,
  description: {
    en: 'This beautifully crafted Ganesh statue embodies the elephant-headed deity known as the remover of obstacles. Each detail from the trunk to the symbolic items held in his hands is meticulously crafted in traditional Nepali style.',
    ne: 'यो सुन्दर ढंगले निर्मित गणेश मूर्तिले बाधा हटाउने भनेर चिनिने हात्ती-टाउके देवताको प्रतिनिधित्व गर्दछ। सुँडदेखि उनका हातमा राखिएका प्रतीकात्मक वस्तुहरूसम्म प्रत्येक विवरण परम्परागत नेपाली शैलीमा मेहनतपूर्वक निर्माण गरिएको छ।'
  },
  image: 'https://images.unsplash.com/photo-1582727657635-c771002bdada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 3,
  name: {
    en: 'Green Tara',
    ne: 'हरित तारा'
  },
  category: {
    en: 'Tara',
    ne: 'तारा'
  },
  size: 10,
  description: {
    en: 'Green Tara is known as the Buddha of enlightened activity. This statue captures her in the traditional pose of royal ease with one leg extended, symbolizing her readiness to spring into action to help all beings.',
    ne: 'हरित तारालाई ज्ञानोदय क्रियाकलापको बुद्धको रूपमा चिनिन्छ। यो मूर्तिले उनलाई एउटा खुट्टा विस्तारित गरेर शाही आरामको परम्परागत मुद्रामा कैद गर्दछ, जसले सबै प्राणीहरूलाई मद्दत गर्न कार्यमा उफ्रने उनको तत्परतालाई प्रतीक गर्दछ।'
  },
  image: 'https://images.unsplash.com/photo-1609644124060-ac26661dde70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 4,
  name: {
    en: 'Manjushree',
    ne: 'मञ्जुश्री'
  },
  category: {
    en: 'Manjushree',
    ne: 'मञ्जुश्री'
  },
  size: 14,
  description: {
    en: 'Manjushree, the Bodhisattva of wisdom, is depicted holding the sword of wisdom which cuts through ignorance. This finely detailed copper statue follows traditional Nepali iconography and showcases exceptional craftsmanship.',
    ne: 'ज्ञानको बोधिसत्व मञ्जुश्रीलाई अज्ञानतालाई काट्ने ज्ञानको तरबार बोकेको देखाइएको छ। यो राम्रोसँग विस्तृत तामाको मूर्तिले परम्परागत नेपाली प्रतीकात्मकतालाई पछ्याउँछ र असाधारण कारीगरी प्रदर्शन गर्दछ।'
  },
  image: 'https://images.unsplash.com/photo-1616628188467-8ad26663f3f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  id: 5,
  name: {
    en: 'Seated Buddha',
    ne: 'बसेको बुद्ध'
  },
  category: {
    en: 'Buddha',
    ne: 'बुद्ध'
  },
  size: 6,
  description: {
    en: 'This smaller Buddha statue is perfect for personal altars or meditation spaces. Despite its compact size, it maintains all the detailed craftsmanship of larger pieces, with perfect proportions and peaceful expression.',
    ne: 'यो सानो बुद्ध मूर्ति व्यक्तिगत वेदी वा ध्यान स्थानहरूको लागि उपयुक्त छ। यसको कम्प्याक्ट आकारको बावजुद, यसले सिद्ध अनुपात र शान्तिपूर्ण अभिव्यक्तिको साथ ठूला टुक्राहरूको सबै विस्तृत कारीगरी कायम राख्दछ।'
  },
  image: 'https://images.unsplash.com/photo-1593014109521-48ea09f22592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
}, {
  id: 6,
  name: {
    en: 'Dancing Ganesh',
    ne: 'नृत्य गणेश'
  },
  category: {
    en: 'Ganesh',
    ne: 'गणेश'
  },
  size: 9,
  description: {
    en: 'This dynamic copper statue depicts Lord Ganesh in a dancing pose, celebrating the joy of life. The flowing movement captured in solid copper showcases the exceptional skill of our master craftsmen.',
    ne: 'यो गतिशील तामा मूर्तिले भगवान गणेशलाई नृत्य मुद्रामा देखाउँछ, जीवनको आनन्द मनाउँदै। ठोस तामामा कैद गरिएको प्रवाह हुने गति हाम्रा मास्टर कारीगरहरूको असाधारण सीप प्रदर्शन गर्दछ।'
  },
  image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}];
interface StatueContextType {
  statues: Statue[];
  filteredStatues: Statue[];
  selectedStatue: Statue | null;
  searchTerm: string;
  selectedCategory: string;
  selectedSize: string;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedSize: (size: string) => void;
  setSelectedStatue: (statue: Statue | null) => void;
}
const StatueContext = createContext<StatueContextType | undefined>(undefined);
export const StatueProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [statues] = useState<Statue[]>(statueData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedStatue, setSelectedStatue] = useState<Statue | null>(null);
  // Filter statues based on search term, category, and size
  const filteredStatues = statues.filter(statue => {
    const matchesSearch = statue.name.en.toLowerCase().includes(searchTerm.toLowerCase()) || statue.name.ne.toLowerCase().includes(searchTerm.toLowerCase()) || statue.description.en.toLowerCase().includes(searchTerm.toLowerCase()) || statue.description.ne.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || statue.category.en.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSize = selectedSize === 'all' || statue.size === parseInt(selectedSize);
    return matchesSearch && matchesCategory && matchesSize;
  });
  return <StatueContext.Provider value={{
    statues,
    filteredStatues,
    selectedStatue,
    searchTerm,
    selectedCategory,
    selectedSize,
    setSearchTerm,
    setSelectedCategory,
    setSelectedSize,
    setSelectedStatue
  }}>
      {children}
    </StatueContext.Provider>;
};
export const useStatues = () => {
  const context = useContext(StatueContext);
  if (context === undefined) {
    throw new Error('useStatues must be used within a StatueProvider');
  }
  return context;
};