import React, { useEffect } from 'react';
import { 
  DollarSign, 
  Leaf, 
  Shield, 
  Clock
} from 'lucide-react';

const Benefits: React.FC = () => {
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

  const benefits = [
    {
      icon: <DollarSign size={36} className="text-primary" />,
      title: "Economia Significativa",
      description: "Reduza sua conta de energia em até 85%* com nossos sistemas solares fotovoltaicos de alta eficiência. (*A economia pode variar conforme o consumo, local de instalação e dimensionamento do sistema.)"
    },
    {
      icon: <Leaf size={36} className="text-primary"  />,
      title: "Sustentabilidade",
      description: "Contribua para um planeta mais limpo com energia renovável, reduzindo significativamente as emissões de CO₂."
    },
    {
      icon: <Shield size={36} className="text-primary" />,
      title: "Garantia de Qualidade",
      description: "Nossos produtos e serviços possuem garantia e seguem rigorosos padrões de qualidade, com certificação dos órgãos reguladores."
    },
    {
      icon: <Clock size={36} className="text-primary" />,
      title: "Durabilidade",
      description: "Sistemas projetados para operar por mais de 25 anos, garantindo retorno a longo prazo sobre o investimento."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4 fade-in">
            Porque Escolher a COMMIT?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in" style={{ transitionDelay: '0.2s' }}>
            Benefícios da Energia Solar
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 fade-in" style={{ transitionDelay: '0.3s' }}>
            Descubra como a energia solar pode transformar sua vida, trazendo economia, sustentabilidade e tranquilidade para sua residência ou empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 border border-gray-200 rounded-lg fade-in"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contato" 
            className="btn-primary inline-block fade-in"
            style={{ transitionDelay: '0.6s' }}
          >
            Fale com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;