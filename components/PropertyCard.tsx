import React from 'react';
import { User, Maximize2, Bed, ArrowRight, Utensils } from 'lucide-react';
import { Room } from '../data/rooms';
import { Apartment } from '../data/apartments';
import { Image } from './Image';

// Union type for the property
type Property = Room | Apartment;

interface PropertyCardProps {
    property: Property;
    onSelect: () => void;
    isApartment?: boolean; // Flag to handle specific apartment logic (like showing Utensils icon)
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect, isApartment = false }) => {
    return (
        <div
            className="group flex flex-col h-full bg-charcoal-800 rounded-sm overflow-hidden border border-white/5 cursor-pointer hover:border-gold-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/5 hover:-translate-y-1"
            onClick={onSelect}
        >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-charcoal-900">
                <Image
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    wrapperClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-charcoal-900/90 backdrop-blur-sm px-3 py-1.5 border border-white/10 shadow-lg z-10">
                    <span className="text-xs font-bold text-white tracking-widest">
                        {isApartment ? property.size : `OD ${property.price} ZŁ`}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-grow p-6 relative">
                <div className="mb-4">
                    {isApartment && (
                        <span className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-2 block">{property.type}</span>
                    )}
                    <h3 className={`font-serif text-white group-hover:text-gold-500 transition-colors duration-300 leading-tight ${isApartment ? 'text-3xl' : 'text-2xl'}`}>
                        {property.name}
                    </h3>
                </div>

                <div className="flex items-center gap-6 text-xs text-gray-400 mb-5 pb-5 border-b border-white/5 flex-wrap">
                    <div className="flex items-center gap-2">
                        <User size={14} className="text-gold-500" />
                        <span>{property.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Maximize2 size={14} className="text-gold-500" />
                        <span>{property.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Bed size={14} className="text-gold-500" />
                        <span className="truncate max-w-[100px]">{property.bed}</span>
                    </div>
                    {isApartment && (
                        <div className="flex items-center gap-2">
                            <Utensils size={14} className="text-gold-500" />
                            <span>Aneks</span>
                        </div>
                    )}
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                    {property.desc}
                </p>

                <div className="mt-auto flex items-center justify-between group/link">
                    <span className="text-gold-500 text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover/link:border-gold-500 transition-all pb-0.5">
                        {isApartment ? 'Zobacz Szczegóły' : 'Szczegóły'}
                    </span>
                    <ArrowRight size={16} className="text-gold-500 transform group-hover/link:translate-x-2 transition-transform" />
                </div>
            </div>
        </div>
    );
};
