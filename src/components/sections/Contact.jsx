
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Briefcase, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Contact = () => {
  const whatsappNumber = "5543996427470";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Alex, gostaria de falar sobre seus serviços.")}`;
  const emailAddress = "alexangoti1610@gmail.com";
  const emailSubject = encodeURIComponent("Contato sobre Serviços de Desenvolvimento");
  const emailBody = encodeURIComponent(
    "Olá Alex,\n\nEstou entrando em contato através do seu site.\n\nGostaria de discutir sobre [Descreva brevemente seu projeto/necessidade aqui].\n\nMeu nome é: [Seu Nome Aqui]\n\nAguardo seu retorno.\n\nAtenciosamente,"
  );
  const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  const contactInfo = [
    { icon: <Mail size={24} className="text-primary" />, text: emailAddress, href: mailtoLink },
    { icon: <Phone size={24} className="text-primary" />, text: "+55 (43) 99642-7470", href: `tel:+${whatsappNumber}` },
    { icon: <Linkedin size={24} className="text-primary" />, text: "LinkedIn", href: "https://www.linkedin.com/in/alex-aparecido-angoti-junior-4a5188237/", target: "_blank" },
    { icon: <Briefcase size={24} className="text-primary" />, text: "CNPJ: 55.993.096/0001-28" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  
  return (
    <AnimatedSection id="contact" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gradient">Entre em Contato</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Pronto para iniciar seu próximo projeto ou tem alguma dúvida? Fale comigo!
        </p>
        <Card className="max-w-3xl mx-auto glassmorphism border-primary/30 p-6 md:p-8">
          <CardHeader className="pb-0">
            <CardTitle className="text-center text-3xl mb-6">Alex Angoti Jr</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.custom
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <a 
                    href={item.href} 
                    target={item.target} 
                    rel={item.target ? "noopener noreferrer" : undefined}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${item.href ? 'hover:bg-primary/10' : ''}`}
                  >
                    {item.icon}
                    <span className="text-lg text-foreground/90">{item.text}</span>
                  </a>
                </motion.custom>
              ))}
            </div>
            <motion.div
              className="mt-10 text-center flex flex-col sm:flex-row justify-center items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: contactInfo.length * 0.15 + 0.2, ease: "easeOut" }}
            >
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-700 text-white hover:opacity-90 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} className="mr-2" /> WhatsApp
                </a>
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto" asChild>
                <a href={mailtoLink}>
                  <Mail size={20} className="mr-2" /> Enviar Email
                </a>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
};
motion.custom = motion.div;

export default Contact;
