'use client'; 

import MachineGrid from '@/app/page'; 

// Tailwind CSS sınıfları kaldırıldığı için, görsel stil özelliklerini 
// korumak amacıyla basit bir JavaScript stil nesnesi kullanıyoruz.
const styles = {
    // Ana konteynerin arkaplan rengi ve yüksekliği (bg-[#182d51], min-h-screen, w-full karşılığı)
    mainContainer: {
        backgroundColor: '#182d51', 
        minHeight: '100vh', 
        width: '100%', 
    },
    // İçerik alanı stili (container, mx-auto, px-4, py-12 karşılığı)
    contentContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '48px', // py-12
        paddingBottom: '48px', // py-12
        paddingLeft: '16px', // px-4
        paddingRight: '16px', // px-4
        width: '100%',
    },
    // Başlık stili (text-4xl, font-bold, text-white, mb-6 karşılığı)
    title: {
        fontSize: '2.25rem', // 4xl
        fontWeight: '700', // bold
        color: '#ffffff', // white
        marginBottom: '1.5rem', // mb-6
    },
    // Açıklama stili (text-lg, text-gray-300, mb-8 karşılığı)
    description: {
        fontSize: '1.125rem', // lg
        color: '#d1d5db', // gray-300
        marginBottom: '2rem', // mb-8
    }
};

export default function ProductsPage() {

    const pageTitle = "Ürünlerimiz";
    const pageDescription = "Next.js mimarisine uyarlanmış bu sayfada, mevcut makine modellerimizi keşfedebilirsiniz.";
    
    return (
        // Tailwind sınıfları kaldırıldı ve inline stil uygulandı.
        <div style={styles.mainContainer}>
            
            {/* Başlık ve Açıklama İçin İçerik Alanı (Inline stil uygulandı) */}
            <div style={styles.contentContainer}>
                
                {/* Başlık rengi ve diğer stiller inline uygulandı */}
                <h1 style={styles.title}>
                    {pageTitle}
                </h1>
                
                {/* Açıklama metni rengi ve diğer stiller inline uygulandı */}
                <p style={styles.description}>
                    {pageDescription}
                </p>

                {/* MachineGrid bileşenini çağırıyoruz. Video arkaplanını göstermemek için showHero={false} eklendi. */}
                <MachineGrid showHero={false} /> 
            </div>
        </div>
    );
}
