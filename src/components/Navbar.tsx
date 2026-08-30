import React, { useState } from 'react';
import FibrartLogo from './FibrartLogo';
import { Menu, X, Store } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'products' | 'about' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: 'home' | 'products' | 'about' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Início' },
    { id: 'products', label: 'Produtos' },
    { id: 'about', label: 'Quem Somos' },
    { id: 'contact', label: 'Contato' },
  ];

  const handleNav = (id: 'home' | 'products' | 'about' | 'contact') => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleDistributor = () => {
    onNavigate('contact');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo da Fibrart */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 focus:outline-none"
            aria-label="Fibrart Início"
          >
            <FibrartLogo className="h-10 sm:h-12 w-auto" />
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botão Seja um Distribuidor Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleDistributor}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200"
            >
              <Store className="w-4 h-4" />
              Seja um Distribuidor
            </button>
          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition ${
                currentPage === item.id
                  ? 'text-blue-600 bg-blue-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={handleDistributor}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-sm transition text-sm"
            >
              <Store className="w-4 h-4" />
              Seja um Distribuidor
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
