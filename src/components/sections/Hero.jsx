
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Linkedin as LinkedinIcon } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const Hero = () => {
  const linkedinLink = "https://www.linkedin.com/in/alex-aparecido-angoti-junior-4a5188237/";

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatedSection id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-20 px-4 bg-gradient-to-br from-background to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img  alt="Abstract background of code and technology" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1679978880855-fb35585ce343" />
      </div>
      <motion.div 
        className="z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="text-gradient">Alex Angoti Jr</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Desenvolvedor especialista em <span className="text-primary font-semibold">sistemas personalizados</span>, <span className="text-secondary font-semibold">manutenção evolutiva</span> e <span className="text-accent font-semibold">soluções inovadoras</span> para o seu negócio.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transform hover:scale-105 transition-all duration-300 animate-pulse-glow w-full sm:w-auto" onClick={scrollToContact}>
            Entre em Contato
          </Button>
          <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transform hover:scale-105 transition-all duration-300 w-full sm:w-auto" asChild>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              LinkedIn <LinkedinIcon size={20} className="ml-2" />
            </a>
          </Button>
        </div>
         <motion.a 
            href="#services" 
            className="mt-8 inline-flex items-center text-lg text-primary hover:underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Ver Meus Serviços <ArrowDown size={20} className="ml-2" />
          </motion.a>
      </motion.div>
       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown size={32} className="text-primary animate-bounce" />
      </motion.div>
    </AnimatedSection>
  );
};

export default Hero;
