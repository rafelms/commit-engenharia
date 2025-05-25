import React, { useEffect, useState } from 'react';

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  const projects = [
    {
      image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Instalação Residencial",
      description: "Sistema de 5kWp instalado em residência urbana, gerando economia mensal de 90% na conta de energia.",
      location: "São Paulo, SP"
    },
    {
      image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Projeto Comercial",
      description: "Implementação de sistema fotovoltaico para empresa de médio porte, reduzindo custos operacionais significativamente.",
      location: "Rio de Janeiro, RJ"
    },
    {
      image: "https://images.pexels.com/photos/8853511/pexels-photo-8853511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ",
      title: "Fazenda Solar",
      description: "Projeto de grande escala para propriedade rural, fornecendo energia limpa para todas as operações da fazenda.",
      location: "Goiânia, GO"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projetos" className="bg-black text-white section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-primary font-medium text-sm mb-4 fade-in">
            Nossos Projetos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in" style={{ transitionDelay: '0.2s' }}>
            Transformando Energia Solar em Realidade
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 fade-in" style={{ transitionDelay: '0.3s' }}>
            Conheça alguns dos nossos projetos de sucesso e veja como estamos ajudando empresas e residências a economizar e contribuir com o meio ambiente.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg fade-in" style={{ transitionDelay: '0.4s' }}>
            <div 
              className="flex transition-transform duration-500 ease-in-out h-[500px]" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-2">{project.description}</p>
                    <div className="flex items-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-colors"
            onClick={prevSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-colors"
            onClick={nextSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-primary' : 'bg-gray-600'}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;