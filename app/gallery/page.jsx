import GalleryPage from './GalleryPage';

// Meta etiketleri, firmanın ana ürün gamı olan karıştırma makinelerine göre güncellendi.
export const metadata = {
    // Başlıkta ana ürün ve üretici kimliği vurgulanıyor.
    title: 'Ms Color Ürünleri - Endüstriyel Boya Karıştırma ve Mikser Makineleri',
    
    // Açıklamada Denizli konumu, karıştırma odağı ve Ar-Ge kalitesi netleştirildi.
    description: 'Denizli merkezli Ms Color\'un yüksek hassasiyetli boya karıştırma (mikser) makinelerini, endüstriyel karıştırıcı sistemlerini ve Ar-Ge çözümlerini inceleyin. Katalog, fiyatlar ve teknik özellikler burada.',
    
    // Anahtar kelimeler, direkt olarak satın alma niyetini yansıtan kelimelerle güncellendi.
    keywords: [
        'boya karıştırma makinesi fiyatları', 
        'endüstriyel mikser sistemleri', 
        'sanayi tipi boya karıştırıcı', 
        'paint shaker makinesi',
        'Denizli boya karıştırma',
        'Ar-Ge boya mikseri'
    ],
};

export default function ProductsPageServerWrapper() {
    return (
        <GalleryPage />
    );
}