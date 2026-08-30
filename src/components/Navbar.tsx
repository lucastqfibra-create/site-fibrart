import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import FibrartLogo from './FibrartLogo';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/quem-somos', label: 'Quem Somos' },
  { to: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md shadow-lg shadow-black/8'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="block">
          <FibrartLogo />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    active
                      ? scrolled
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-white bg-white/15'
                      : scrolled
                      ? 'text-charcoal-600 hover:text-brand-600 hover:bg-brand-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="ml-3">
            <Link to="/contato" className="btn-primary !px-5 !py-2.5 !text-sm">
              Seja Distribuidor
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? 'text-charcoal-700 hover:bg-charcoal-100'
              : 'text-white hover:bg-white/10'
          }`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-charcoal-100 shadow-xl px-4 pb-4 pt-2">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 px-4 rounded-lg text-base font-semibold transition-colors ${
                  active
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-charcoal-700 hover:bg-charcoal-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link to="/contato" className="btn-primary w-full mt-3 !text-base">
            Seja Distribuidor
          </Link>
        </div>
      </div>
    </header>
  );
}
