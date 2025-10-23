// src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Artık Ref'e ihtiyacımız yok!
function ScrollToTop() { 
    const { pathname } = useLocation();

    useEffect(() => {
        // Tarayıcı geri yüklemesini devre dışı bırakıyoruz
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const delay = 50; 

        const scrollToTop = () => {
            // SADECE WINDOW'A KAYDIRMA KOMUTUNU GÖNDERİYORUZ
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant' // Animasyonsuz anında kaydır
            });
            // Güvenlik için, document.documentElement (html) pozisyonunu da sıfırlayalım
            document.documentElement.scrollTop = 0; 
        };
        
        // Gecikmeli çalıştırma
        const timeoutId = setTimeout(scrollToTop, delay);
        
        return () => clearTimeout(timeoutId);

    }, [pathname]); 

    return null; 
}

export default ScrollToTop;