import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5563984163205"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary fixed bottom-8 right-8 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
};

export default FloatingWhatsApp;
