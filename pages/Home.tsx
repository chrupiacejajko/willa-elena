import React, { useState, useEffect, useRef } from 'react';
import { SEO } from '../components/SEO';
import { ReservationForm } from '../components/ReservationForm';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Car, Mountain, Utensils, Phone, Navigation, Coffee, MapPin, Sparkles, Users, CheckCircle, ChevronDown, ChevronUp, Quote, Star } from 'lucide-react';
import { FadeIn, ImageReveal, BlurReveal } from '../components/Animations';



// Simple Marquee
const Marquee: React.FC = () => {
  const words = ["LUKSUS", "NATURA", "CISZA", "KOMFORT", "GÓRY", "DESIGN"];
  return (
    <div className="py-8 bg-charcoal-900 border-y border-white/10 overflow-hidden relative z-20 pointer-events-none select-none">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex w-full justify-around items-center">
            {words.map((word, idx) => (
              <React.Fragment key={idx}>
                {/* Changed to Solid White Text for better visibility as requested */}
                <span className="text-4xl md:text-6xl font-serif text-white px-8 tracking-widest opacity-90 drop-shadow-md">
                  {word}
                </span>
                <span className="w-2 h-2 bg-gold-500 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

export const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroImages = [
    "/images/hero-1.jpg", // Dron
    "/images/hero-2.jpg" // Zima/Jesień elewacja
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const form = document.getElementById('formularz');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  const reviews = [
    { name: "Monika", country: "Polska", score: "10", date: "Luty 2026", text: "Pokoje czyste pachnące full wypas. Następnym razem przyjedziemy też tutaj. Wyjątkowy pobyt." },
    { name: "Ryszard", country: "Polska", score: "10", date: "Luty 2026", text: "Super miejscówka. Brak minusów. Wszystko mi się podobało. Pokój typu Standard z widokiem na góry spełnił wszystkie oczekiwania." },
    { name: "Sylwester", country: "Polska", score: "10", date: "Styczeń 2025", text: "Bez uwag wszystko super polecam. Wyjątkowy standard, wrócimy na pewno." },
    { name: "Łukasz", country: "Polska", score: "10", date: "Luty 2024", text: "Super !!! Wszystko. Pani Mama cudo kobieta. Pozdrawiamy i na pewno się jeszcze zobaczymy :)" },
    { name: "Paweł", country: "Polska", score: "8.0", date: "Luty 2025", text: "Odnowione, czyste, bardzo dobrze wyposażone, ładne pokoje i łazienki. Bardzo ładna i dobrze wyposażona wspólna kuchnia. Lokal w samym centrum." }
  ];

  const ratings = [
    { label: "Czystość", score: 9.2, icon: <Sparkles size={20} /> },
    { label: "Lokalizacja", score: 9.2, icon: <MapPin size={20} /> },
    { label: "Personel", score: 9.1, icon: <Users size={20} /> },
    { label: "Komfort", score: 8.8, icon: <Coffee size={20} /> },
  ];

  const faqs = [
    { question: "Czy na miejscu jest parking?", answer: "Tak, dysponujemy parkingiem prywatnym. W wysokim sezonie obowiązuje opłata 10 zł / doba." },
    { question: "Jakie są godziny zameldowania i wymeldowania?", answer: "Doba hotelowa rozpoczyna się o godzinie 16:00, a kończy o godzinie 11:00 dnia następnego." },
    { question: "Jak daleko jest do centrum Szklarskiej Poręby?", answer: "Willa Elena znajduje się zaledwie 200 m od ścisłego centrum miasta Szklarska Poręba. Wszystkie atrakcje są na wyciągnięcie ręki." },
    { question: "Czy obiekt zapewnia wyżywienie?", answer: "Willa Elena nie posiada restauracji, jednak udostępniamy gościom ogólnodostępną, w pełni wyposażoną kuchnię. Dodatkowo apartamenty posiadają własne aneksy. W promieniu 150m znajduje się Restauracja Stodoła 650." },
    { question: "Czy Wi-Fi jest płatne?", answer: "Nie, Wi-Fi jest dostępne w całym obiekcie i jest całkowicie bezpłatne dla naszych Gości." }
  ];

  return (
    <>
      <SEO
        title="Strona Główna"
        description="Pokoje i apartamenty w centrum Szklarskiej Poręby od 80 zł/os. Widok na góry, parking, Wi-Fi. ⭐ 8.8/10 • Zadzwoń: 606 649 799"
      />

      {/* HERO SECTION - REFINED FOR PREMIUM LOOK */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal-900 group">

        {/* Hero Slider Images */}
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 z-1 transition-opacity duration-[2500ms] ease-in-out ${index === currentHeroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={img}
                alt={`Willa Elena Szklarska Poręba - Widok ${index + 1}`}
                className="w-full h-full object-cover animate-slow-zoom"
              />
            </div>
          </div>
        ))}

        {/* Overlays - Refined Gradients */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/10 to-charcoal-900/90 pointer-events-none"></div>
        <div className="absolute inset-0 z-20 bg-black/10 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-30 text-center max-w-7xl px-6 flex flex-col items-center">

          {/* Badge */}
          <div className="animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-3 mb-10 px-6 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <span className="text-[10px] md:text-xs uppercase tracking-luxury text-cream font-medium font-sans">
                Szklarska Poręba
              </span>
            </div>
          </div>

          {/* Typography - The "Editorial" Look */}
          <h1 className="flex flex-col items-center">

            <BlurReveal delay={400}>
              <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-wide leading-none drop-shadow-xl">
                WYJĄTKOWY KLIMAT
              </span>
            </BlurReveal>

            <FadeIn delay={600} className="flex items-center gap-6 my-4">
              <span className="h-[1px] w-12 bg-white/30"></span>
              <span className="text-gold-400 text-5xl md:text-6xl font-serif italic font-light">
                &amp;
              </span>
              <span className="h-[1px] w-12 bg-white/30"></span>
            </FadeIn>

            <BlurReveal delay={800}>
              <span className="font-sans text-sm md:text-base text-gray-200 uppercase tracking-super-wide font-light">
                W Sercu Gór
              </span>
            </BlurReveal>

          </h1>

          <div className="mt-10 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-300 text-sm md:text-base font-sans font-light max-w-xl mx-auto leading-relaxed">
              Zarezerwuj bezpośrednio i oszczędź na prowizjach. Gwarancja najlepszej ceny.
            </p>
          </div>

          {/* Premium Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.8s' }}>

            <button
              onClick={scrollToForm}
              className="btn-luxury-gold bg-gold-500 text-charcoal-900 px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase rounded-sm min-w-[200px]"
            >
              Zapytaj o Termin
            </button>

            <a
              href="tel:+48606649799"
              className="btn-luxury-outline border border-white/30 text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase rounded-sm flex items-center justify-center gap-3 min-w-[200px] backdrop-blur-sm"
            >
              <Phone size={14} /> Zadzwoń
            </a>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ArrowRight className="rotate-90 text-gold-400" size={20} />
        </div>
      </section>

      {/* MARQUEE SECTION - Updated */}
      <Marquee />

      {/* ABOUT INTRO */}
      <section className="py-32 bg-charcoal-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Image Side with Reveal - Full Color & No Badge */}
            <div className="relative group perspective-1000">
              <ImageReveal
                src="/images/about.jpg"
                alt="Wnętrze Willa Elena Apartament"
                className="shadow-2xl rounded-sm aspect-[4/5]"
              />
              {/* Decorative Element only (No spinning badge) */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 border-l border-b border-gold-400/30 -z-10 hidden md:block"></div>
            </div>

            {/* Text Side */}
            <div>
              <FadeIn>
                <span className="text-gold-400 text-xs font-bold tracking-luxury uppercase mb-6 block">O Nas</span>
              </FadeIn>

              <BlurReveal>
                <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">
                  <span className="block font-medium">WYPOCZYNEK W</span>
                  {/* Elegant Typography for 'Centrum' */}
                  <span className="text-gold-500 font-serif font-normal">CENTRUM</span>
                </h2>
              </BlurReveal>

              <FadeIn delay={300} className="space-y-6 text-gray-400 font-light leading-relaxed text-lg border-l border-white/10 pl-8 font-sans">
                <p>
                  Nasz pensjonat położony jest w zacisznym i malowniczym miejscu, zaledwie 200 metrów od ścisłego centrum Szklarskiej Poręby. To idealna baza wypadowa na szlaki turystyczne.
                </p>
                <p>
                  Oferujemy monitorowany parking, grill, miejsce na ognisko oraz atestowany plac zabaw. Zadbaliśmy o każdy detal, aby Państwa pobyt był połączeniem domowego ciepła z hotelowym standardem.
                </p>
              </FadeIn>

              <FadeIn delay={500} className="mt-12 flex gap-12">
                <div>
                  <div className="text-5xl font-serif text-white mb-1">9.2</div>
                  <div className="text-xs uppercase tracking-wider text-gold-400 font-bold">Lokalizacja</div>
                </div>
                <div>
                  <div className="text-5xl font-serif text-white mb-1">8.8</div>
                  <div className="text-xs uppercase tracking-wider text-gold-400 font-bold">Opinie Gości</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="py-24 bg-charcoal-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { icon: <Car />, label: "Prywatny Parking", sub: "Monitorowany 24h" },
              { icon: <Wifi />, label: "Darmowe Wi-Fi", sub: "Światłowód" },
              { icon: <Mountain />, label: "Widok na Góry", sub: "Panorama Szrenicy" },
              { icon: <Utensils />, label: "Kuchnia dla Gości", sub: "W pełni wyposażona" }
            ].map((item, idx) => (
              <BlurReveal key={idx} delay={idx * 150} className="bg-charcoal-900 p-10 flex flex-col items-center text-center group hover:bg-charcoal-800 transition-colors duration-500 border-r border-b border-white/5">
                <div className="text-white mb-6 group-hover:text-gold-400 group-hover:scale-110 transition-all duration-500">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 40, strokeWidth: 1 })}
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-white mb-2 font-sans">
                  {item.label}
                </span>
                <span className="text-xs text-gray-500 font-serif italic tracking-wide">
                  {item.sub}
                </span>
              </BlurReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="py-32 bg-charcoal-800 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeIn>
              <span className="text-gold-400 text-xs font-bold tracking-luxury uppercase mb-6 block">Oferta</span>
              <BlurReveal>
                <h2 className="font-serif text-5xl text-white font-medium">Wybierz Swój <span className="italic text-gray-500 font-light">Komfort</span></h2>
              </BlurReveal>
            </FadeIn>
            <FadeIn delay={200}>
              <Link to="/pokoje" className="group flex items-center gap-3 text-white hover:text-gold-400 transition-colors text-xs tracking-[0.2em] uppercase font-bold font-sans">
                Zobacz wszystkie <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Standard Room Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[16/10] mb-8">
                <ImageReveal
                  src="/images/room-standard.jpg"
                  alt="Pokój Standard Szklarska Poręba"
                  className="group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-white text-charcoal-900 text-xs font-bold px-3 py-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Bestseller
                </div>
              </div>
              <FadeIn delay={200}>
                <h3 className="font-serif text-3xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-300 font-normal">Pokoje Standard</h3>
                <p className="text-gray-400 text-sm font-light mb-6 leading-relaxed border-l border-white/10 pl-4 font-sans">
                  Przytulne pokoje 2, 3 i 4 osobowe z łazienkami. Idealne dla par i małych rodzin pragnących wypoczynku blisko natury.
                </p>
                <Link to="/pokoje" className="inline-block text-gold-400 text-xs uppercase tracking-widest border-b border-gold-400/30 pb-1 hover:text-white hover:border-white transition-colors font-sans font-bold">
                  Szczegóły Pokoju
                </Link>
              </FadeIn>
            </div>

            {/* Apartment Card */}
            <div className="group cursor-pointer md:mt-12">
              <div className="relative overflow-hidden aspect-[16/10] mb-8">
                <ImageReveal
                  src="/images/apartment.jpg"
                  alt="Apartament Szklarska Poręba"
                />
              </div>
              <FadeIn delay={300}>
                <h3 className="font-serif text-3xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-300 font-normal">Apartament Rodzinny</h3>
                <p className="text-gray-400 text-sm font-light mb-6 leading-relaxed border-l border-white/10 pl-4 font-sans">
                  Przestronny apartament z aneksem kuchennym i osobną sypialnią. Pełna niezależność i komfort dla całej rodziny.
                </p>
                <Link to="/apartament" className="inline-block text-gold-400 text-xs uppercase tracking-widest border-b border-gold-400/30 pb-1 hover:text-white hover:border-white transition-colors font-sans font-bold">
                  Szczegóły Apartamentu
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* RATINGS STATS SECTION */}
      <section className="bg-charcoal-900 border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {ratings.map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="flex flex-col items-center justify-center p-6 bg-transparent group">
                <div className="text-gold-400 mb-6 p-4 bg-white/5 rounded-full group-hover:bg-gold-400 group-hover:text-charcoal-900 transition-colors duration-500">
                  {stat.icon}
                </div>
                <div className="text-5xl font-serif text-white mb-2">{stat.score}</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-32 bg-charcoal-800 border-t border-white/5 relative overflow-hidden">
        {/* Giant Quote Background */}
        <div className="absolute -top-20 -left-20 text-white/5 select-none pointer-events-none transform rotate-12">
          <Quote size={400} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <FadeIn>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="flex gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">Autentyczne Opinie</span>
              </div>
              <h2 className="font-serif text-5xl text-white mb-2 font-medium">Głosy Naszych <span className="italic text-gray-500 font-light">Gości</span></h2>
            </FadeIn>
            <FadeIn delay={200} className="flex items-center justify-center md:justify-start gap-4">
              <span className="text-6xl font-serif text-white">8.8</span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white uppercase tracking-widest">Fantastyczny</span>
                <span className="text-xs text-gray-400">na Booking.com</span>
              </div>
            </FadeIn>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth no-scrollbar">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[320px] md:w-[450px] bg-charcoal-900 p-10 border border-white/5 relative group hover:border-gold-400/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center text-charcoal-900 font-serif font-bold text-xl shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-lg">{review.name}</h4>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{review.country}</span>
                  </div>
                  <div className="ml-auto text-gold-400 font-serif text-2xl opacity-50">
                    {review.score}
                  </div>
                </div>

                <p className="text-gray-300 font-light text-base italic leading-relaxed mb-8 font-serif">
                  "{review.text}"
                </p>

                <div className="pt-6 border-t border-white/5 flex justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-gold-400" />
                    <span>Zweryfikowany</span>
                  </div>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-charcoal-900 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="text-gold-400 text-xs font-bold tracking-luxury uppercase mb-4 block">Informacje</span>
            <h2 className="font-serif text-4xl text-white font-medium">Częste Pytania</h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <FadeIn key={index} delay={index * 100} className="border-b border-white/5">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className={`text-lg transition-colors duration-300 font-serif ${openFaq === index ? 'text-gold-400' : 'text-gray-300 group-hover:text-white'}`}>
                    {item.question}
                  </span>
                  {openFaq === index ? <ChevronUp className="text-gold-400 flex-shrink-0 transition-transform" /> : <ChevronDown className="text-gray-600 flex-shrink-0 group-hover:text-white transition-colors" />}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="text-gray-400 font-light leading-relaxed pr-8 pl-4 border-l border-gold-400/30 font-sans">
                    {item.answer}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT CTA */}
      <section className="py-32 bg-charcoal-800 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-gold-400 text-xs font-bold tracking-luxury uppercase mb-6 block">Lokalizacja</span>
              <h2 className="font-serif text-5xl text-white mb-6 font-medium">W Sercu Miasta</h2>
              <p className="text-gray-400 leading-relaxed mb-10 text-lg font-light font-sans">
                Willa Elena znajduje się przy ulicy 1 Maja 28. To idealny punkt startowy zarówno na górskie wędrówki, jak i wieczorne wyjścia do restauracji.
              </p>
              <Link to="/kontakt" className="btn-luxury-outline inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm font-sans">
                <Navigation size={16} /> Zobacz Mapę
              </Link>
            </FadeIn>

            <div className="h-[400px] w-full rounded-sm overflow-hidden relative group">
              {/* Simulated map overlay for aesthetic consistency */}
              <div className="absolute inset-0 bg-charcoal-900/10 group-hover:bg-transparent transition-colors pointer-events-none z-10 border border-white/10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1498.584494266333!2d15.519323066784926!3d50.82544647166988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd616904132635c0f!2sWilla%20Elena!5e0!3m2!1spl!2spl!4v1641822481168!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }}
                allowFullScreen
                loading="lazy"
                title="Mapa"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* NEW RESERVATION FORM */}
      <ReservationForm />

      <section className="py-8 bg-charcoal-900 border-t border-white/5 text-center">
        <p className="text-xs text-gray-600 font-serif italic">
          Dla preferujących pośredników: <a href="https://www.booking.com/Share-tqV25I" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gold-400 transition-colors">Jesteśmy również na Booking.com</a> (wyższe ceny)
        </p>
      </section>
    </>
  );
};