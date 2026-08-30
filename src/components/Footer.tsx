import React from 'react';
import FibrartLogo from './FibrartLogo';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo Branca & Resumo */}
          <div>
            <div className="mb-4">
              <FibrartLogo variant="white" className="h-10 sm:h-12 w-auto" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Fabricação própria de tanques, pias e lavatórios em Marmofibra (mármore sintético revestido em fibra de vidro). Mais de 16 anos entregando resistência, acabamento de alto padrão e o melhor custo-benefício.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/fibrartmg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:bg-pink-600 hover:text-white transition-colors"
                aria-label="Instagram Fibrart"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categorias de Produtos */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Linhas de Produtos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#/products" className="hover:text-white transition-colors">Pias em Marmofibra</a></li>
              <li><a href="#/products" className="hover:text-white transition-colors">Pias com Bojo Inox</a></li>
              <li><a href="#/products" className="hover:text-white transition-colors">Tanques Simples & Bancada</a></li>
              <li><a href="#/products" className="hover:text-white transition-colors">Tanques Duplos & Triplos</a></li>
              <li><a href="#/products" className="hover:text-white transition-colors">Lavatórios</a></li>
            </ul>
          </div>

          {/* Canais de Atendimento */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Atendimento</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:3131522755" className="hover:text-white transition-colors">
                  (31) 3152-2755
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href="https://wa.me/5531973101116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (31) 97310-1116 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:vendas@fibrart.com.br" className="hover:text-white transition-colors">
                  vendas@fibrart.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span>Segunda a Sexta: 07:30 às 17:00</span>
              </li>
            </ul>
          </div>

          {/* Endereço da Fábrica */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Fábrica & Showroom</h4>
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-1" />
              <div>
                <p className="font-medium text-slate-200">Fibrart Indústria e Comércio Ltda</p>
                <p>Rodovia MG-424, nº 2.928</p>
                <p>Bairro Esmeraldas</p>
                <p>Sete Lagoas - MG</p>
                <p>CEP: 35.702-098</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Fibrart Tanques e Pias. Todos os direitos reservados.</p>
          <p>CNPJ: 12.695.625/0001-02 • Sete Lagoas / MG</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
