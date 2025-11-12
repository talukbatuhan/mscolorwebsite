"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './GalleryPage.css';


// --- DATA ---
const galleryItems = [
    {
        id: 1,
        type: 'video',
        src: 'https://www.youtube.com/embed/aQBjRCPEqmI?si=ZY8oWgtc9PqjaPMy',
        thumb: 'https://img.youtube.com/vi/aQBjRCPEqmI/hqdefault.jpg',
        alt: 'YouTube Video 1 - Project Introduction',
    },
    {
        id: 2,
        type: 'video',
        src: "https://www.youtube.com/embed/qCmGkTqehW4?si=jMpkQVdMdPgzvynm",
        thumb: 'https://img.youtube.com/vi/qCmGkTqehW4/hqdefault.jpg',
        alt: 'YouTube Video 2 - Construction Site Footage',
    },
    {
        id: 3,
        type: 'video',
        src: "https://www.youtube.com/embed/Hd5nXTyaXZg?si=cqoJVqaJqLeZL00l",
        thumb: 'https://img.youtube.com/vi/Hd5nXTyaXZg/hqdefault.jpg',
        alt: 'YouTube Video 3 - Customer Reviews',
    },
    {
        id: 4,
        type: 'image',
        src: '/Gallery/dispenserBimo.jpg',
        thumb: '/Gallery/dispenserBimo.jpg',
        alt: 'Modern Villa Design',
    },
    {
        id: 5,
        type: 'image',
        src: '/Gallery/DispenserPose1.JPG',
        thumb: '/Gallery/DispenserPose1.JPG',
        alt: 'Interior Design Concept',
    },
    {
        id: 6,
        type: 'image',
        src: '/Gallery/DispenserPose2.JPG',
        thumb: '/Gallery/DispenserPose2.JPG',
        alt: 'Construction Site Operations',
    },
    {
        id: 7,
        type: 'image',
        src: '/Gallery/DispenserPose3.png',
        thumb: '/Gallery/DispenserPose3.png',
        alt: 'Completed Project',
    },
    {
        id: 8,
        type: 'image',
        src: '/Gallery/DispenserRender.PNG',
        thumb: '/Gallery/DispenserRender.PNG',
        alt: 'Detail Shots',
    },
    {
        id: 9,
        type: 'image',
        src: '/Gallery/GyroMixerRender.png',
        thumb: '/Gallery/GyroMixerRender.png',
        alt: 'Evening View',
    },
    {
        id: 10,
        type: 'image',
        src: '/Gallery/Machines.png',
        thumb: '/Gallery/Machines.png',
        alt: 'Landscape Integration',
    },
    {
        id: 11,
        type: 'image',
        src: '/Gallery/MasterMixPose1.png',
        thumb: '/Gallery/MasterMixPose1.png',
        alt: 'Interior Design Concept',
    },
    {
        id: 12,
        type: 'image',
        src: '/Gallery/MasterMixPose2.png',
        thumb: '/Gallery/MasterMixPose2.png',
        alt: 'Construction Site Operations',
    },
    {
        id: 13,
        type: 'image',
        src: '/Gallery/MasterMixPose3.png',
        thumb: '/Gallery/MasterMixPose3.png',
        alt: 'Completed Project',
    },
    {
        id: 14,
        type: 'image',
        src: '/Gallery/MasterMixPose4.png',
        thumb: '/Gallery/MasterMixPose4.png',
        alt: 'Detail Shots',
    },
    {
        id: 15,
        type: 'image',
        src: '/Gallery/MasterMixPose5.png',
        thumb: '/Gallery/MasterMixPose5.png',
        alt: 'Evening View',
    },
    {
        id: 16,
        type: 'image',
        src: '/Gallery/MasterMixPose6.png',
        thumb: '/Gallery/MasterMixPose6.png',
        alt: 'Landscape Integration',
    },
    {
        id: 17,
        type: 'image',
        src: '/Gallery/MasterMixReel1.png',
        thumb: '/Gallery/MasterMixReel1.png',
        alt: 'Completed Project',
    },
    {
        id: 18,
        type: 'image',
        src: '/Gallery/MasterMixRender.PNG',
        thumb: '/Gallery/MasterMixRender.PNG',
        alt: 'Detail Shots',
    },
    {
        id: 19,
        type: 'image',
        src: '/Gallery/Seminer.png',
        thumb: '/Gallery/Seminer.png',
        alt: 'Evening View',
    },
    {
        id: 20,
        type: 'image',
        src: '/Gallery/GyroMixPose1.png',
        thumb: '/Gallery/GyroMixPose1.png',
        alt: 'Landscape Integration',
    },
];


// Reusable Play Icon component
const PlayIcon = () => (
    <svg
        className="play-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M8 5v14l11-7z"/>
    </svg>
);

// Reusable Loader component
const Loader = () => (
    <div className="loader">
        <div className="spinner"></div>
    </div>
);

export default function GalleryApp() {
    const [viewMode, setViewMode] = useState('grid');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const thumbnailRefs = useRef([]);
    const currentItem = galleryItems[currentIndex];

    const { t, i18n } = useTranslation(); 

    useEffect(() => {
        if (viewMode === 'detail') {
            const activeThumb = thumbnailRefs.current[currentIndex];
            if (activeThumb) {
                activeThumb.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }
        }
    }, [currentIndex, viewMode]);

    // Handlers
    const handleThumbnailClick = useCallback((index) => {
        setCurrentIndex(index);
        setIsLoading(true);
        setViewMode('detail');
    }, []);

    const handleMediaLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    // Give a small delay for iframe to ensure it is rendered and to show the loading state briefly
    const handleVideoLoad = useCallback(() => {
        setTimeout(() => setIsLoading(false), 500);
    }, []);

    const handleBackToGrid = useCallback(() => {
        setViewMode('grid');
    }, []);
    
    // Media Navigation
    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
        setIsLoading(true);
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + galleryItems.length) % galleryItems.length
        );
        setIsLoading(true);
    }, []);

    return (
        <div className="gallery-container">
            <div className="gallery-wrapper">
                {/* Header Section */}
                <header className="gallery-header">
                    <h1 className={`gallery-title ${viewMode === 'detail' ? '' : 'gallery-title-centered'}`}>
                        {t('gallery_title_h1')}
                    </h1>
                    {viewMode === 'detail' && (
                        <button
                            onClick={handleBackToGrid}
                            className="gallery-back-button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            {t('gallery_back_button')}
                        </button>
                    )}
                </header>
                
                {/* Conditional Rendering based on viewMode */}
                {viewMode === 'grid' ? (
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
                                        e.currentTarget.src = 'https://placehold.co/300x200/4B5563/FFFFFF?text=Media+Not+Found';
                                        e.currentTarget.onerror = null;
                                    }}
                                />
                                {item.type === 'video' && (
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
                        {/* Main Media Area */}
                        <div className="main-media-area">
                            <div className="media-container">
                                {isLoading && <Loader />}
                                
                                {/* Prev Button */}
                                <button
                                    onClick={handlePrev}
                                    className="nav-button prev-button"
                                    aria-label="Previous item"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                
                                {/* Next Button */}
                                <button
                                    onClick={handleNext}
                                    className="nav-button next-button"
                                    aria-label="Next item"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                <div className={`media-content ${isLoading ? 'loading' : 'loaded'}`}>
                                    {currentItem.type === 'image' ? (
                                        <img
                                            src={currentItem.src}
                                            alt={currentItem.alt}
                                            className="media-image"
                                            onLoad={handleMediaLoad}
                                            onError={handleMediaLoad}
                                        />
                                    ) : (
                                        <iframe
                                            // Key added to force re-render/reload when video changes, ensuring `onLoad` fires consistently
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
                        </div>

                        {/* Vertical Thumbnail Sidebar */}
                        <aside className="thumbnail-sidebar">
                            <div className="thumbnail-container hide-scrollbar">
                                {galleryItems.map((item, index) => (
                                    <button
                                        ref={el => thumbnailRefs.current[index] = el}
                                        key={item.id}
                                        className={`thumbnail-item ${index === currentIndex ? 'active' : ''}`}
                                        onClick={() => handleThumbnailClick(index)}
                                        aria-label={`View ${item.alt}`}
                                        aria-current={index === currentIndex ? 'true' : 'false'}
                                    >
                                        <img
                                            src={item.thumb || item.src}
                                            alt={item.alt}
                                            className="thumbnail-image"
                                            loading="lazy"
                                            onError={(e) => {
                                                // Fallback for missing thumbnails
                                                e.currentTarget.src = 'https://placehold.co/300x200/4B5563/FFFFFF?text=Thumb+Not+Found';
                                                e.currentTarget.onerror = null;
                                            }}
                                        />
                                        {item.type === 'video' && (
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
    );
}