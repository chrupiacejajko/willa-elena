import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { ReservationForm } from '../components/ReservationForm';
import { User, Utensils, Wind, Maximize2 } from 'lucide-react';
import { Apartment as ApartmentType, apartmentsList } from '../data/apartments';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyModal } from '../components/PropertyModal';
import { FadeIn, BlurReveal } from '../components/Animations';
import { TrustBadge } from '../components/TrustBadge';
import { MiniReviewCard } from '../components/MiniReviewCard';

// --- MAIN PAGE ---
export const Apartment: React.FC = () => {
  const [selectedApartment, setSelectedApartment] = useState<ApartmentType | null>(null);

  return (
    <div className="pt-24 min-h-screen bg-charcoal-900">
      <SEO
        title="Apartamenty Rodzinne"
        description="Apartamenty rodzinne z aneksem kuchennym w Szklarskiej Porębie. 45m2, 4-6 osób. ⭐ 8.8/10. Rezerwuj telefonicznie: 606 649 799"
      />

      {selectedApartment && (
        <PropertyModal
          property={selectedApartment}
          onClose={() => setSelectedApartment(null)}
          isApartment={true}
        />
      )}

      {/* Hero Header */}
      <div className="bg-charcoal-800 py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/bg-cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-gold-500"></span>
              <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">Premium Living</span>
            </div>
          </FadeIn>
          <BlurReveal>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
              Apartamenty
            </h1>
          </BlurReveal>
          <FadeIn delay={200}>
            <p className="text-gray-400 max-w-2xl font-light text-lg leading-relaxed">
              Przestrzeń, niezależność i najwyższy komfort. Nasze apartamenty to idealny wybór dla rodzin i grup przyjaciół szukających domowej atmosfery w sercu gór.
            </p>
          </FadeIn>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Intro Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-white/5 pb-16">
          <FadeIn delay={0} className="flex flex-col items-center text-center gap-4 group">
            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-gold-500/50 transition-colors">
              <User className="text-gold-500" size={24} />
            </div>
            <div>
              <h4 className="text-white font-serif text-lg">Dla Rodzin</h4>
              <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">4-6 Osób</p>
            </div>
          </FadeIn>
          <FadeIn delay={100} className="flex flex-col items-center text-center gap-4 group">
            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-gold-500/50 transition-colors">
              <Utensils className="text-gold-500" size={24} />
            </div>
            <div>
              <h4 className="text-white font-serif text-lg">Aneks Kuchenny</h4>
              <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Pełne wyposażenie</p>
            </div>
          </FadeIn>
          <FadeIn delay={200} className="flex flex-col items-center text-center gap-4 group">
            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-gold-500/50 transition-colors">
              <Wind className="text-gold-500" size={24} />
            </div>
            <div>
              <h4 className="text-white font-serif text-lg">Balkon</h4>
              <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Widok na miasto</p>
            </div>
          </FadeIn>
          <FadeIn delay={300} className="flex flex-col items-center text-center gap-4 group">
            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-gold-500/50 transition-colors">
              <Maximize2 className="text-gold-500" size={24} />
            </div>
            <div>
              <h4 className="text-white font-serif text-lg">45 m²</h4>
              <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Przestrzeni</p>
            </div>
          </FadeIn>
        </div>

        {/* Featured Apartments List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {apartmentsList.map((apt, index) => (
            <FadeIn key={apt.id} delay={index * 150}>
              <PropertyCard
                property={apt}
                onSelect={() => setSelectedApartment(apt)}
                isApartment={true}
              />
            </FadeIn>
          ))}
        </div>

      </div>

      <ReservationForm />
    </div >
  );
};