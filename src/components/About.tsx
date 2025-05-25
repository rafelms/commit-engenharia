import React, { useEffect } from 'react';

const About: React.FC = () => {
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
    <section id="sobre" className="bg-white section-padding">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="src\assets\mikas.jpeg"
              alt="Equipe COMMIT ENGENHARIA" 
              className="rounded-lg shadow-xl fade-in"
            />
          </div>
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4 fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in" style={{ transitionDelay: '0.2s' }}>
              Transformando o futuro com energia limpa e sustentável
            </h2>
            <p className="text-gray-800 mb-6 fade-in" style={{ transitionDelay: '0.3s', textAlign:'justify'}}>
              Somos a <strong>Commit Engenharia e Energia</strong> uma empresa tocantinense movida pela paixão em transformar desafios em soluções eficientes. Nosso compromisso vai além do nome — está presente em cada atendimento, projeto e instalação que realizamos.

Com uma abordagem humanizada, técnica e profissional, entregamos soluções em energia solar e serviços elétricos com foco na excelência, sustentabilidade e no atendimento personalizado.
            </p>
            <p className="text-gray-800 mb-6 fade-in" style={{ transitionDelay: '0.4s', textAlign:'justify' }}>
              Atuamos em um raio de até 150 km da capital Palmas, levando energia limpa e segurança elétrica para residências, comércios e propriedades rurais. À frente da Commit está <strong>Mikael Thiago Menezes de Santana</strong>, técnico em Eletrotécnica formado pelo Instituto Federal do Tocantins (IFTO) e atualmente graduando em Engenharia Elétrica, também pelo IFTO, já no penúltimo período. Com conhecimento técnico sólido e visão inovadora, ele lidera a empresa com responsabilidade, ética e foco no cliente.

Acreditamos que um futuro melhor se constrói com energia consciente e parcerias verdadeiras. Por isso, estamos prontos para atender você com comprometimento e qualidade em cada etapa do seu projeto.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="fade-in" style={{ transitionDelay: '0.5s' }}>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-gray-600">Projetos Realizados</p>
              </div>
              <div className="fade-in" style={{ transitionDelay: '0.6s' }}>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
              <div className="fade-in" style={{ transitionDelay: '0.7s' }}>
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="fade-in" style={{ transitionDelay: '0.8s' }}>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-600">Cidades Atendidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;