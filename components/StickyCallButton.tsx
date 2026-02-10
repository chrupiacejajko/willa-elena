import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export const StickyCallButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 200px
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        // Analytics tracking (if Google Analytics is installed)
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'phone_click', {
                event_category: 'engagement',
                event_label: 'sticky_button',
                page: window.location.pathname
            });
        }
    };

    return (
        <a
            href="tel:+48606649799"
            onClick={handleClick}
            className={`fixed bottom-6 right-6 z-50 lg:hidden flex items-center gap-3 bg-gold-500 text-charcoal-900 px-6 py-4 rounded-full shadow-2xl hover:bg-gold-400 transition-all duration-300 font-bold text-sm uppercase tracking-wider animate-pulse-subtle ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
                }`}
            style={{
                transition: 'transform 0.4s ease-out, opacity 0.4s ease-out'
            }}
        >
            <div className="relative">
                <Phone size={20} />
                {/* Pulse ring animation */}
                <span className="absolute inset-0 rounded-full bg-gold-500 animate-ping opacity-20"></span>
            </div>
            <span>Zadzwoń</span>
        </a>
    );
};
