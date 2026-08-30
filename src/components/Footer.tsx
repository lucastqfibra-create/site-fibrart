import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import FibrartLogo from './FibrartLogo';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-300">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <FibrartLogo variant="white" />
            </Link>
            <p className="text-sm text-charcoal-500 leading-relaxed max-w-xs mt-4">
              Indústria de pias e tanques em marmofibra. Durabilidade,
              qualidade e design diferenciado desde Sete Lagoas — MG.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/produtos', label: 'Catálogo de Produtos' },
                { to: '/quem-somos', label: 'Quem Somos' },
                { to: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-charcoal-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-charcoal-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-charcoal-600" />
                <span>
                  Rodovia MG 424, nº 2.928<br />
                  Sete Lagoas — MG, CEP 35.702-098
                </span>
              </li>
              <li>
                <a
                  href="tel:+553131522755"
                  className="flex items-start gap-3 text-sm text-charcoal-400 hover:text-brand-400 transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-charcoal-600" />
                  (31) 3152.2755 / 97310.1117
                </a>
              </li>
              <li>
                <a
                  href="mailto:vendas@fibrart.com.br"
                  className="flex items-start gap-3 text-sm text-charcoal-400 hover:text-brand-400 transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-charcoal-600" />
                  vendas@fibrart.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Redes Sociais
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                aria-label="Instagram FIBRART"
                className="w-10 h-10 rounded-lg bg-charcoal-800 flex items-center justify-center text-charcoal-400 hover:bg-brand-500 hover:text-white transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook FIBRART"
                className="w-10 h-10 rounded-lg bg-charcoal-800 flex items-center justify-center text-charcoal-400 hover:bg-brand-500 hover:text-white transition-all duration-200"
              >
                <Facebook size={18} />
              </a>
            </div>
            <a
              href="http://www.fibrart.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-charcoal-600 hover:text-brand-400 transition-colors"
            >
              www.fibrart.com.br
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-800">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-charcoal-600">
            &copy; {new Date().getFullYear()} FIBRART Indústria e Comércio LTDA. Todos os direitos reservados.
          </p>
          <p className="text-xs text-charcoal-700">
            Marmofibra — Sete Lagoas, MG
          </p>
        </div>
      </div>
    </footer>
  );
}
