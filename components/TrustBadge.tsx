import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

interface TrustBadgeProps {
    rating: number;
    reviewCount: number;
    bookingCount?: string;
    source?: string;
    className?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({
    rating,
    reviewCount,
    bookingCount = "500+ zadowolonych gości",
    source = "Booking.com & Opinie Gości",
    className = ""
}) => {
    return (
        <div className={`inline-flex flex-col gap-2 bg-charcoal-800/60 backdrop-blur-sm border border-gold-500/20 rounded-sm px-4 py-3 ${className}`}>
            {/* Rating Row */}
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className={`${i < Math.floor(rating / 2) ? 'fill-gold-500 text-gold-500' : 'text-gray-600'}`}
                        />
                    ))}
                </div>
                <span className="text-white font-serif text-lg font-bold">{rating}/10</span>
                <span className="text-gray-400 text-xs">• {reviewCount} opinii</span>
            </div>

            {/* Booking Count */}
            <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle size={12} className="text-gold-400" />
                <span>{bookingCount}</span>
            </div>

            {/* Source */}
            <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                {source}
            </div>
        </div>
    );
};
