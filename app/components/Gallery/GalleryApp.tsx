// components/Gallery/GalleryApp.tsx
"use client";
import React, { useState, useCallback } from 'react';
import { GALLERY_ITEMS } from './GalleryTypes';
import GalleryGrid from './GalleryGrid';
import GalleryDetail from './GalleryDetail';
import FullscreenOverlay from './FullscreenOverlay';

/**
 * Ana Galeri Uygulaması Bileşeni (Client Component)
 * Tüm state yönetimini ve mod görünüm mantığını içerir.
 */
const GalleryApp: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

    // Galeri ızgarasında bir öğeye tıklandığında
    const handleItemClick = useCallback((index: number) => {
        setCurrentIndex(index);
        setIsDetailOpen(true);
        setIsFullscreenOpen(false);
    }, []);

    // Detay görünümünü kapat
    const handleCloseDetail = useCallback(() => {
        setIsDetailOpen(false);
        setCurrentIndex(null);
    }, []);

    // Detay görünümündeyken item index'ini güncelle
    const handleSetCurrentIndex = useCallback((index: number) => {
        if (index >= 0 && index < GALLERY_ITEMS.length) {
            setCurrentIndex(index);
        }
    }, []);

    // Tam ekran görünümünü aç
    const handleOpenFullscreen = useCallback(() => {
        setIsFullscreenOpen(true);
    }, []);

    // Tam ekran görünümünü kapat
    const handleCloseFullscreen = useCallback(() => {
        setIsFullscreenOpen(false);
    }, []);

    // İçerik Render Mantığı
    const renderContent = () => {
        if (isDetailOpen && currentIndex !== null) {
            return (
                <GalleryDetail
                    currentIndex={currentIndex}
                    onClose={handleCloseDetail}
                    onSetCurrentIndex={handleSetCurrentIndex} 
                    onOpenFullscreen={handleOpenFullscreen}
                />
            );
        }

        return (
            <div className="min-h-screen bg-linear-to-br from-slate-800 via-blue-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 px-4 pb-20">
                    <div className="max-w-7xl mx-auto ">
                        <GalleryGrid onItemClick={handleItemClick} />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="relative">
            {renderContent()}

            {isFullscreenOpen && currentIndex !== null && (
                <FullscreenOverlay
                    currentIndex={currentIndex}
                    onClose={handleCloseFullscreen}
                    onSetCurrentIndex={handleSetCurrentIndex} 
                />
            )}
        </div>
    );
};

export default GalleryApp;  