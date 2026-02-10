import React from 'react';
import { SEO } from '../components/SEO';
import { ReservationForm } from '../components/ReservationForm';
import { Phone, Mail, MapPin, Navigation, Car, Train, Mountain, Coffee, Ticket, Footprints } from 'lucide-react';
import { FadeIn, BlurReveal } from '../components/Animations';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal-900 font-sans text-gray-400">
      <SEO
        title="Lokalizacja & Kontakt"
        description="Willa Elena - ul. 1 Maja 28, Szklarska Poręba. Parking, 200m od centrum. Telefon: 606 649 799. Sprawdź dojazd i odległości."
      />

      {/* Hero Section */}
      <header className="relative h-[60vh] w-full overflow-hidden bg-charcoal-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-1.jpg"
            alt="Willa Elena z lotu ptaka"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-20">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-gold-500"></div>
                <span className="uppercase text-xs text-gold-500 tracking-[0.3em] font-bold">
                  Szklarska Poręba
                </span>
              </div>
            </FadeIn>

            <BlurReveal>
              <h1 className="text-5xl md:text-7xl text-white font-medium mb-6 leading-tight">
                <span className="block">Dojazd & Lokalizacja</span>
                <span className="block font-serif italic text-white/80 font-normal">
                  W sercu Karkonoszy
                </span>
              </h1>
            </BlurReveal>

            <FadeIn delay={200}>
              <p className="text-lg font-light text-gray-300 max-w-xl leading-relaxed">
                Zentralnie położona, a jednak w otoczeniu natury. Willa Elena to Twój idealny punkt startowy na górskie szlaki i miejskie atrakcje.
              </p>
            </FadeIn>
          </div>
        </div>
      </header>

      {/* Main Location Content */}
      <section className="relative z-20 -mt-20 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Column: Details */}
            <div className="lg:col-span-4 space-y-8">

              {/* Address Card (Glass Effect) */}
              <FadeIn delay={200} className="bg-charcoal-800/90 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                <span className="uppercase block text-xs text-gold-500 tracking-widest mb-4 font-bold">
                  Adres Docelowy
                </span>
                <h2 className="text-2xl text-white font-serif mb-4">
                  Willa Elena
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6 font-light">
                  ul. 1 Maja 28
                  <br />
                  58-580 Szklarska Poręba
                  <br />
                  Polska
                </p>

                <div className="flex flex-col gap-3 mb-8">
                  <a href="tel:+48606649799" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                    <span className="p-2 rounded-full bg-white/5 group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-colors">
                      <Phone size={14} />
                    </span>
                    +48 606 649 799
                  </a>
                  <a href="mailto:biuro@willaelena.pl" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                    <span className="p-2 rounded-full bg-white/5 group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-colors">
                      <Mail size={14} />
                    </span>
                    biuro@willaelena.pl
                  </a>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Willa+Elena+Szklarska+Poręba"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white hover:bg-gold-500 hover:text-charcoal-900 text-charcoal-900 transition-all rounded-lg px-4 py-4 flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold shadow-lg"
                >
                  <Navigation size={16} />
                  Uruchom Nawigację
                </a>
              </FadeIn>

              {/* Directions List */}
              <div className="space-y-8 pt-4">
                <FadeIn delay={400} className="group">
                  <h3 className="flex items-center gap-3 text-white font-serif text-lg mb-3">
                    <Car size={20} className="text-gold-500" />
                    Dojazd Samochodem
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed pl-8 border-l border-white/10 ml-2.5 font-light">
                    Do Szklarskiej Poręby prowadzi droga krajowa nr 3. Willa Elena znajduje się w ścisłym centrum, przy głównej ulicy 1 Maja. Dla naszych Gości oferujemy monitorowany parking (wjazd od ulicy głównej).
                  </p>
                </FadeIn>

                <FadeIn delay={600} className="group">
                  <h3 className="flex items-center gap-3 text-white font-serif text-lg mb-3">
                    <Train size={20} className="text-gold-500" />
                    Pociąg i Autobus
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed pl-8 border-l border-white/10 ml-2.5 font-light">
                    Dworzec PKP "Szklarska Poręba Górna" znajduje się około 1.5 km od Willi. Dworzec PKS usytuowany jest bliżej, zaledwie 500m od obiektu. Z obu miejsc łatwo dotrzesz do nas taksówką lub pieszo.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Right Column: Map Integration */}
            <FadeIn delay={300} className="lg:col-span-8 h-[350px] lg:h-full min-h-[300px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-charcoal-800 group">
              <div className="absolute inset-0 bg-charcoal-900 flex items-center justify-center -z-10">
                <span className="text-xs uppercase tracking-widest animate-pulse">Ładowanie Mapy...</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1498.584494266333!2d15.519323066784926!3d50.82544647166988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd616904132635c0f!2sWilla%20Elena!5e0!3m2!1spl!2spl!4v1641822481168!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                title="Mapa Willa Elena"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </FadeIn>
          </div>


          {/* Surroundings / Distances Section */}
          <div className="mt-24 pt-16 border-t border-white/5">
            <div className="mb-12">
              <span className="uppercase block text-xs text-gold-500 tracking-widest mb-4 font-bold">
                Okolica
              </span>
              <h3 className="text-3xl text-white font-serif">
                Kluczowe Odległości
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {/* Item 1 */}
              <FadeIn delay={0} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-500/30 transition-colors group">
                <Coffee className="text-white mb-4 group-hover:text-gold-500 transition-colors" size={24} />
                <div className="text-2xl font-serif text-white mb-1">100 m</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Centrum Miasta
                </div>
              </FadeIn>

              {/* Item 2 */}
              <FadeIn delay={100} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-500/30 transition-colors group">
                <Ticket className="text-white mb-4 group-hover:text-gold-500 transition-colors" size={24} />
                <div className="text-2xl font-serif text-white mb-1">800 m</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Wyciąg na Szrenicę
                </div>
              </FadeIn>

              {/* Item 3 */}
              <FadeIn delay={200} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-500/30 transition-colors group">
                <Mountain className="text-white mb-4 group-hover:text-gold-500 transition-colors" size={24} />
                <div className="text-2xl font-serif text-white mb-1">2.5 km</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Wodospad Kamieńczyk
                </div>
              </FadeIn>

              {/* Item 4 */}
              <FadeIn delay={300} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-500/30 transition-colors group">
                <Footprints className="text-white mb-4 group-hover:text-gold-500 transition-colors" size={24} />
                <div className="text-2xl font-serif text-white mb-1">50 m</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  Szlaki Turystyczne
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <ReservationForm />
    </div>
  );
};