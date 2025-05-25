import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logoImage from '../assets/logosemfund2.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img src={logoImage} alt="COMMIT ENGENHARIA" className="mb-6 h-16" />
            <p className="text-gray-400 mb-6">
              Transformando o futuro com energia limpa e sustentável. Soluções completas em energia solar para residências e empresas.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/commit.eng.energia/" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61561345893869" target="blank" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="text-gray-400 hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="https://www.instagram.com/p/C-lHy8XPGjB/" target="_blank" className="text-gray-400 hover:text-white transition-colors">Instalação de Painéis Solares</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Manutenção de Sistemas</a></li>
              <li><a href="https://www.instagram.com/stories/highlights/17872086990057581/" target="_blank" className="text-gray-400 hover:text-white transition-colors">Reparos e Consertos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Projetos Personalizados</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultoria em Energia Solar</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-gray-400">(906 Sul Alameda 12, 26)<br />Palmas - Tocantins, 77023-424</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="text-gray-400">(63) 98416-3205</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-gray-400">commit.eng.energia@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
                <a 
                  href="https://wa.me/5563984163205" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy;2024 COMMIT ENGENHARIA E ENERGIA LTDA. Todos os direitos reservados. CNPJ: 41.678.942/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;