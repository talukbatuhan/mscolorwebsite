"use client";

import React from "react";

const ContactMap: React.FC = () => {
  
  // Harita başlığı sadece erişilebilirlik (aria-label) için kullanılabilir, görsel olarak görünmez.
  const mapTitle = "Company Location Map";
  
  // Google Haritalar Embed Kodu
  const googleMapsEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.1515923112698!2d29.075632845432526!3d37.83267708021564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c7158e516f3c7f%3A0xe23ae3a96679efe9!2sMS%20COLOR!5e0!3m2!1str!2str!4v1761813759373!5m2!1str!2str";

  return (
    // Ana Section: Harita bloğunun tamamını kaplamasını sağlar.
    <section className="w-full h-full p-0">
      
      {/* ✨ RESPONSIVE KAPSAYICI (Sabit Yüksekliğe Uyum) ✨
        - w-full: Tam genişlik.
        - h-full: Dışarıdan gelen sabit yüksekliği (Contact sayfasından 500px) tam olarak kaplar.
        - aspect-square sınıfı kaldırıldı.
      */}
      <div className="w-full h-full"> 
        <iframe
          title={mapTitle}
          // width="100%" ve height="100%" ile kapsayıcının tamamı doldurulur.
          width="100%" 
          height="100%" 
          frameBorder="0"
          style={{ border: 0, borderRadius: "8px" }}
          src={googleMapsEmbedSrc}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;