
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Briefcase, User, MessageSquare } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#hero', label: 'Início', icon: <Code size={18} className="mr-2" /> },
    { href: '#services', label: 'Serviços', icon: <Briefcase size={18} className="mr-2" /> },
    { href: '#about', label: 'Sobre Mim', icon: <User size={18} className="mr-2" /> },
    { href: '#contact', label: 'Contato', icon: <MessageSquare size={18} className="mr-2" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) setIsOpen(false);
  };
  
  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a 
            href="#hero" 
            className="text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => scrollToSection(e, '#hero')}
          >
            Alex Angoti Jr
          </motion.a>
          
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Button key={link.label} variant="ghost" asChild>
                <a 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </Button>
            ))}
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Abrir menu">
              {isOpen ? <X size={28} className="text-primary"/> : <Menu size={28} className="text-primary"/>}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-xl pb-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col items-center space-y-2 px-4 pt-2">
              {navLinks.map((link) => (
                <motion.a 
                  key={link.label} 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="flex items-center w-full py-3 px-4 text-lg text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md transition-all duration-200"
                  variants={menuItemVariants}
                >
                  {link.icon}
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
