// components/Gallery/GalleryDetail.tsx
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GALLERY_ITEMS, GalleryItem } from './GalleryTypes'; 
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon, PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon, ForwardIcon, BackwardIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface GalleryDetailProps {
    currentIndex: number;
    onClose: () => void;
    onSetCurrentIndex: (index: number) => void;
    onOpenFullscreen: () => void;
}

const totalItems = GALLERY_ITEMS.length;

export default function GalleryDetail({ 
    currentIndex, 
    onClose, 
    onSetCurrentIndex, 
    onOpenFullscreen 
}: GalleryDetailProps) {
    
    const [isLoading, setIsLoading] = useState(true); 
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    const videoRef = useRef<HTMLVideoElement>(null);
    const item = GALLERY_ITEMS[currentIndex];

    // Mobil cihaz kontrolü
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`Medya değişimi algılandı: Yükleme başlatıldı (Asenkron).`);
            setIsLoading(true);
        }, 0); 
        
        return () => clearTimeout(timer);
    }, [currentIndex]);

    useEffect(() => {
        // Yeni video yüklendiğinde kontrolleri sıfırla
        setIsPlaying(true);
        setIsMuted(true);
        setCurrentTime(0);
        setDuration(0);
        // Mobilde kontrolleri otomatik göster
        if (isMobile && item.type === 'video') {
            setShowControls(true);
        }
    }, [currentIndex, isMobile, item.type]);

    const handleMediaLoad = useCallback(() => {
        setIsLoading(false);
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    }, []);

    const handleMediaError = useCallback(() => {
        console.error(`Medya yüklenirken hata oluştu: ${item.alt}`);
        setIsLoading(false); 
    }, [item.alt]);

    const handlePrev = useCallback(() => {
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        onSetCurrentIndex(prevIndex);
    }, [currentIndex, onSetCurrentIndex]);

    const handleNext = useCallback(() => {
        const nextIndex = (currentIndex + 1) % totalItems;
        onSetCurrentIndex(nextIndex);
    }, [currentIndex, onSetCurrentIndex]);

    // Video kontrol fonksiyonları
    const togglePlayPause = useCallback(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }, [isPlaying]);

    const toggleMute = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    }, [isMuted]);

    const skipForward = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 10, duration);
        }
    }, [duration]);

    const skipBackward = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 10, 0);
        }
    }, []);

    const handleTimeUpdate = useCallback(() => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    }, []);

    const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const toggleControlsVisibility = useCallback(() => {
        if (isMobile && item.type === 'video') {
            setShowControls(!showControls);
        }
    }, [isMobile, item.type, showControls]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                if (item.type === 'video' && event.shiftKey) {
                    skipBackward();
                } else {
                    handlePrev();
                }
            } else if (event.key === 'ArrowRight') {
                if (item.type === 'video' && event.shiftKey) {
                    skipForward();
                } else {
                    handleNext();
                }
            } else if (event.key === 'Escape') {
                onClose();
            } else if (event.key === ' ' && item.type === 'video') {
                event.preventDefault();
                togglePlayPause();
            } else if (event.key === 'm' && item.type === 'video') {
                toggleMute();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handlePrev, handleNext, onClose, item.type, togglePlayPause, toggleMute, skipForward, skipBackward]);

    return (
        <div className="fixed inset-0 z-[9999] bg-linear-to-tr from-black/95 via-slate-900/98 to-black/95 backdrop-blur-2xl animate-in fade-in duration-300">
            
            {/* Kapatma Butonu - Responsive */}
            <button 
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-6 sm:right-6 z-[10001] w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-red-500/90 hover:border-red-500 hover:rotate-90 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
                aria-label="Kapat"
            >
                <XMarkIcon className="w-5 h-5 sm:w-8 sm:h-8" />
            </button>

            {/* Navigasyon Butonları - Responsive */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 sm:px-4 z-[10000] pointer-events-none">
                <button 
                    onClick={handlePrev}
                    className="pointer-events-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-white/15 to-white/5 backdrop-blur-xl border border-white/25 text-white hover:bg-white/25 hover:scale-110 hover:-translate-x-1 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 group"
                    aria-label="Önceki"
                >
                    <ArrowLeftIcon className="w-5 h-5 sm:w-8 sm:h-8 group-hover:-translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                    onClick={handleNext}
                    className="pointer-events-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-white/15 to-white/5 backdrop-blur-xl border border-white/25 text-white hover:bg-white/25 hover:scale-110 hover:translate-x-1 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 group"
                    aria-label="Sonraki"
                >
                    <ArrowRightIcon className="w-5 h-5 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
            
            {/* Medya ve Bilgi Alanı - Responsive */}
            <div className="h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                
                {/* Medya Konteyneri - Responsive */}
                <div 
                    className="relative w-full h-[70vh] sm:h-[75vh] lg:h-[80vh] flex items-center justify-center"
                    onMouseEnter={() => !isMobile && item.type === 'video' && setShowControls(true)}
                    onMouseLeave={() => !isMobile && item.type === 'video' && setShowControls(false)}
                    onClick={toggleControlsVisibility}
                >
                    
                    {/* Dekoratif Arka Plan Efekti */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"></div>
                    
                    {/* Yükleniyor Spinner - Responsive */}
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl">
                            <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-white/20 border-t-blue-500"></div>
                            <p className="mt-4 sm:mt-6 text-white text-base sm:text-lg font-medium tracking-wide">Yükleniyor...</p>
                        </div>
                    )}

                    {/* Resim - Responsive */}
                    {item.type === 'image' && (
                        <img
                            src={item.src}
                            alt={item.alt}
                            onLoad={handleMediaLoad} 
                            onError={handleMediaError} 
                            className={`relative z-[1] max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 transition-all duration-700 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                        />
                    )}
                    
                    {/* Video - Responsive */}
                    {item.type === 'video' && (
                        <>
                            <video
                                ref={videoRef}
                                src={item.src}
                                autoPlay
                                loop
                                muted={isMuted}
                                playsInline
                                onLoadedData={handleMediaLoad} 
                                onError={handleMediaError}
                                onTimeUpdate={handleTimeUpdate}
                                className={`relative z-[1] max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 transition-all duration-700 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                            />
                            
                            {/* Video Kontrolleri - Responsive */}
                            <div className={`absolute bottom-2 sm:bottom-4 left-2 right-2 sm:left-4 sm:right-4 z-[2] bg-black/70 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-4 transition-all duration-300 ${showControls || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                                
                                {/* Progress Bar - Responsive */}
                                <div className="mb-2 sm:mb-3">
                                    <input
                                        type="range"
                                        min="0"
                                        max={duration || 0}
                                        value={currentTime}
                                        onChange={handleSeek}
                                        className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                    />
                                    <div className="flex justify-between text-[10px] sm:text-xs text-white/70 mt-1">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                </div>
                                
                                {/* Kontrol Butonları - Responsive */}
                                <div className="flex items-center justify-center gap-1 sm:gap-2">
                                    {/* Geri Sar */}
                                    <button
                                        onClick={skipBackward}
                                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                                        title="10 saniye geri"
                                        aria-label="10 saniye geri"
                                    >
                                        <BackwardIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                    
                                    {/* Oynat/Duraklat */}
                                    <button
                                        onClick={togglePlayPause}
                                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 shadow-lg"
                                        title={isPlaying ? "Duraklat" : "Oynat"}
                                        aria-label={isPlaying ? "Duraklat" : "Oynat"}
                                    >
                                        {isPlaying ? (
                                            <PauseIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                                        ) : (
                                            <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                                        )}
                                    </button>
                                    
                                    {/* İleri Sar */}
                                    <button
                                        onClick={skipForward}
                                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                                        title="10 saniye ileri"
                                        aria-label="10 saniye ileri"
                                    >
                                        <ForwardIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                    
                                    {/* Ses */}
                                    <button
                                        onClick={toggleMute}
                                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 ml-1 sm:ml-2"
                                        title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
                                        aria-label={isMuted ? "Sesi Aç" : "Sesi Kapat"}
                                    >
                                        {isMuted ? (
                                            <SpeakerXMarkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        ) : (
                                            <SpeakerWaveIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}