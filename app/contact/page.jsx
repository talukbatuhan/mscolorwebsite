import ContactClientSection from './ContactClientSection'; 

export const metadata = {
    // Başlıkta "Denizli İletişim" ve Ar-Ge / Fabrika vurgusu yapıldı.
    title: 'İletişim | Ms Color Denizli Fabrika Adresi ve Destek Hattı',
    
    // Açıklamada Denizli konumu, kurumsal destek ve uzmanlık alanınız (mikser) net bir şekilde belirtildi.
    description: 'Ms Color\'a ulaşın: Denizli merkezli üretim tesisimiz, boya karıştırma makineleri teknik destek ve yedek parça talepleri için uzman ekibimizle iletişime geçin. Kurumsal destek ve Ar-Ge işbirlikleri için buradayız.',
    
    // Anahtar kelimeler iletişim bilgisi arayanlarla, kurumsal işbirliği arayanları hedefliyor.
    keywords: [
        'Ms Color iletişim', 
        'Denizli fabrika adresi', 
        'boya mikseri destek', 
        'kurumsal iletişim', 
        'makine siparişi', 
        'Ar-Ge işbirliği'
    ],
};


export default function ContactPage() {
    return <ContactClientSection />;
}