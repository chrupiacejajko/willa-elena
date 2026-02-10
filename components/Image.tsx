import React, { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    wrapperClassName?: string;
}

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    className = '',
    wrapperClassName = '',
    loading = 'lazy',
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden bg-charcoal-700 ${wrapperClassName}`}>
            <img
                src={src}
                alt={alt}
                className={`transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
                loading={loading}
                onLoad={() => setIsLoaded(true)}
                {...props}
            />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 rounded-full border-2 border-gold-500/30 border-t-gold-500 animate-spin"></div>
                </div>
            )}
        </div>
    );
};
