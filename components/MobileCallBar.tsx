import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, CalendarCheck } from 'lucide-react';

import { useScrollTo } from '../hooks/useScrollTo';

export const MobileCallBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const { scrollToElement } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      // On homepage, wait until scrolled past hero buttons (approx 300px)
      // On other pages, show slightly earlier (100px)
      const threshold = location.pathname === '/' ? 300 : 100;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToForm = () => {
    scrollToElement('formularz');
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-[60] bg-charcoal-900 border-t border-gold-500/30 p-2 md:hidden safe-area-bottom transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="flex gap-2 h-14">
        <a
          href="tel:+48606649799"
          className="flex-1 bg-charcoal-800 hover:bg-charcoal-700 text-white border border-white/10 rounded-sm flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <Phone size={20} className="text-gold-500" />
          <span className="text-[10px] uppercase font-bold tracking-wider">Zadzwoń</span>
        </a>
        <button
          onClick={scrollToForm}
          className="flex-1 bg-gold-500 hover:bg-gold-600 text-charcoal-900 rounded-sm flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform shadow-lg shadow-gold-500/10"
        >
          <CalendarCheck size={20} />
          <span className="text-[10px] uppercase font-bold tracking-wider">Rezerwuj</span>
        </button>
      </div>
    </div>
  );
};