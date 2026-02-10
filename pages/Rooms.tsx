import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { ReservationForm } from '../components/ReservationForm';
import { ArrowRight } from 'lucide-react';
import { Room, roomsList } from '../data/rooms';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyModal } from '../components/PropertyModal';
import { FadeIn, BlurReveal } from '../components/Animations';
import { TrustBadge } from '../components/TrustBadge';
import { MiniReviewCard } from '../components/MiniReviewCard';

// --- MAIN PAGE COMPONENT ---
export const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <div className="pt-24 min-h-screen bg-charcoal-900">
      <SEO
        title="Nasze Pokoje"
        description="Pokoje Standard, Comfort, Classic w Willi Elena. Balkony z widokiem na góry, 200m od centrum. Od 80 zł/os. ⭐ 8.8/10 • ☎️ 606 649 799"
      />

      {/* Modal Injection */}
      {selectedRoom && (
        <PropertyModal
          property={selectedRoom}
          onClose={() => setSelectedRoom(null)}
          isApartment={false}
        />
      )}

      {/* Header Section */}
      <div className="bg-charcoal-800 py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/bg-cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-4 block">
              Noclegi Szklarska Poręba
            </span>
          </FadeIn>
          <BlurReveal>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Wybierz Swój Komfort
            </h1>
          </BlurReveal>
          <FadeIn delay={200}>
            <p className="text-gray-400 max-w-2xl font-light text-lg leading-relaxed">
              Niezapomniane noclegi w bezkonkurencyjnej lokalizacji. Zarezerwuj pokój z widokiem na góry bezpośrednio i oszczędzaj.
            </p>
          </FadeIn>
          <FadeIn delay={300} className="mt-8">
            <TrustBadge rating={8.8} reviewCount={250} />
          </FadeIn>
        </div>
      </div>

      {/* Mini Reviews */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={100}>
            <MiniReviewCard
              text="Pokoje czyste pachnące full wypas. Następnym razem przyjedziemy też tutaj."
              author="Monika"
              date="Luty 2026"
              score={10}
            />
          </FadeIn>
          <FadeIn delay={200}>
            <MiniReviewCard
              text="Super miejscówka. Brak minusów. Wszystko mi się podobało."
              author="Ryszard"
              date="Luty 2026"
              score={10}
            />
          </FadeIn>
          <FadeIn delay={300}>
            <MiniReviewCard
              text="Bez uwag wszystko super polecam. Wyjątkowy standard."
              author="Sylwester"
              date="Styczeń 2025"
              score={10}
            />
          </FadeIn>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsList.map((room, index) => (
            <FadeIn key={room.id} delay={index * 100}>
              <PropertyCard
                property={room}
                onSelect={() => setSelectedRoom(room)}
                isApartment={false}
              />
            </FadeIn>
          ))}
        </div>

        {/* Family CTA */}
        <FadeIn delay={300} className="mt-20 flex flex-col items-center justify-center text-center p-12 border border-gold-500/20 rounded-sm bg-gradient-to-b from-charcoal-800 to-charcoal-900 group hover:border-gold-500/50 transition-colors">
          <h3 className="font-serif text-2xl text-white mb-4">Szukasz czegoś większego?</h3>
          <p className="text-gray-400 mb-8 max-w-xl">
            Dla rodzin i grup przyjaciół przygotowaliśmy przestronne apartamenty z aneksami kuchennymi i osobnymi sypialniami.
          </p>
          <a
            href="#/apartament"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
          >
            Zobacz Apartamenty <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </FadeIn>
      </div>

      <ReservationForm />
    </div >
  );
};