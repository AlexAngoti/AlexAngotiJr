
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { Award, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <AnimatedSection id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Sobre Mim</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img  
              alt="Representação visual de código de programação em um monitor" 
              className="rounded-xl shadow-2xl w-full max-w-md mx-auto aspect-video object-cover border-4 border-primary/50"
             src="https://images.unsplash.com/photo-1520509414578-d9cbf09933a1" />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              Olá! Sou Alex Angoti Jr, um desenvolvedor apaixonado por criar soluções de software que resolvem problemas reais e agregam valor aos negócios. Com experiência em diversas tecnologias e um forte compromisso com a qualidade, estou pronto para enfrentar seus desafios mais complexos.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Minha abordagem é focada na colaboração e na transparência, garantindo que você esteja sempre informado e satisfeito com o progresso do projeto.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-card">
                <Award size={28} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Qualidade Garantida</h4>
                  <p className="text-sm text-muted-foreground">Entrega de software robusto, testado e escalável.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-card">
                <Zap size={28} className="text-secondary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Desenvolvimento Ágil</h4>
                  <p className="text-sm text-muted-foreground">Processos eficientes para entregas rápidas e adaptáveis.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-card col-span-1 sm:col-span-2">
                <Users size={28} className="text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Foco no Cliente</h4>
                  <p className="text-sm text-muted-foreground">Soluções personalizadas que atendem suas expectativas.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
