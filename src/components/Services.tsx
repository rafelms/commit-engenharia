import React, { useEffect } from 'react';
import { 
  Wrench, 
  FlaskConical, 
  Hammer, 
  PenTool 
} from 'lucide-react';

const Services: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <FlaskConical size={40} className="text-primary mb-4" />,
      title: "Instalação de Sistemas Solar Fotovoltaico",
      description: "Homologação e instalação completa de sistemas fotovoltaicos residenciais, comerciais, industriais e rurais com equipe especializada e materiais de alta qualidade.",
    },
    {
      icon: <Wrench size={40} className=" text-primary mb-4" />,
      title: "Manutenção Preventiva e Corretiva",
      description: "Serviços de monitoramento e manutenção para garantir o máximo desempenho da sua usina solar fotovoltaica, aumentando sua vida útil, eficiência energética e rentabilidade econômica.",
    },
    {
      icon: <Hammer size={40} className="text-primary mb-4" />,
      title: "Reparos e Consertos",
      description: "Diagnóstico e resolução rápida de problemas em usinas fotovoltaicas, com técnicos qualificados e materiais de ponta.",
    },
    {
      icon: <PenTool size={40} className="text-primary mb-4" />,
      title: "Projetos Personalizados",
      description: "Desenvolvimento de projetos elétricos residências e comerciais, projetos de medição e subestação considerando necessidades específicas, previsibilidade orçamentária e dimensionamento correto",
    }
  ];

  return (
    <section id="servicos" className="bg-black text-white section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-primary font-medium text-sm mb-4 fade-in">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in" style={{ transitionDelay: '0.2s' }}>
            Soluções Completas no Setor Elétrico
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 fade-in" style={{ transitionDelay: '0.3s' }}>
            Oferecemos um conjunto completo de serviços para atender todas as suas necessidades em energia solar, desde o projeto inicial até a manutenção contínua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-6 rounded-lg service-card fade-in"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;