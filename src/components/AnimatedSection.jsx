import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ id, children, className, delay = 0 }) => {
  return (
    <motion.section
      id={id}   // <-- AQUI! Agora o id será repassado para o DOM
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
