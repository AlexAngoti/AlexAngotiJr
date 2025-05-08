
import React from 'react';
import { Linkedin, Mail, Phone, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="py-12 px-4 bg-card text-muted-foreground text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-center space-x-3 mb-6">
            <Code size={24} className="text-primary" />
            <p className="text-xl font-semibold text-foreground">Alex Angoti Jr</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/alex-aparecido-angoti-junior-4a5188237/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:alexangoti1610@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
          <a href="tel:+5543996427470" className="text-muted-foreground hover:text-primary transition-colors">
            <Phone size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Alex Angoti Jr. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          CNPJ: 55.993.096/0001-28
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
