import React from 'react';
import { Star, Quote } from 'lucide-react';

interface MiniReviewCardProps {
    text: string;
    author: string;
    date: string;
    score: number;
    className?: string;
}

export const MiniReviewCard: React.FC<MiniReviewCardProps> = ({
    text,
    author,
    date,
    score,
    className = ""
}) => {
    return (
        <div className={`relative bg-charcoal-800/40 border border-white/10 rounded-sm p-6 ${className}`}>
            {/* Quote Icon */}
            <Quote className="absolute top-4 right-4 text-gold-500/20" size={32} />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={12}
                        className={`${i < score ? 'fill-gold-500 text-gold-500' : 'text-gray-600'}`}
                    />
                ))}
                <span className="text-gold-400 text-sm font-bold ml-2">{score}/10</span>
            </div>

            {/* Review Text */}
            <p className="text-gray-300 font-light text-sm italic leading-relaxed mb-4 font-serif">
                "{text}"
            </p>

            {/* Author & Date */}
            <div className="flex items-center justify-between text-xs">
                <span className="text-white font-medium">{author}</span>
                <span className="text-gray-500">{date}</span>
            </div>
        </div>
    );
};
