import React, { useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare
} from 'lucide-react';

const Contact: React.FC = () => {
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
    <section id="contato" className="bg-white section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4 fade-in">
            Entre em Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in" style={{ transitionDelay: '0.2s' }}>
            Vamos Conversar Sobre Seu Projeto
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 fade-in" style={{ transitionDelay: '0.3s' }}>
            Estamos prontos para ajudar você a deixar o sol pagar a sua conta de energia! Entre em contato para um orçamento gratuito.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="fade-in" style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Endereço</h4>
                  <p className="text-gray-600">906 Sul Alameda 12, 26<br />Palmas - Tocantins, 77023-424</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefone</h4>
                  <p className="text-gray-600">(63) 98416-3205</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">commit.eng.energia@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MessageSquare className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/5563984378326" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Clique aqui para falar conosco
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="mb-2"><span className="font-semibold">Segunda a Sexta:</span> 8h às 18h</p>
                <p><span className="font-semibold">Sábado:</span> 9h às 13h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;