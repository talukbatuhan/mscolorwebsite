// components/Gallery/GalleryTypes.ts

// Medya Veri Yapısı Tanımı
export interface GalleryItem {
    id: number;
    type: "video" | "image";
    src: string; // Büyük medya kaynağı (resim veya iframe video linki)
    thumb: string; // Küçük resim kaynağı
    alt: string;
}

// Tüm Galeri Verisi
export const GALLERY_ITEMS: GalleryItem[] = [
    // Not: Video SRC'leri için geçerli bir YouTube embed URL'si kullanmalısınız.
    // Şimdilik hepsi JPG olarak kalmıştır.
    /*{
        id: 1,
        type: "video",
        src: "/Gallery/DispenserPose1.JPG",
        thumb: "/Gallery/DispenserPose1.JPG",
        alt: "MS Color Reklam",
    },
    {
        id: 2,
        type: "video",
        src: "/Gallery/DispenserPose1.JPG",
        thumb: "/Gallery/DispenserPose1.JPG",
        alt: "GyroMix Rehber",
    },
    {
        id: 3,
        type: "video",
        src: "/Gallery/DispenserPose1.JPG",
        thumb: "/Gallery/DispenserPose1.JPG",
        alt: "YouTube Video 2",
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
    },*/
    {
        id: 6,
        type: "image",
        src: "/Gallery/machines.jpeg",
        thumb: "/Gallery/machines.jpeg",
        alt: "Makineler Afiş",
    },
    {
        id: 7,
        type: "image",
        src: "/Gallery/GyroMix_1.PNG",
        thumb: "/Gallery/GyroMix_1.PNG",
        alt: "GyroMix Afiş",
    },
    {
        id: 8,
        type: "image",
        src: "/Gallery/GyroMix_2.png",
        thumb: "/Gallery/GyroMix_2.png",
        alt: "GyroMix Özellikleri",
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
    },/*
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
        src: "/Gallery/MasterMixRender.png",
        thumb: "/Gallery/MasterMixRender.png",
        alt: "MasterMix Render",
    },
    {
        id: 17,
        type: "image",
        src: "/Gallery/MasterMixPose1.png",
        thumb: "/Gallery/MasterMixPose1.png",
        alt: "MasterMix Pose 1",
    },
    {
        id: 18,
        type: "image",
        src: "/Gallery/MasterMixPose2.png",
        thumb: "/Gallery/MasterMixPose2.png",
        alt: "MasterMix Pose 2",
    },
    {
        id: 19,
        type: "image",
        src: "/Gallery/MasterMixPose3.png",
        thumb: "/Gallery/MasterMixPose3.png",
        alt: "MasterMix Pose 3",
    },
    {
        id: 20,
        type: "image",
        src: "/Gallery/MasterMixPose4.png",
        thumb: "/Gallery/MasterMixPose4.png",
        alt: "MasterMix Pose 4",
    },
    {
        id: 21,
        type: "image",
        src: "/Gallery/MasterMixPose5.png",
        thumb: "/Gallery/MasterMixPose5.png",
        alt: "MasterMix Pose 5",
    },
    {
        id: 22,
        type: "image",
        src: "/Gallery/MasterMixPose6.png",
        thumb: "/Gallery/MasterMixPose6.png",
        alt: "MasterMix Pose 6",
    },
    {
        id: 23,
        type: "image",
        src: "/Gallery/mscolor5.jpg",
        thumb: "/Gallery/mscolor5.jpg",
        alt: "Fabrika Akşam",
    },
    {
        id: 24,
        type: "image",
        src: "/Gallery/mscolor4.jpg",
        thumb: "/Gallery/mscolor4.jpg",
        alt: "Fabrika Dışarıdan Görüntü",
    },
    {
        id: 25,
        type: "image",
        src: "/Gallery/mscolor2.jpg",
        thumb: "/Gallery/mscolor2.jpg",
        alt: "Fabrika Dışarıdan Görüntü",
    }, */
];

// Sabit Metinler (i18n yerine)
export const GALLERY_TEXTS = {
    backButton: "Geri",
    mediaNotFound: "Medya Bulunamadı",
};