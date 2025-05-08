
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Code, Settings, Server, Brain } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: <Code size={40} className="text-primary" />,
    title: "Sistemas Personalizados",
    description: "Desenvolvimento de software sob medida para atender às necessidades específicas do seu negócio, otimizando processos e impulsionando resultados.",
  },
  {
    icon: <Settings size={40} className="text-secondary" />,
    title: "Manutenção de Sistemas",
    description: "Suporte técnico especializado, atualizações e melhorias contínuas para garantir que seus sistemas existentes funcionem com máxima performance e segurança.",
  },
  {
    icon: <Server size={40} className="text-accent" />,
    title: "Prestação de Serviços de TI",
    description: "Consultoria, alocação de desenvolvedores e soluções completas em tecnologia da informação para sua empresa focar no que realmente importa.",
  },
  {
    icon: <Brain size={40} className="text-primary" />,
    title: "Soluções Inovadoras",
    description: "Aplicação de tecnologias emergentes e metodologias ágeis para criar soluções criativas que diferenciam sua empresa no mercado.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <AnimatedSection id="services" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gradient">Meus Serviços</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Ofereço uma gama completa de serviços de desenvolvimento para transformar suas ideias em realidade e otimizar seus processos.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.custom
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col glassmorphism border-primary/30 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <CardDescription className="text-base text-foreground/80">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.custom>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
motion.custom = motion(Card);

export default Services;
