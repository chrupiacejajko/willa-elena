import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AttractionGalleryProps {
    images: string[];
    alt: string;
}

export const AttractionGallery: React.FC<AttractionGalleryProps> = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // If only one image, show it without navigation
    if (images.length === 1) {
        return (
            <div className="relative h-64 overflow-hidden">
                <img
                    src={images[0]}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </div>
        );
    }

    return (
        <div className="relative h-64 overflow-hidden group">
            {/* Images */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`${alt} - zdjęcie ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-charcoal-900/80 hover:bg-charcoal-900 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Poprzednie zdjęcie"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-charcoal-900/80 hover:bg-charcoal-900 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Następne zdjęcie"
            >
                <ChevronRight size={20} />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-gold-500 w-6'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Przejdź do zdjęcia ${index + 1}`}
                    />
                ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-charcoal-900/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};
