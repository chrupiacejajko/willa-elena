import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 border-t border-white/5 pt-16 pb-8 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl text-white">
                Willa <span className="text-gold-500 italic">Elena</span>
              </span>
            </Link>
            <p className="text-sm font-light leading-relaxed mb-6">
              Luksusowy wypoczynek w sercu Karkonoszy. Oferujemy komfortowe pokoje i apartamenty z widokiem na Szrenicę, zaledwie krok od centrum miasta.
            </p>
          </div>

          {/* Contact - Important for Local SEO */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-b border-gold-500/30 pb-2 inline-block">
              Kontakt
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0" size={16} />
                <span>ul. 1 Maja 28<br />58-580 Szklarska Poręba</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={16} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+48606649799" className="hover:text-gold-500 transition-colors">+48 606 649 799</a>
                  <a
                    href="https://wa.me/48606649799?text=Dzień%20dobry%2C%20chciałbym%20zapytać%20o%20dostępność%20pokoju"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green-500 hover:text-green-400 transition-colors"
                  >
                    lub WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0" size={16} />
                <a href="mailto:biuro@willaelena.pl" className="hover:text-gold-500 transition-colors">biuro@willaelena.pl</a>
              </li>
            </ul>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-b border-gold-500/30 pb-2 inline-block">
              Menu
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/apartament" className="hover:text-gold-500 transition-colors">Apartament Rodzinny</Link></li>
              <li><Link to="/pokoje" className="hover:text-gold-500 transition-colors">Pokoje Standard</Link></li>
              <li><Link to="/cennik" className="hover:text-gold-500 transition-colors">Cennik i Zasady</Link></li>
              <li><Link to="/atrakcje" className="hover:text-gold-500 transition-colors">Atrakcje w okolicy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Willa Elena Szklarska Poręba. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};