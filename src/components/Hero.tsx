import React, { useEffect } from 'react';
import { Sun } from 'lucide-react';
import ImageHome from '../assets/ImgHome.png';
const Hero: React.FC = () => {
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

  return (
    <section 
      id="inicio" 
      className="relative h-screen flex items-center justify-center"
      style={{ 
        backgroundImage: `url(${ImageHome})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-4 fade-in">
            <Sun className="text-primary" size={32} />
            <span className="text-primary font-semibold">Energia Solar</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in" style={{ transitionDelay: '0.2s' }}>
            Soluções em <span className="text-primary">Energia Solar</span> para seu futuro sustentável
          </h1>
          <p className="text-lg md:text-xl mb-8 fade-in" style={{ transitionDelay: '0.4s' }}>
            Instalação, manutenção e projetos de sistemas fotovoltaicos. Projetos elétricos personalizados para residências e empresas. Invista com segurança, assegure bem-estar para você e sua família, valorize seu patrimônio e colabore para a preservação do meio ambiente.
          </p>
          <div className="flex flex-wrap gap-4 fade-in" style={{ transitionDelay: '0.6s' }}>
            <a href="#contato" className="btn-primary">
              Solicite um Orçamento
            </a>
            <a href="#servicos" className="btn-outline">
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#sobre" 
          className="animate-bounce bg-white/10 p-2 rounded-full backdrop-blur-sm"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;