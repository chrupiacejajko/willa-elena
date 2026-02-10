import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('willa-elena-cookie-consent');
    if (!consent) {
      // Small delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('willa-elena-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[70] max-w-sm w-[calc(100%-2rem)] mx-auto md:mx-0 animate-fade-in-up">
      <div className="bg-charcoal-800 border border-gold-500/30 p-6 rounded-sm shadow-2xl relative">
        <button 
          onClick={handleAccept}
          className="absolute top-2 right-2 text-gray-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/5 rounded-full text-gold-500 shrink-0">
            <Cookie size={24} />
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-2">Szanujemy Twoją Prywatność</h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
              Używamy plików cookies, aby zapewnić najlepszą jakość korzystania z naszej strony oraz do celów statystycznych. Korzystając ze strony, zgadzasz się na ich użycie.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-gold-500 hover:bg-gold-600 text-charcoal-900 text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-sm transition-colors"
              >
                Akceptuję
              </button>
              <button 
                onClick={handleAccept}
                className="flex-1 bg-transparent border border-white/10 hover:border-white/30 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-sm transition-colors"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};