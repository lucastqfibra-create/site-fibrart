import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5531973101116';
  const message = encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento e saber mais sobre os tanques e pias da Fibrart.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
      aria-label="Falar no WhatsApp com a Fibrart"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="hidden md:inline font-medium text-sm">
        Orçamento via WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
