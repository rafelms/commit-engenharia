import React, { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import logoImage from '../assets/logosemfund2.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src={logoImage} alt="COMMIT ENGENHARIA" className="logo-image" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-white hover:text-primary transition-colors">Início</a>
          <a href="#sobre" className="text-white hover:text-primary transition-colors">Sobre</a>
          <a href="#servicos" className="text-white hover:text-primary transition-colors">Serviços</a>
          <a href="#projetos" className="text-white hover:text-primary transition-colors">Projetos</a>
          <a href="#contato" className="text-white hover:text-primary transition-colors">Contato</a>
          <a 
            href="https://wa.me/5500000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary flex items-center"
          >
            <span>Fale Conosco</span>
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a 
              href="#inicio" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Início
            </a>
            <a 
              href="#sobre" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#projetos" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projetos
            </a>
            <a 
              href="#contato" 
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
            <a 
              href="https://wa.me/5563984163205" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;