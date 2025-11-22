// components/Gallery/GalleryTypes.ts

export interface GalleryItem {
    id: number;
    // Görsel yolu. Artık isteğe bağlı (optional) yaptık, çünkü video öğelerinin src'si olmayabilir.
    src?: string; 
    thumb?: string; 
    alt: string;
    
    // YENİ ALAN: YouTube Embed URL'si
    youtubeEmbedUrl?: string; 
}

export const GALLERY_ITEMS: GalleryItem[] = [

    // Mevcut Görsel Öğeleri
    {
        id: 1,
        src: "/Gallery/machines.jpeg",
        alt: "Makineler Afiş",
    },
    // ... Diğer görsel öğeleri ...
    {
        id: 2,
        src: "/Gallery/GyroMix_1.png",
        alt: "GyroMix Afiş",
    },
    {
        id: 3,
        src: "/Gallery/GyroMix_2.png",
        alt: "GyroMix Özellikleri",
    },
    {
        id: 4,
        src: "/Gallery/MasterTint_2.png",
        alt: "MasterTint Afiş",
    },
    {
        id: 5,
        src: "/Gallery/MasterTint_1.png",
        alt: "MasterTint Özellikleri",
    },
    {
        id: 6,
        src: "/Gallery/MastermixBrochureEN1.png",
        alt: "MasterMix Broşür Sayfa 1",
    },
    {
        id: 7,
        src: "/Gallery/MastermixBrochureEN.png",
        alt: "MasterMix Broşür Sayfa 2",
    },
    {
        id: 8,
        src: "/Gallery/GyromixBrochureEN1.jpg",
        alt: "GyroMix Broşür Sayfa 1",
    },
    {
        id: 9,
        src: "/Gallery/GyromixBrochureEN.jpg",
        alt: "GyroMix Broşür Sayfa 2",
    },

    // YENİ YOUTUBE VİDEO ÖRNEĞİ
    {
        id: 10,
        // **ÖNEMLİ:** YouTube video ID'sini (örn: `xTqhdtE2XaI`) kendi videonuzla değiştirin.
        youtubeEmbedUrl: "https://www.youtube.com/embed/JQHMy7R12M4",
        alt: "Ürün Tanıtım Videosu",
        // Önizleme görseli (thumbnail) için YouTube'un standart URL formatını kullanıyoruz.
        thumb: "https://img.youtube.com/vi/JQHMy7R12M4/hqdefault.jpg"
    },
    {
        id: 11,
        // **ÖNEMLİ:** YouTube video ID'sini (örn: `xTqhdtE2XaI`) kendi videonuzla değiştirin.
        youtubeEmbedUrl: "https://www.youtube.com/embed/AgEgmdoYoRo",
        alt: "Ürün Tanıtım Videosu",
        // Önizleme görseli (thumbnail) için YouTube'un standart URL formatını kullanıyoruz.
        thumb: "https://img.youtube.com/vi/AgEgmdoYoRo/hqdefault.jpg"
    },
];


export const GALLERY_TEXTS = {
    backButton: "Geri Kapat",
    mediaNotFound: "Medya Bulunamadı",
    prev: "Önceki",
    next: "Sonraki",
    fullscreenButton: "Tam Ekran Yap",
};