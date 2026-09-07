import React from 'react';
import { Product } from '../data/products';
import { X, CheckCircle2, MessageCircle, Ruler, Sparkles } from 'lucide-react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no produto *${product.name}* (Medidas: ${product.dimensions}). Poderiam me enviar valores e prazos de entrega?`
  );
  const whatsappUrl = `https://wa.me/553131522755?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-700 shadow-md transition"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/9] w-full bg-slate-100 flex items-center justify-center p-6 border-b border-slate-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain max-h-[380px]"
          />
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-2 uppercase tracking-wide">
              {product.material}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {product.name}
            </h2>
            <div className="flex items-center gap-2 text-sm text-slate-600 font-medium mt-1">
              <Ruler className="w-4 h-4 text-blue-600" />
              <span>Dimensões: {product.dimensions}</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {product.description}
          </p>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Cores Disponíveis do Revestimento:
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold border border-slate-200"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3">Diferenciais e Vantagens:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl shadow transition"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento no WhatsApp: (31) 3152-2755
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
