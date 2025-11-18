// components/Gallery/FullscreenOverlay.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS, GalleryItem } from './GalleryTypes'; 
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';


interface FullscreenOverlayProps {
    currentIndex: number;
    onClose: () => void;
    onSetCurrentIndex: (index: number) => void;
}

const totalItems = GALLERY_ITEMS.length;

export default function FullscreenOverlay({ 
    currentIndex, 
    onClose, 
    onSetCurrentIndex, 
}: FullscreenOverlayProps) {
    
    const [isLoading, setIsLoading] = useState(true); 
    const item = GALLERY_ITEMS[currentIndex];

    // -------------------------------------------------------------------
    // DÜZELTİLEN KISIM: Senkron setState Uyarısını Giderme
    // Medya değiştiğinde yeniden yüklemeyi başlat
    useEffect(() => {
        // Senkron setState uyarısından kaçınmak için asenkron başlatma
        const timer = setTimeout(() => {
            setIsLoading(true); 
        }, 0); 
        
        return () => clearTimeout(timer);

    }, [currentIndex]);
    // -------------------------------------------------------------------

    // Medya Yüklendiğinde çağrılır
    const handleMediaLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    // Medya Yüklenemediğinde çağrılır
    const handleMediaError = useCallback(() => {
        console.error(`Tam ekran medyası yüklenirken hata oluştu: ${item.alt}`);
        setIsLoading(false); 
    }, [item.alt]);
    
    // Geri gitme işlemi
    const handlePrev = useCallback(() => {
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        onSetCurrentIndex(prevIndex);
    }, [currentIndex, onSetCurrentIndex]);

    // İleri gitme işlemi
    const handleNext = useCallback(() => {
        const nextIndex = (currentIndex + 1) % totalItems;
        onSetCurrentIndex(nextIndex);
    }, [currentIndex, onSetCurrentIndex]);


    // Klavye kontrolleri (ESC, Sol/Sağ Ok tuşları)
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handlePrev();
            } else if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handlePrev, handleNext, onClose]);

    return (
        <div className="fullscreen-overlay">
            
            {/* 1. Kapatma Butonu */}
            <button className="close-button" onClick={onClose}>
                <XMarkIcon className="w-10 h-10" />
            </button>

            {/* 2. Navigasyon Butonları */}
            <div className="navigation-buttons">
                <button className="nav-button prev-button" onClick={handlePrev}>
                    <ArrowLeftIcon className="w-12 h-12" />
                </button>
                <button className="nav-button next-button" onClick={handleNext}>
                    <ArrowRightIcon className="w-12 h-12" />
                </button>
            </div>
            
            {/* 3. Medya Konteyneri */}
            <div className="media-container-fullscreen">
                
                {/* Yükleniyor Spinner'ı */}
                {isLoading && (
                    <div className="loading-spinner-fullscreen">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
                        <p className="mt-6 text-white text-xl">Tam Ekran Yükleniyor...</p>
                    </div>
                )}

                {item.type === 'image' && (
                    <img
                        src={item.src}
                        alt={item.alt}
                        onLoad={handleMediaLoad} 
                        onError={handleMediaError} 
                        className={`fullscreen-image transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    />
                )}
                
                {/* Video */}
                {item.type === 'video' && (
                    <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={handleMediaLoad} 
                        onError={handleMediaError}
                        className={`fullscreen-video transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    />
                )}
            </div>

            {/* 4. Bilgi Alt Çubuğu */}
            <div className="fullscreen-info-bar">
                 <h3 className="item-name-info">{item.alt}</h3>
                 <p className="item-counter">{currentIndex + 1} / {totalItems}</p>
            </div>
        </div>
    );
}