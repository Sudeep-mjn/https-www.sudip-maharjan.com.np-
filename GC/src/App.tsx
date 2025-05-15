import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { StatueGallery } from './components/StatueGallery';
import { OurWork } from './components/OurWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WorkDetails } from './components/WorkDetails';
import { LanguageProvider } from './context/LanguageContext';
import { StatueProvider } from './context/StatueContext';
import { Products } from './components/Products';
export function App() {
  return <Router>
      <LanguageProvider>
        <StatueProvider>
          <div className="bg-black text-[#F5F5F5] min-h-screen w-full">
            <Header />
            <Routes>
              <Route path="/" element={<main>
                    <Hero />
                    <About />
                    <StatueGallery />
                    <OurWork />
                    <Contact />
                  </main>} />
              <Route path="/work/:id" element={<WorkDetails />} />
              <Route path="/products" element={<Products />} />
            </Routes>
            <Footer />
          </div>
        </StatueProvider>
      </LanguageProvider>
    </Router>;
}