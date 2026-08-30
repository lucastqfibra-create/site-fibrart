import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '5531973101117';
  const message = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre os produtos FIBRART.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/40"
    >
      <MessageCircle size={26} />
    </a>
  );
}
