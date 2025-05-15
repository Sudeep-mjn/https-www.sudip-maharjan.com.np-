import React, { useState } from 'react';
import { motion } from 'framer-motion';
export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  // Product data structure
  const products = [{
    id: 'B001',
    name: 'Buddha Statue',
    category: 'buddha',
    image: 'url-to-image',
    video: 'url-to-video',
    description: 'Traditional Buddha statue with fine details'
  }
  // Add more products...
  ];
  return <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Newari-style header */}
        <div className="border-8 border-[#C1272D] p-8 mb-12 relative">
          <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-[#D4AF37] -mt-8 -ml-8"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-[#D4AF37] -mt-8 -mr-8"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-8 border-l-8 border-[#D4AF37] -mb-8 -ml-8"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-[#D4AF37] -mb-8 -mr-8"></div>
          <h1 className="text-4xl md:text-6xl text-center font-bold text-[#D4AF37]">
            Our Collection
          </h1>
        </div>
        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => <motion.div key={product.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-gray-900 rounded-lg overflow-hidden">
              {/* Product content */}
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="absolute top-4 left-4 bg-[#C1272D] text-white px-3 py-1 rounded-full">
                  #{product.id}
                </div>
              </div>
              {/* Product details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-300">{product.description}</p>
                {/* Video preview if available */}
                {product.video && <div className="mt-4">
                    <video controls className="w-full rounded-lg" poster={product.image}>
                      <source src={product.video} type="video/mp4" />
                    </video>
                  </div>}
              </div>
            </motion.div>)}
        </div>
      </div>
    </div>;
};