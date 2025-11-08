// app/gallery/GalleryPageClient.jsx

"use client"; 
import { useTranslation } from 'react-i18next'; 
import { useState } from 'react'; // state yönetimi için

// Aynı klasördeki global CSS dosyası:
import './GaleryPage.css'; 

export default function GalleryPageClient() {
    const { t } = useTranslation();
    const pageTitle = t('our_gallery_h1'); 
    
    // Galeri öğeleri: Görsel (image) veya Video (video)
    const galleryItems = [
        { 
            type: 'video', 
            src: 'https://www.youtube.com/embed/mklCV2XU5Fw', 
            thumb: '/images/gallery/video_thumb_1.jpg', 
            alt: 'YouTube Video 1' 
        },
        { 
            type: 'video', 
            src: 'https://www.youtube.com/embed/another_video_id', 
            thumb: '/images/gallery/video_thumb_2.jpg', 
            alt: 'YouTube Video 2' 
        },
        { 
            type: 'video', 
            src: 'https://www.youtube.com/embed/another_video_id', 
            thumb: '/images/gallery/video_thumb_3.jpg', 
            alt: 'YouTube Video 3' 
        },
        { 
            type: 'image', 
            src: '/images/gallery/main_image_1.jpg', 
            thumb: '/images/gallery/thumb_image_1.jpg', 
            alt: 'Galeri Görseli 1' 
        },
        { 
            type: 'image', 
            src: '/images/gallery/main_image_1.jpg', 
            thumb: '/images/gallery/thumb_image_1.jpg', 
            alt: 'Galeri Görseli 2' 
        },
        { 
            type: 'image', 
            src: '/images/gallery/main_image_1.jpg', 
            thumb: '/images/gallery/thumb_image_1.jpg', 
            alt: 'Galeri Görseli 3' 
        },
        { 
            type: 'image', 
            src: '/images/gallery/main_image_1.jpg', 
            thumb: '/images/gallery/thumb_image_1.jpg', 
            alt: 'Galeri Görseli 4' 
        },
        { 
            type: 'image', 
            src: '/images/gallery/main_image_1.jpg', 
            thumb: '/images/gallery/thumb_image_1.jpg', 
            alt: 'Galeri Görseli 5' 
        },
    ];

    // Şu anda gösterilen öğenin indeksini takip etmek için state
    const [currentIndex, setCurrentIndex] = useState(0);

    // Ana içerik olarak gösterilecek öğe
    const currentItem = galleryItems[currentIndex];

    // Scroll butonları için fonksiyonlar
    const scrollThumbs = (direction) => {
        const container = document.getElementById('thumbnail-container');
        if (container) {
            const scrollAmount = container.clientWidth / 2; // Yarım ekran kadar kaydır
            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="mainContainer">
            <div className="contentContainer">
                <h1 className="title">
                    {pageTitle}
                </h1>
                
                {/* Ana Medya Gösterim Alanı */}
                <div className="mainMediaContainer">
                    {currentItem.type === 'image' ? (
                        <img 
                            src={currentItem.src} 
                            alt={currentItem.alt} 
                            className="mainMedia" 
                        />
                    ) : (
                        <iframe
                            className="mainMedia"
                            src={currentItem.src}
                            title={currentItem.alt}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                        ></iframe>
                    )}
                </div>

                {/* Önizleme Alanı */}
                <div className="thumbnailNavigation">
                    <button 
                        className="scrollButton" 
                        onClick={() => scrollThumbs('left')}
                        aria-label="Önceki önizlemeler"
                    >
                        &lt;
                    </button>
                    <div id="thumbnail-container" className="thumbnailContainer">
                        {galleryItems.map((item, index) => (
                            <div 
                                key={index} 
                                // Sınıf adları burada da düzeltildi
                                className={`thumbnailItem ${index === currentIndex ? 'activeThumbnail' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <img 
                                    src={item.thumb} 
                                    alt={item.alt} 
                                    className="thumbnailImage" 
                                />
                                {item.type === 'video' && (
                                    <div className="playIcon">▶</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <button 
                        className="scrollButton" 
                        onClick={() => scrollThumbs('right')}
                        aria-label="Sonraki önizlemeler"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}