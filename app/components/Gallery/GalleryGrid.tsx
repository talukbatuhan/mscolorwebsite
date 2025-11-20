// components/Gallery/GalleryGrid.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS } from './GalleryTypes'; 
import { PlayIcon } from './GalleryIcons';

interface GalleryGridProps {
    onItemClick: (index: number) => void;
}

/**
 * Bir kaynağın (src) dosya uzantısına bakarak video olup olmadığını belirler.
 * @param src Medya dosyasının yolu
 * @returns Kaynak bir video dosyası uzantısına sahipse true döner.
 */
const isVideo = (src: string): boolean => {
    // Yaygın video uzantılarını kontrol et
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    const lowercasedSrc = src.toLowerCase();
    
    return videoExtensions.some(ext => lowercasedSrc.endsWith(ext));
};


// Otomatik video thumbnail bileşeni (Öncekiyle aynı)
const VideoThumbnail = ({ src, alt }: { src: string; alt: string }) => {
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const generateThumbnail = () => {
            const video = document.createElement('video');
            video.src = src;
            video.crossOrigin = 'anonymous'; 
            video.muted = true;
            video.playsInline = true;
            
            const handleLoadedData = () => {
                video.currentTime = 0.1;
            };

            const handleSeeked = () => {
                try {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth || 640;
                    canvas.height = video.videoHeight || 360;
                    const ctx = canvas.getContext('2d');
                    
                    if (ctx && video.videoWidth > 0) {
                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
                        setThumbnail(dataUrl);
                        setLoading(false);
                    } else {
                        setError(true);
                        setLoading(false);
                    }
                } catch (err) {
                    console.error('Thumbnail oluşturulamadı:', err);
                    setError(true);
                    setLoading(false);
                } finally {
                    video.remove();
                }
            };

            const handleError = (e: Event) => {
                console.error('Video yüklenemedi:', src, e);
                setError(true);
                setLoading(false);
                video.remove();
            };

            video.addEventListener('loadeddata', handleLoadedData);
            video.addEventListener('seeked', handleSeeked);
            video.addEventListener('error', handleError);

            video.load();

            return () => {
                video.removeEventListener('loadeddata', handleLoadedData);
                video.removeEventListener('seeked', handleSeeked);
                video.removeEventListener('error', handleError);
                video.remove(); 
            };
        };

        const cleanup = generateThumbnail();
        return cleanup;
    }, [src]);

    if (loading) {
        return (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center absolute inset-0">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <div className="text-white text-xs">Yükleniyor...</div>
                </div>
            </div>
        );
    }

    if (error || !thumbnail) {
        return (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white p-4 absolute inset-0">
                <PlayIcon />
                <span className="text-sm mt-2 text-center line-clamp-2">{alt}</span>
            </div>
        );
    }

    return (
        <Image 
            src={thumbnail}
            alt={alt}
            fill
            className="w-full h-full object-cover transition duration-500 group-hover:opacity-80"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            unoptimized
        />
    );
};

const GalleryGrid: React.FC<GalleryGridProps> = ({ onItemClick }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 pt-8">
                    {GALLERY_ITEMS.map((item, index) => {
                        const isMediaVideo = isVideo(item.src); // src kontrolü ile türü belirle
                        
                        return (
                            <button
                                key={item.id}
                                className="relative block w-full aspect-video overflow-hidden rounded-lg shadow-lg transform hover:scale-[1.02] transition duration-300 group focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                                onClick={() => onItemClick(index)}
                                aria-label={`View ${item.alt}`}
                            >
                                {/* isMediaVideo değişkenine göre doğru bileşeni seçme mantığı */}
                                {isMediaVideo ? (
                                    <VideoThumbnail src={item.src} alt={item.alt} />
                                ) : (
                                    <Image 
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="w-full h-full object-cover transition duration-500 group-hover:opacity-80"
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                        loading="lazy"
                                    />
                                )}
                                
                                {/* Sadece video öğeleri için Play ikonu katmanını göster */}
                                {isMediaVideo && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition duration-300 pointer-events-none">
                                        <PlayIcon />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GalleryGrid;