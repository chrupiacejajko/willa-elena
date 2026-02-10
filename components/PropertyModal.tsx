import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User, Maximize2, Bed, Wifi, Wind, X, Tv, Sun, Armchair, Mountain, Check, Coffee, Shirt, Refrigerator, Gamepad2, Utensils, Bath } from 'lucide-react';

import { useScrollTo } from '../hooks/useScrollTo';
import { Room } from '../data/rooms';
import { Apartment } from '../data/apartments';
import { Image } from './Image';

// Union type for the property
type Property = Room | Apartment;

interface PropertyModalProps {
    property: Property;
    onClose: () => void;
    isApartment?: boolean;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose, isApartment = false }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const { scrollToElement } = useScrollTo();

    useEffect(() => {
        // Prevent scrolling and handle scrollbar shift
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`;

        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, []);

    const nextImage = () => setCurrentImgIndex((prev) => (prev + 1) % property.images.length);
    const prevImage = () => setCurrentImgIndex((prev) => (prev - 1 + property.images.length) % property.images.length);

    const getFeatureIcon = (feature: string) => {
        const lower = feature.toLowerCase();
        if (lower.includes('wi-fi') || lower.includes('wifi')) return <Wifi size={16} className="text-gold-500" />;
        if (lower.includes('aneks') || lower.includes('kuchnia') || lower.includes('kuchenny')) return <Utensils size={16} className="text-gold-500" />; // Apartment specific
        if (lower.includes('tv') || lower.includes('telewizor')) return <Tv size={16} className="text-gold-500" />;
        if (lower.includes('balkon')) return <Wind size={16} className="text-gold-500" />;
        if (lower.includes('sofa') || lower.includes('wypoczynek')) return <Armchair size={16} className="text-gold-500" />;
        if (lower.includes('słońce') || lower.includes('nasłonecznienie')) return <Sun size={16} className="text-gold-500" />; // Room specific
        if (lower.includes('widok') || lower.includes('miasto') || lower.includes('góry')) return <Mountain size={16} className="text-gold-500" />;
        if (lower.includes('ekspres') || lower.includes('kawa') || lower.includes('czajnik')) return <Coffee size={16} className="text-gold-500" />;
        if (lower.includes('łazienka') || lower.includes('prysznic') || lower.includes('wanna')) return <Bath size={16} className="text-gold-500" />;
        if (lower.includes('lodówka') || lower.includes('lodowka')) return <Refrigerator size={16} className="text-gold-500" />;
        if (lower.includes('gry') || lower.includes('puzzle')) return <Gamepad2 size={16} className="text-gold-500" />;
        if (lower.includes('żelazko')) return <Shirt size={16} className="text-gold-500" />;
        return <Check size={16} className="text-gold-500" />;
    };

    const handlBookClick = () => {
        onClose();
        // Small delay to allow modal to close first
        setTimeout(() => {
            scrollToElement('formularz');
        }, 100);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 animate-fade-in-up">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative bg-charcoal-800 w-full max-w-7xl h-full md:h-[90vh] md:rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/10">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-3 bg-black/60 hover:bg-gold-500 text-white hover:text-charcoal-900 rounded-full transition-all shadow-lg"
                >
                    <X size={24} />
                </button>

                {/* LEFT: Gallery Section */}
                <div className="w-full md:w-2/3 bg-black flex flex-col h-[40vh] md:h-full relative group">
                    <div className="flex-grow relative overflow-hidden flex items-center justify-center">
                        <Image
                            src={property.images[currentImgIndex]}
                            alt={property.name}
                            className="max-w-full max-h-full object-contain"
                            wrapperClassName="w-full h-full flex items-center justify-center"
                        />
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="p-3 bg-black/50 hover:bg-gold-500 text-white hover:text-charcoal-900 rounded-full transition-all"><ChevronLeft size={32} /></button>
                            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="p-3 bg-black/50 hover:bg-gold-500 text-white hover:text-charcoal-900 rounded-full transition-all"><ChevronRight size={32} /></button>
                        </div>
                    </div>
                    <div className="hidden md:flex p-4 gap-3 overflow-x-auto bg-charcoal-900/90 backdrop-blur border-t border-white/10 no-scrollbar absolute bottom-0 w-full">
                        {property.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImgIndex(idx)}
                                className={`relative w-24 h-16 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all ${currentImgIndex === idx ? 'border-gold-500 opacity-100 ring-2 ring-gold-500/20' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            >
                                <Image src={img} alt="thumbnail" className="w-full h-full object-cover" wrapperClassName="w-full h-full" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Details Section */}
                <div className="w-full md:w-1/3 p-8 overflow-y-auto bg-charcoal-800 flex flex-col border-l border-white/5">
                    <div className="mb-8">
                        <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">{property.type}</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">{property.name}</h2>

                        <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden mb-8">
                            <div className="bg-charcoal-800 p-4 flex flex-col items-center text-center gap-2">
                                <Maximize2 size={20} className="text-gold-500" />
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Powierzchnia</span>
                                <span className="text-white font-medium">{property.size}</span>
                            </div>
                            <div className="bg-charcoal-800 p-4 flex flex-col items-center text-center gap-2">
                                <User size={20} className="text-gold-500" />
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Osoby</span>
                                <span className="text-white font-medium">{property.capacity}</span>
                            </div>
                            <div className="bg-charcoal-800 p-4 flex flex-col items-center text-center gap-2 col-span-2">
                                <Bed size={20} className="text-gold-500" />
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Łóżka</span>
                                <span className={`text-white font-medium ${isApartment ? 'text-xs md:text-sm px-2' : ''}`}>{property.bed}</span>
                            </div>
                        </div>

                        <p className={`text-gray-300 font-light leading-relaxed mb-8 text-sm ${isApartment ? 'border-l-2 border-gold-500 pl-4' : ''}`}>
                            {property.desc}
                        </p>

                        <h3 className="text-white font-serif text-xl mb-4">Udogodnienia</h3>
                        <ul className="grid grid-cols-1 gap-3 mb-8">
                            {property.features.map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-400 p-2 rounded-sm hover:bg-white/5 transition-colors">
                                    {getFeatureIcon(feat)}
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10 bg-charcoal-800 sticky bottom-0">
                        <div className="flex items-end justify-between mb-6">
                            <span className="text-gray-400 text-sm font-light">Cena za osobę / noc</span>
                            <div className="text-right">
                                <span className="block text-xs text-gold-500 font-bold uppercase tracking-wider mb-1">Już od</span>
                                <span className="text-3xl text-white font-serif">{property.price} zł</span>
                            </div>
                        </div>
                        <button
                            onClick={handlBookClick}
                            className="w-full block py-4 bg-gold-500 hover:bg-gold-600 text-charcoal-900 text-center font-bold uppercase tracking-[0.2em] transition-all rounded-sm shadow-xl hover:shadow-gold-500/20"
                        >
                            {isApartment ? 'Zapytaj o Termin' : 'Zapytaj o Dostępność'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
