
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </MotionConfig>
  );
}

export default App;
