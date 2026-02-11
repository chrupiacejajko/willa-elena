import React from 'react';
import { SEO } from '../components/SEO';
import { MapPin, Flame, Snowflake, Utensils, Smile, Wind, Bus, Landmark, Trees, Shield, Sparkles, Wifi, CheckCircle, Tv, Coffee } from 'lucide-react';
import { FadeIn, BlurReveal } from '../components/Animations';
import { AttractionGallery } from '../components/AttractionGallery';

export const Attractions: React.FC = () => {
  const onSiteAttractions = [
    {
      title: "Plac zabaw",
      desc: "Dzieci są u nas mile widziane. Posiadamy bezpieczny plac zabaw na świeżym powietrzu oraz gry planszowe i puzzle na niepogodę.",
      images: ["/images/attractions/plac-zabaw2.jpg", "/images/attractions/plac-zabaw1.jpg"],
      icon: <Smile size={20} />
    },
    {
      title: "Sauna",
      desc: "Zadbaj o ciało i ducha. Oferujemy saunę fińską - idealne miejsce na relaks po dniu pełnym wrażeń.",
      images: ["/images/attractions/sauna1.jpg", "/images/attractions/sauna.jpg", "/images/attractions/sauna-1.jpg"],
      icon: <Sparkles size={20} />
    },
    {
      title: "Grill",
      desc: "Do dyspozycji Gości oddajemy przestronny ogród oraz dedykowany sprzęt do grillowania. Idealne miejsce na wspólne chwile.",
      images: ["/images/attractions/grill2.jpg", "/images/attractions/grill3.jpg"],
      icon: <Utensils size={20} />
    },
    {
      title: "Ognisko",
      desc: "Posiadamy miejsce na ognisko i piknik. To wyjątkowe miejsce sprzyja integracji i wspólnym wieczornym spotkaniom.",
      images: [
        "/images/attractions/ognisko1.jpg",
        "/images/attractions/ognisko2.jpg",
        "/images/attractions/ognisko3.jpg",
        "/images/attractions/ognisko4.jpg",
        "/images/attractions/ognisko5.jpg",
        "/images/attractions/ognisko6.jpg"
      ],
      icon: <Flame size={20} />
    },
    {
      title: "Wypożyczalnia nart",
      desc: "Jesteśmy przygotowani na białe szaleństwo. Na miejscu znajduje się wypożyczalnia sprzętu narciarskiego oraz szkółka narciarska.",
      images: ["/images/attractions/wypozyczalnianart.jpg"],
      icon: <Snowflake size={20} />
    },
    {
      title: "Kuchnia",
      desc: "Dla wygody naszych Gości udostępniamy w pełni wyposażoną kuchnię, gdzie można przygotować posiłki we własnym zakresie.",
      images: ["/images/attractions/kuchnia.jpg"],
      icon: <Coffee size={20} />
    }
  ];

  // Detailed Amenities List for SEO and Info
  const detailedAmenities = [
    {
      category: "Wellness & Uroda",
      icon: <Sparkles className="text-gold-500" />,
      items: ["Sauna", "Zabiegi upiększające", "Manicure", "Pedicure", "Makijaż", "Zabiegi na twarz"]
    },
    {
      category: "Na Zewnątrz",
      icon: <Trees className="text-gold-500" />,
      items: ["Ogród", "Taras", "Miejsce na ognisko", "Miejsce na piknik", "Meble ogrodowe", "Sprzęt do grillowania"]
    },
    {
      category: "Narty i Sport",
      icon: <Snowflake className="text-gold-500" />,
      items: ["Przechowalnia nart", "Wypożyczalnia sprzętu (na miejscu)", "Szkółka narciarska", "Piesze wycieczki", "Wycieczki rowerowe"]
    },
    {
      category: "Internet i Media",
      icon: <Wifi className="text-gold-500" />,
      items: ["Bezpłatne Wi-Fi w całym obiekcie", "Telewizor z płaskim ekranem", "Sala TV / wspólna część rekreacyjna"]
    },
    {
      category: "Bezpieczeństwo",
      icon: <Shield className="text-gold-500" />,
      items: ["Monitoring wokół obiektu", "Monitoring w częściach wspólnych", "Czujniki dymu", "Gaśnice", "Dostęp za pomocą karty/kluczy"]
    },
    {
      category: "Usługi Recepcji",
      icon: <CheckCircle className="text-gold-500" />,
      items: ["Indywidualne zameldowanie/wymeldowanie", "Ekspresowe zameldowanie", "Przechowalnia bagażu", "Możliwość wystawienia faktury"]
    }
  ];

  const surroundingsCategories = [
    {
      title: "Co znajduje się w pobliżu",
      icon: <MapPin className="text-gold-500" />,
      items: [
        { name: "Trollandia - park linowy", dist: "350 m" },
        { name: "Skwer Jana Pawła II", dist: "850 m" },
        { name: "Amfiteatr", dist: "950 m" },
        { name: "Park Rozrywki Esplanada", dist: "200 m" }
      ]
    },
    {
      title: "Kultura i Historia",
      icon: <Landmark className="text-gold-500" />,
      items: [
        { name: "Muzeum Mineralogiczne", dist: "1,4 km" },
        { name: "Zespół Willi Carla Hauptmana", dist: "2,1 km" },
        { name: "Park Ducha Gór", dist: "2,1 km" },
        { name: "Muzeum Ziemi JUNA", dist: "2,2 km" },
        { name: "Muzeum Szkła", dist: "12 km" }
      ]
    },
    {
      title: "Restauracje i Kawiarnie",
      icon: <Utensils className="text-gold-500" />,
      items: [
        { name: "Restauracja Stodoła 650", dist: "150 m" },
        { name: "Kawiarnia/bar Stop Cafe", dist: "350 m" },
        { name: "Restauracja Kołacz", dist: "350 m" }
      ]
    },
    {
      title: "Przyroda i Widoki",
      icon: <Trees className="text-gold-500" />,
      items: [
        { name: "Wodospad Kamieńczyka", dist: "2,5 km" },
        { name: "Szczyt górski Szrenica", dist: "5 km" },
        { name: "Vysílač Sněžné jámy", dist: "8 km" },
        { name: "Karkonoski Park Narodowy", dist: "13 km" }
      ]
    },
    {
      title: "Wyciągi Narciarskie",
      icon: <Snowflake className="text-gold-500" />,
      items: [
        { name: "Pietkiewiczówka I", dist: "550 m" },
        { name: "Pietkiewiczówka II", dist: "600 m" },
        { name: "Turystyczna Lift", dist: "600 m" }
      ]
    },
    {
      title: "Transport Publiczny",
      icon: <Bus className="text-gold-500" />,
      items: [
        { name: "Autobus PKS Szklarska Poręba", dist: "400 m" },
        { name: "Pociąg Kolejka Izerska", dist: "1,2 km" },
        { name: "Pociąg Szklarska Poręba Huta", dist: "1,5 km" }
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-charcoal-900">
      <SEO
        title="Udogodnienia i Okolica"
        description="Sprawdź bogatą ofertę udogodnień w Willa Elena: sauna, parking, plac zabaw, grill. Zobacz atrakcje w okolicy Szklarskiej Poręby."
      />

      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/attr-hero.jpg"
          alt="Sauna Willa Elena"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-charcoal-900/60"></div>
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-4 block">Komfort & Lokalizacja</span>
          </FadeIn>
          <BlurReveal>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Atrakcje & Udogodnienia</h1>
          </BlurReveal>
          <FadeIn delay={200}>
            <p className="text-gray-300 max-w-2xl mx-auto font-light">
              Wszystko, czego potrzebujesz do udanego wypoczynku w jednym miejscu.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* On-Site Attractions Grid (Visual) */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-white mb-4">Wewnątrz Willi</h2>
          <p className="text-gray-400 font-light">Wybrane udogodnienia dla naszych Gości</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {onSiteAttractions.map((attr, idx) => (
            <FadeIn key={idx} delay={idx * 100} className="bg-charcoal-800 border border-white/5 group hover:border-gold-500/30 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative">
                <AttractionGallery images={attr.images} alt={attr.title} />
                <div className="absolute top-4 right-14 bg-charcoal-900/80 p-2 rounded-full text-gold-500 backdrop-blur-sm">
                  {attr.icon}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-white font-serif text-xl mb-4 group-hover:text-gold-500 transition-colors">{attr.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {attr.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Detailed Amenities List (Text Based - Great for SEO) */}
        <div className="bg-charcoal-800 p-8 md:p-12 rounded-sm border border-white/5 mb-20">
          <h2 className="font-serif text-3xl text-white mb-10 text-center">Pełna Lista Udogodnień</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {detailedAmenities.map((section, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  {section.icon}
                  <h3 className="text-lg font-serif text-white">{section.category}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SURROUNDINGS SECTION */}
      <div className="bg-charcoal-800 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-4 block">Lokalizacja</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Otoczenie Obiektu</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Willa Elena szczyci się doskonałą lokalizacją. Sprawdź, co znajduje się w pobliżu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {surroundingsCategories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 100} className="bg-charcoal-900 p-8 border border-white/5 hover:border-gold-500/30 transition-colors rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/5 rounded-full">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-serif text-white">{cat.title}</h3>
                </div>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-gray-300 font-light">{item.name}</span>
                      <span className="text-gold-500 font-bold whitespace-nowrap ml-4">{item.dist}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>

          <div className="mt-20 p-8 border border-gold-500/20 bg-charcoal-900/50 text-center max-w-3xl mx-auto rounded-sm backdrop-blur-sm">
            <h3 className="text-xl font-serif text-white mb-4">Zorganizujemy Twój Czas</h3>
            <p className="text-gray-400 font-light mb-6 text-sm leading-relaxed">
              Willa Elena to świetna baza wypadowa. Pomagamy w organizacji wycieczek do Pragi, Drezna czy Skalnego Miasta. Możesz u nas również nabyć bilety do Term Cieplickich.
            </p>
            <span className="text-gold-500 text-xs uppercase tracking-widest font-bold">Zapytaj w recepcji</span>
          </div>
        </div>
      </div>
    </div>
  );
};
