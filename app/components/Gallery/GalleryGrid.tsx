// components/Gallery/GalleryGrid.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS } from './GalleryTypes'; 

const PlayIcon: React.FC = () => (
    <svg className="w-12 h-12 text-white opacity-80 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.409 7.005c-.068-.521-.297-.978-.737-1.417C19.782 5.09 18.23 4.5 12 4.5c-6.23 0-7.782.59-8.672 1.088-.44.439-.67 1.088-.738 1.417C2.5 7.636 2.5 12 2.5 12c0 4.365.001 6.364.737 7.005.068.33.297.896.737 1.336.89.497 2.443 1.088 8.672 1.088 6.23 0 7.782-.59 8.672-1.088.44-.439.67-.978.737-1.417C21.5 16.364 21.5 12 21.5 12c0-4.365-.001-6.364-.091-4.995zM10.5 16.5v-9L16 12l-5.5 4.5z"/>
    </svg>
);

interface GalleryGridProps {
    onItemClick: (index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ onItemClick }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 pt-8">
                    {GALLERY_ITEMS.map((item, index) => {
                        
                        // Öğenin bir video olup olmadığını kontrol ediyoruz.
                        const isVideo = !!item.youtubeEmbedUrl;
                        
                        // Kullanılacak görsel kaynağını belirliyoruz.
                        // Video ise thumb'ı, değilse src'yi kullanıyoruz.
                        const imageSrc = item.thumb || item.src;

                        return (
                            <button
                                key={item.id}
                                className="relative block w-full aspect-video overflow-hidden rounded-lg shadow-lg transform hover:scale-[1.02] transition duration-300 group focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                                onClick={() => onItemClick(index)}
                                aria-label={`View ${item.alt}`}
                            >
                                {imageSrc ? (
                                    // Görsel Kaynağı (Hem resim hem video thumb için)
                                    <Image 
                                        src={imageSrc} // 'thumb' veya 'src' kullanılır
                                        alt={item.alt}
                                        fill
                                        className="w-full h-full object-cover transition duration-500 group-hover:opacity-80"
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                        loading="lazy"
                                    />
                                ) : (
                                    // Kaynak bulunamazsa basit bir yer tutucu (Placeholder)
                                    <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                                        <p className="text-white/60 text-sm">Medya Yok</p>
                                    </div>
                                )}
                                
                                {/* Video ise Play ikonu katmanını ekle */}
                                {isVideo && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition duration-300">
                                        <PlayIcon />
                                    </div>
                                )}
                                
                                {/* Alt metin (Sizin orijinal kodunuzda yoktu, ama isteğe bağlı eklenebilir) */}
                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <span className="text-sm font-medium">{item.alt}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GalleryGrid;