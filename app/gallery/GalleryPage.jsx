"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./GalleryPage.css";

// --- DATA ---
const galleryItems = [
    {
        id: 1,
        type: "video",
        src: "",
        thumb: "",
        alt: "MS Color Reklam",
    },
    {
        id: 2,
        type: "video",
        src: "",
        thumb: "",
        alt: "GyroMix Rehber",
    },
    {
        id: 3,
        type: "video",
        src: "",
        thumb: "",
        alt: "YouTube Video 2 - Construction Site Footage",
    },
    {
        id: 4,
        type: "image",
        src: "/Gallery/DispenserPose1.JPG",
        thumb: "/Gallery/DispenserPose1.JPG",
        alt: "Dispenser Pose 1",
    },
    {
        id: 5,
        type: "image",
        src: "/Gallery/DispenserPose2.JPG",
        thumb: "/Gallery/DispenserPose2.JPG",
        alt: "Dispenser Pose 2",
    },
    {
        id: 6,
        type: "image",
        src: "/Gallery/DispenserPose3.png",
        thumb: "/Gallery/DispenserPose3.png",
        alt: "Dispenser Pose 3",
    },
        {
        id: 7,
        type: "image",
        src: "/Gallery/dispenserBimo.jpg",
        thumb: "/Gallery/dispenserBimo.jpg",
        alt: "Dispenser Yazılım",
    },
    {
        id: 8,
        type: "image",
        src: "/Gallery/MasterTint0.png",
        thumb: "/Gallery/MasterTint0.png",
        alt: "MasterTint Montaj",
    },
    {
        id: 9,
        type: "image",
        src: "/Gallery/machines.jpeg",
        thumb: "/Gallery/machines.jpeg",
        alt: "Makineler Afiş",
    },
    {
        id: 10,
        type: "image",
        src: "/Gallery/GyroMix_1.PNG",
        thumb: "/Gallery/GyroMix_1.PNG",
        alt: "GyroMix Afiş",
    },
    {
        id: 11,
        type: "image",
        src: "/Gallery/GyroMix_2.png",
        thumb: "/Gallery/GyroMix_2.png",
        alt: "GyroMix Özellikleri",
    },
    {
        id: 12,
        type: "image",
        src: "/Gallery/MasterTint_2.png",
        thumb: "/Gallery/MasterTint_2.png",
        alt: "MasterTint Afiş",
    },
    {
        id: 13,
        type: "image",
        src: "/Gallery/MasterTint_1.png",
        thumb: "/Gallery/MasterTint_1.png",
        alt: "MasterTint Özellikleri",
    },
    {
        id: 14,
        type: "image",
        src: "/Gallery/DispenserRender.png",
        thumb: "/Gallery/DispenserRender.png",
        alt: "Dispenser Render",
    },
    {
        id: 15,
        type: "image",
        src: "/Gallery/GyroMixerRender.png",
        thumb: "/Gallery/GyroMixerRender.png",
        alt: "GyroMix Render",
    },
    {
        id: 16,
        type: "image",
        src: "Gallery/MasterMixRender.png",
        thumb: "Gallery/MasterMixRender.png",
        alt: "MasterMix Render",
    },
    {
        id: 17,
        type: "image",
        src: "Gallery/MasterMixPose1.png",
        thumb: "Gallery/MasterMixPose1.png",
        alt: "MasterMix Pose 1",
    },
    {
        id: 18,
        type: "image",
        src: "Gallery/MasterMixPose2.png",
        thumb: "Gallery/MasterMixPose2.png",
        alt: "MasterMix Pose 2",
    },
    {
        id: 19,
        type: "image",
          src: "Gallery/MasterMixPose3.png",
        thumb: "Gallery/MasterMixPose3.png",
        alt: "MasterMix Pose 3",
    },
    {
        id: 20,
        type: "image",
        src: "Gallery/MasterMixPose4.png",
        thumb: "Gallery/MasterMixPose4.png",
        alt: "MasterMix Pose 4",
    },
    {
        id: 21,
        type: "image",
        src: "Gallery/MasterMixPose5.png",
        thumb: "Gallery/MasterMixPose5.png",
        alt: "MasterMix Pose 5",
    },
    {
        id: 22,
        type: "image",
        src: "Gallery/MasterMixPose6.png",
        thumb: "Gallery/MasterMixPose6.png",
        alt: "MasterMix Pose 6",
    },
        {
        id: 23,
        type: "image",
        src: "Gallery/mscolor5.jpg",
        thumb: "Gallery/mscolor5.jpg",
        alt: "Fabrika Akşam",
    },
    {
        id: 24,
        type: "image",
        src: "Gallery/mscolor4.jpg",
        thumb: "Gallery/mscolor4.jpg",
        alt: "Fabrika Dışarıdan Görüntü",
    },
    {
        id: 25,
        type: "image",
        src: "Gallery/mscolor2.jpg",
        thumb: "Gallery/mscolor2.jpg",
        alt: "Fabrika Dışarıdan Görüntü",
    },
];

// Reusable Play Icon component
const PlayIcon = () => (
    <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />   
    </svg>
);

// Reusable Loader component
const Loader = () => (
    <div className="loader">
        <div className="spinner"></div>   
    </div>
);

// Close Icon for Fullscreen
const CloseIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function GalleryApp() {
    const [viewMode, setViewMode] = useState("grid");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const thumbnailRefs = useRef([]); 
    const galleryWrapperRef = useRef(null);
    const mediaContentRef = useRef(null);
    const currentItem = galleryItems[currentIndex];

    const { t, i18n } = useTranslation(); 

    useEffect(() => {
        if (viewMode === "detail") {
            const activeThumb = thumbnailRefs.current[currentIndex];
            if (activeThumb) {
                activeThumb.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            }
        }
    }, [currentIndex, viewMode]); 

    useEffect(() => {
        if (viewMode === "detail" && galleryWrapperRef.current) {
            galleryWrapperRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start", 
            });
        }
    }, [viewMode]); 

    const handleThumbnailClick = useCallback((index) => {
        setCurrentIndex(index);
        setIsLoading(true);
        setViewMode("detail"); 
    }, []);

    const handleMediaLoad = useCallback(() => {
        setIsLoading(false);
    }, []); 

    const handleVideoLoad = useCallback(() => {
        setTimeout(() => setIsLoading(false), 500);
    }, []);

    const handleBackToGrid = useCallback(() => {
        setViewMode("grid");
        setIsFullscreen(false);
    }, []); 

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
        setIsLoading(true);
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length
        );
        setIsLoading(true);
    }, []);

    // Çift tıklama ile tam ekran modunu açma
    const handleMediaDoubleClick = useCallback(() => {
        if (currentItem.type === "image") {
            setIsFullscreen(true);
        }
    }, [currentItem.type]);

    // Tam ekrandan çıkış
    const handleCloseFullscreen = useCallback(() => {
        setIsFullscreen(false);
    }, []);

    // ESC tuşu ile tam ekran modundan çıkma
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isFullscreen) {
                setIsFullscreen(false);
            } else if (e.key === 'ArrowRight' && isFullscreen) {
                handleNext();
            } else if (e.key === 'ArrowLeft' && isFullscreen) {
                handlePrev();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isFullscreen, handleNext, handlePrev]);

    // Body overflow kontrolü
    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isFullscreen]);

    return (
        <>
            <div className="gallery-container">
                <div className="gallery-wrapper" ref={galleryWrapperRef}>

                    <header className="gallery-header">
                        <h3 className="gallery-title">
                            {t("gallery_title_h1")}
                        </h3>
                        {viewMode === "detail" && (
                            <button onClick={handleBackToGrid} className="gallery-btn gallery-back-button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                                {t("gallery_back_button")}
                            </button>
                        )}
                    </header>
                                     
                    {viewMode === "grid" ? (
                        // GRID VIEW
                        <div className="grid-container">
                            {galleryItems.map((item, index) => (
                                <button
                                    key={item.id}
                                    className="grid-item"
                                    onClick={() => handleThumbnailClick(index)}
                                    aria-label={`View ${item.alt}`}
                                >
                                    <img
                                        src={item.thumb || item.src}
                                        alt={item.alt}
                                        className="grid-image"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://placehold.co/300x200/4B5563/FFFFFF?text=Media+Not+Found";
                                            e.currentTarget.onerror = null;
                                        }}
                                    />
                                    {item.type === "video" && (
                                        <div className="video-overlay">
                                            <PlayIcon />        
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    ) : (
                        // DETAIL VIEW
                        <div className="detail-container">
                            <div className="main-media-area">
                                <div className="media-container">
                                    {isLoading && <Loader />}        
                                    
                                    <button
                                        onClick={handlePrev}
                                        className="nav-button prev-button"
                                        aria-label="Previous item"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                    </button>
                                    
                                    <button
                                        onClick={handleNext}
                                        className="nav-button next-button"
                                        aria-label="Next item"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                    
                                    <div
                                        ref={mediaContentRef}
                                        className={`media-content ${
                                            isLoading ? "loading" : "loaded"
                                        }`}
                                        onDoubleClick={handleMediaDoubleClick}
                                    >
                                        {currentItem.type === "image" ? (
                                            <img
                                                src={currentItem.src}
                                                alt={currentItem.alt}
                                                className="media-image"
                                                onLoad={handleMediaLoad}
                                                onError={handleMediaLoad}
                                            />
                                        ) : (
                                            <iframe 
                                                key={currentItem.src}
                                                className="media-iframe"
                                                src={currentItem.src}
                                                title={currentItem.alt}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                onLoad={handleVideoLoad}
                                                onError={handleVideoLoad}
                                            />
                                        )}
                                    </div>
                                </div>
                                
                                <div className="media-info">
                                    <h2 className="media-title">{currentItem.alt}</h2>
                                    <p className="media-counter">
                                        {currentIndex + 1} / {galleryItems.length}
                                    </p>
                                </div>
                            </div>
                            
                            <aside className="thumbnail-sidebar">
                                <div className="thumbnail-container">
                                    {galleryItems.map((item, index) => (
                                        <button
                                            ref={(el) => (thumbnailRefs.current[index] = el)}
                                            key={item.id}
                                            className={`thumbnail-item ${
                                                index === currentIndex ? "active" : ""
                                            }`}
                                            onClick={() => handleThumbnailClick(index)}
                                            aria-label={`View ${item.alt}`}
                                            aria-current={index === currentIndex ? "true" : "false"}
                                        >
                                            <img
                                                src={item.thumb || item.src}
                                                alt={item.alt}
                                                className="thumbnail-image"
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.currentTarget.src =
                                                        "https://placehold.co/300x200/4B5563/FFFFFF?text=Thumb+Not+Found";
                                                    e.currentTarget.onerror = null;
                                                }}
                                            />
                                            {item.type === "video" && (
                                                <div className="thumbnail-video-overlay">
                                                    <PlayIcon />                
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </aside>
                        </div>
                    )}
                </div>
            </div>

            {/* FULLSCREEN OVERLAY */}
            {isFullscreen && currentItem.type === "image" && (
                <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
                    <button 
                        className="fullscreen-close"
                        onClick={handleCloseFullscreen}
                        aria-label="Close fullscreen"
                    >
                        <CloseIcon />
                    </button>

                    <div className="media-container fullscreen" onClick={(e) => e.stopPropagation()}>
                        {isLoading && <Loader />}

                        <button
                            onClick={handlePrev}
                            className="nav-button prev-button"
                            aria-label="Previous item"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={handleNext}
                            className="nav-button next-button"
                            aria-label="Next item"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>

                        <div className={`media-content ${isLoading ? "loading" : "loaded"}`}>
                            <img
                                src={currentItem.src}
                                alt={currentItem.alt}
                                className="media-image"
                                onLoad={handleMediaLoad}
                                onError={handleMediaLoad}
                            />
                        </div>

                        <div className="fullscreen-info">
                            <h2 className="media-title">{currentItem.alt}</h2>
                            <p className="media-counter">
                                {currentIndex + 1} / {galleryItems.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}