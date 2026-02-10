import React from 'react';
import { SEO } from '../components/SEO';
import { Clock, Ban, PawPrint, FileText, Cigarette, Info, CreditCard, Wallet, Car } from 'lucide-react';
import { FadeIn, BlurReveal } from '../components/Animations';

export const Pricing: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-charcoal-900">
      <SEO
        title="Cennik i Zasady"
        description="Cennik pokoi i apartamentów Willa Elena. Sezonowe ceny 2026. Bezpośrednie rezerwacje taniej! ☎️ 606 649 799 • ⭐ 8.8/10"
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-4 block">Oferta</span>
          </FadeIn>
          <BlurReveal>
            <h1 className="font-serif text-4xl md:text-5xl text-white">Cennik i Zasady</h1>
          </BlurReveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <BlurReveal delay={100} className="bg-charcoal-800 p-8 border-t-4 border-gold-500 shadow-xl flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileText size={100} />
            </div>
            <h3 className="font-serif text-2xl text-white mb-2 relative z-10">Pokoje</h3>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-6 relative z-10">Standard & Comfort</p>
            <div className="flex items-end gap-2 mb-4 relative z-10">
              <span className="text-4xl text-gold-500 font-serif">80 - 120 zł</span>
              <span className="text-gray-400 text-sm mb-1">/ os.</span>
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed relative z-10">
              Cena zależy od sezonu i długości pobytu.
            </p>
          </BlurReveal>

          <BlurReveal delay={200} className="bg-charcoal-800 p-8 border-t-4 border-white shadow-xl flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileText size={100} />
            </div>
            <h3 className="font-serif text-2xl text-white mb-2 relative z-10">Apartamenty</h3>
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-6 relative z-10">Premium & Family</p>
            <div className="flex items-end gap-2 mb-4 relative z-10">
              <span className="text-4xl text-white font-serif">80 - 130 zł</span>
              <span className="text-gray-400 text-sm mb-1">/ os.</span>
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed relative z-10">
              Cena zależy od sezonu i długości pobytu.
            </p>
          </BlurReveal>
        </div>

        {/* Additional Fees Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 text-center md:text-left">
          <FadeIn delay={300} className="bg-charcoal-800 p-6 border border-white/5 rounded-sm">
            <Info className="text-gold-500 mb-3 mx-auto md:mx-0" />
            <h4 className="text-white font-bold text-sm uppercase mb-2">Święta i Sylwester</h4>
            <p className="text-gray-400 text-sm font-light">Podane ceny nie dotyczą turnusów świątecznych i sylwestrowych (wycena indywidualna).</p>
          </FadeIn>
          <FadeIn delay={400} className="bg-charcoal-800 p-6 border border-white/5 rounded-sm">
            <Wallet className="text-gold-500 mb-3 mx-auto md:mx-0" />
            <h4 className="text-white font-bold text-sm uppercase mb-2">Opłata Miejscowa</h4>
            <p className="text-gray-400 text-sm font-light">Obowiązuje opłata klimatyczna w wysokości <strong className="text-white">3,20 zł</strong> za osobę na dobę.</p>
          </FadeIn>
          <FadeIn delay={500} className="bg-charcoal-800 p-6 border border-white/5 rounded-sm">
            <Car className="text-gold-500 mb-3 mx-auto md:mx-0" />
            <h4 className="text-white font-bold text-sm uppercase mb-2">Parking</h4>
            <p className="text-gray-400 text-sm font-light">Opłata za parking w wysokim sezonie wynosi <strong className="text-white">10 zł</strong> za dobę.</p>
          </FadeIn>
        </div>

        {/* HOUSE RULES SECTION */}
        <FadeIn className="bg-charcoal-800 rounded-sm border border-white/5 overflow-hidden mb-16">
          <div className="p-8 bg-white/5 border-b border-white/5">
            <h3 className="font-serif text-2xl text-white flex items-center gap-3">
              <Info className="text-gold-500" />
              Regulamin Pobytu
            </h3>
          </div>

          <div className="p-8">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-charcoal-900 text-gold-500 flex items-center justify-center font-serif font-bold border border-gold-500/20">1</span>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Doba Hotelowa</h4>
                  <p className="text-gray-400 text-sm font-light">
                    Doba rozpoczyna się o godz. <strong className="text-white">16:00</strong>, a kończy się o godz. <strong className="text-white">11:00</strong> następnego dnia.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-charcoal-900 text-gold-500 flex items-center justify-center font-serif font-bold border border-gold-500/20">2</span>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Płatności i Rezerwacja</h4>
                  <p className="text-gray-400 text-sm font-light mb-2">
                    Potwierdzeniem rezerwacji jest wpłata zadatku na nasz rachunek bankowy. Rozliczenie za pobyt oraz meldunek następuje w dniu przyjazdu.
                  </p>
                  <p className="text-gray-500 text-xs italic border-l-2 border-white/10 pl-3">
                    W przypadku rezygnacji z pobytu zadatek nie jest zwracany. Opóźnienie przyjazdu bądź skrócenie pobytu nie zwalniają Gości z pełnej opłaty za okres pobytu ustalony w rezerwacji.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-charcoal-900 text-gold-500 flex items-center justify-center font-serif font-bold border border-gold-500/20">3</span>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Zakaz Palenia</h4>
                  <p className="text-gray-400 text-sm font-light">
                    W obiekcie obowiązuje całkowity zakaz palenia papierosów. Palenie jest możliwe wyłącznie na tarasie.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </FadeIn>

        {/* Bank Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h3 className="text-white font-serif text-xl mb-4 flex items-center gap-2">
              <CreditCard size={20} className="text-gold-500" /> Dane do Przelewu
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
              Prosimy o wpłatę zadatku tytułem potwierdzenia rezerwacji. W tytule przelewu prosimy wpisać <strong>imię, nazwisko oraz termin pobytu</strong>.
            </p>
            <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-sm">
              <p className="text-gold-500 text-xs uppercase font-bold mb-1">Odbiorca:</p>
              <p className="text-white font-serif text-lg">Katarzyna Baran</p>
            </div>
          </FadeIn>

          <BlurReveal delay={200} className="bg-charcoal-800 p-8 border border-white/10 rounded-sm shadow-2xl">
            <div className="mb-6">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Bank:</p>
              <p className="text-white font-bold text-lg">Santander Bank Polska</p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-gold-500 text-xs uppercase font-bold mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-500"></span> Konto PLN
                </p>
                <p className="font-mono text-white text-lg sm:text-xl tracking-wider break-all">
                  23 1090 1984 0000 0001 3626 6186
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-gray-400 text-xs uppercase font-bold mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span> Konto Walutowe (EUR/USD)
                </p>
                <p className="font-mono text-gray-300 text-lg sm:text-xl tracking-wider break-all">
                  91 1090 1984 0000 0001 3650 2903
                </p>
                <p className="text-xs text-gray-500 mt-1">BIC SWIFT: WBKPPLPP</p>
              </div>
            </div>
          </BlurReveal>
        </div>

      </div>
    </div>
  );
};