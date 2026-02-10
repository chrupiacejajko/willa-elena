import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    threshold?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, className = "", delay = 0, threshold = 0.2 }) => {
    const ref = useIntersectionObserver({ threshold });
    return (
        <div
            ref={ref}
            className={`reveal-on-scroll ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

interface ImageRevealProps {
    src: string;
    alt: string;
    className?: string;
    threshold?: number;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({ src, alt, className = "", threshold = 0.1 }) => {
    const ref = useIntersectionObserver({ threshold });
    return (
        <div ref={ref} className={`image-mask-reveal relative w-full h-full overflow-hidden ${className}`}>
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
};

interface BlurRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    threshold?: number;
}

export const BlurReveal: React.FC<BlurRevealProps> = ({ children, className = "", delay = 0, threshold = 0.2 }) => {
    const ref = useIntersectionObserver({ threshold });
    return (
        <div
            ref={ref}
            className={`blur-reveal ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};
