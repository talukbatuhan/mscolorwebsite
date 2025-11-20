// components/Gallery/GalleryGrid.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS } from './GalleryTypes'; 
// PlayIcon bileşeni artık kullanılmadığı için kaldırılabilir, ancak hata vermez.
// import { PlayIcon } from './GalleryIcons'; 

interface GalleryGridProps {
    onItemClick: (index: number) => void;
}

// isVideo yardımcı fonksiyonu artık kullanılmıyor ve kaldırıldı.
// VideoThumbnail bileşeni artık kullanılmıyor ve kaldırıldı.

const GalleryGrid: React.FC<GalleryGridProps> = ({ onItemClick }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 pt-8">
                    {GALLERY_ITEMS.map((item, index) => (
                        <button
                            key={item.id}
                            className="relative block w-full aspect-video overflow-hidden rounded-lg shadow-lg transform hover:scale-[1.02] transition duration-300 group focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                            onClick={() => onItemClick(index)}
                            aria-label={`View ${item.alt}`}
                        >
                            {/* Tüm öğeler (varsayılan olarak) resim olarak işlenir */}
                            <Image 
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="w-full h-full object-cover transition duration-500 group-hover:opacity-80"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                loading="lazy"
                            />
                            
                            {/* Video için Play ikonu katmanı kaldırıldı */}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryGrid;