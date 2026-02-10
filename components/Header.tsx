import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollToElement } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Strona Główna', path: '/' },
    { name: 'Apartament', path: '/apartament' },
    { name: 'Pokoje', path: '/pokoje' },
    { name: 'Cennik', path: '/cennik' },
    { name: 'Atrakcje', path: '/atrakcje' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  const handleBookingClick = () => {
    setIsMobileMenuOpen(false);
    scrollToElement('formularz');
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled || isMobileMenuOpen
          ? 'bg-charcoal-900/95 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group z-50 relative" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-serif text-2xl md:text-3xl tracking-tight text-white group-hover:text-gold-500 transition-colors">
              Willa <span className="text-gold-500 italic">Elena</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-1 group-hover:text-white transition-colors">
              Szklarska Poręba
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-all duration-300 hover:text-gold-500 relative group ${isActive(link.path) ? 'text-gold-500 font-bold' : 'text-gray-300 font-light'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-gold-500 transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 z-50 relative">
            <a
              href="tel:+48606649799"
              className="hidden xl:flex items-center gap-2 text-gold-500 hover:text-white transition-colors group"
            >
              <div className="p-2 border border-gold-500/30 rounded-full group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-all">
                <Phone size={14} />
              </div>
              <span className="text-xs tracking-wider font-bold">+48 606 649 799</span>
            </a>

            <button
              onClick={handleBookingClick}
              className="btn-luxury-gold hidden md:inline-block px-6 py-3 bg-gold-500 text-charcoal-900 text-xs font-bold uppercase tracking-widest rounded-sm"
            >
              Zapytaj o Pobyt
            </button>

            {/* Mobile Menu Toggle - Improved appearance */}
            <button
              className={`lg:hidden relative w-10 h-10 flex items-center justify-center text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} className="text-gold-500" /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Totally revamped structure */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal-900 transition-all duration-500 lg:hidden flex flex-col ${isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center p-6 space-y-8 relative z-10">
          <nav className="flex flex-col items-center gap-6 w-full">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group relative font-serif text-3xl md:text-4xl transition-all duration-500 flex items-center gap-3 ${isActive(link.path)
                  ? 'text-gold-500 italic translate-x-2'
                  : 'text-white hover:text-gold-500'
                  } ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
              >
                <span className={`h-[1px] bg-gold-500 transition-all duration-300 ${isActive(link.path) ? 'w-8' : 'w-0 group-hover:w-4'}`}></span>
                {link.name}
              </Link>
            ))}
          </nav>

          <div
            className={`w-full max-w-xs h-[1px] bg-white/10 transition-all duration-500 delay-500 ${isMobileMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
          ></div>

          <div className={`flex flex-col items-center gap-6 transition-all duration-500 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a
              href="tel:+48606649799"
              className="flex items-center gap-3 text-white hover:text-gold-500 transition-colors group"
            >
              <div className="p-3 rounded-full border border-white/10 group-hover:border-gold-500 group-hover:text-gold-500 transition-all">
                <Phone size={20} />
              </div>
              <span className="text-xl font-light tracking-wider">+48 606 649 799</span>
            </a>

            <button
              onClick={handleBookingClick}
              className="px-10 py-4 bg-gold-500 text-charcoal-900 text-sm font-bold uppercase tracking-[0.2em] rounded-sm shadow-xl hover:bg-gold-400 transition-colors w-full flex items-center justify-center gap-2"
            >
              <Calendar size={18} /> Rezerwuj
            </button>
          </div>
        </div>

        {/* Footer of Menu */}
        <div className="p-6 text-center text-[10px] text-gray-500 uppercase tracking-widest border-t border-white/5 bg-charcoal-900 relative z-10">
          Willa Elena &copy; {new Date().getFullYear()}
        </div>
      </div>
    </>
  );
};