// components/Gallery/GalleryTypes.ts

export interface GalleryItem {
    id: number;
    type: "video" | "image";
    src: string; 
    thumb?: string; 
    alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [

    {
        id: 1,
        type: "image",
        src: "/Gallery/machines.jpeg",
        thumb: "/Gallery/machines.jpeg",
        alt: "Makineler Afiş",
    },
    {
        id: 2,
        type: "image",
        src: "/Gallery/GyroMix_1.PNG",
        thumb: "/Gallery/GyroMix_1.PNG",
        alt: "GyroMix Afiş",
    },
    {
        id: 3,
        type: "image",
        src: "/Gallery/GyroMix_2.png",
        thumb: "/Gallery/GyroMix_2.png",
        alt: "GyroMix Özellikleri",
    },
    {
        id: 4,
        type: "image",
        src: "/Gallery/MasterTint_2.png",
        thumb: "/Gallery/MasterTint_2.png",
        alt: "MasterTint Afiş",
    },
    {
        id: 5,
        type: "image",
        src: "/Gallery/MasterTint_1.png",
        thumb: "/Gallery/MasterTint_1.png",
        alt: "MasterTint Özellikleri",
    },
    {
        id: 6,
        type: "image",
        src: "/Gallery/MasterMixBrochureEN1.PNG",
        thumb: "/Gallery/MasterMixBrochureEN1.PNG",
        alt: "GyroMix Afiş",
    },
    {
        id: 7,
        type: "image",
        src: "/Gallery/MasterMixBrochureEN.PNG",
        thumb: "/Gallery/MasterMixBrochureEN.PNG",
        alt: "GyroMix Özellikleri",
    },
    {
        id: 8,
        type: "image",
        src: "/Gallery/GyromixBrochureEN1.jpg",
        thumb: "/Gallery/GyromixBrochureEN1.jpg",
        alt: "MasterTint Afiş",
    },
    {
        id: 9,
        type: "image",
        src: "/Gallery/GyromixBrochureEN.jpg",
        thumb: "/Gallery/GyromixBrochureEN.jpg",
        alt: "MasterTint Özellikleri",
    }
];


export const GALLERY_TEXTS = {
    backButton: "Geri",
    mediaNotFound: "Medya Bulunamadı",
};