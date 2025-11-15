import AboutPageClient from './AboutPageClient'; 
import { headers } from 'next/headers'; 

const companyName = "MS Color";
const founderName = "Malik Ekicim";
const foundingYear = 2020;

export const metadata = {
    // Başlıkta Ar-Ge ve inovasyon vurgusu yapıldı.
    title: `${companyName} - Boya Karıştırma Teknolojileri Ar-Ge ve Kurumsal Kimlik`,
    
    // Açıklamada Denizli, Ar-Ge uzmanlığı ve ürün odak noktası (mikserler) detaylandırıldı.
    description: `Denizli merkezli ${companyName}, ${foundingYear} yılından bu yana boya karıştırma makineleri alanında Ar-Ge ve inovasyon odaklı çözümler geliştirmektedir. Kurumsal vizyonumuzu ve teknik uzmanlığımızı keşfedin.`,
    
    // Anahtar kelimeler, kurumsal alıcıların ve iş ortaklarının arayacağı terimlerle zenginleştirildi.
    keywords: [
        'Ms Color kurumsal', 
        'Denizli boya makinesi üreticisi', 
        'Ar-Ge firması', 
        'boya mikseri inovasyon', 
        'vizyon misyon değerler', 
        'endüstriyel karıştırma uzmanı',
        'şirket bilgileri'
    ],
};

export default function AboutPageServer() {
    return (
        <>
            <AboutPageClient />
        </>
    );
}