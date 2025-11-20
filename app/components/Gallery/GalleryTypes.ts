// components/Gallery/GalleryTypes.ts

export interface GalleryItem {
    id: number;
    src: string; 
    thumb?: string; 
    alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [

    {
        id: 1,
        src: "/Gallery/machines.jpeg",
        alt: "Makineler Afiş",
    },
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
        src: "/Gallery/MasterMixBrochureEN1.png",
        alt: "GyroMix Afiş",
    },
    {
        id: 7,
        src: "/Gallery/MasterMixBrochureEN.png",
        alt: "GyroMix Özellikleri",
    },
    {
        id: 8,
        src: "/Gallery/GyromixBrochureEN1.jpg",
        alt: "MasterTint Afiş",
    },
    {
        id: 9,
        src: "/Gallery/GyromixBrochureEN.jpg",
        alt: "MasterTint Özellikleri",
    }
];


export const GALLERY_TEXTS = {
    backButton: "Geri",
    mediaNotFound: "Medya Bulunamadı",
};