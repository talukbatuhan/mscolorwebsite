// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Kalıcı dil seçimi için gerekli yeni import'lar
import LanguageDetector from 'i18next-browser-languagedetector'; 
import Backend from 'i18next-localstorage-backend'; 


const resources = {
  tr: {
    translation: {
      // ===================================
      // GENEL (HOMEPAGE/HEADER) ÇEVİRİLERİ
      // ===================================
      "homepage_title": "Geleceğin Boya Teknolojilerini Bugün Keşfedin",
      "homepage_punchline": "Sanayide En Yüksek Verimlilik, Kusursuz Renk Kalitesi.",
      "button_explore": "Çözümlerimiz İçin Tıklayın", 
      "section_machines": "Makine Kartları Bölümü", 
      "nav_home": "ANASAYFA",
      "nav_products": "ÜRÜNLER",
      "nav_about": "HAKKIMIZDA",
      "nav_contact": "İLETİŞİM",

      // ===================================
      // MACHINE GRID ÇEVİRİLERİ (MachineGrid.jsx)
      // ===================================
      
      "tech_specs_title": "TEKNİK ÖZELLİKLER",
      "m1_key_f_1": "KROM KAPLI VE İNDÜKSİYONLU VİDALI MİL SAYESİNDE UZUN ÖMÜRLÜ KULLANIM",
      "m1_key_f_2": "ELEKTRONİK KAPI KİLİDİ VE DOKUNMATİK SENSÖR SAYESİNDE TAM GÜVENLİK",
      "m1_key_f_3": "ÇİFT DOĞRULAMALI ALGORİTMA İLE HER KOŞULDA DOĞRU SIKIŞTIRMA",
      "m1_key_f_4": "YALNIZCA 8 CİVATA İLE TÜM KAPAKLAR AÇILIR",
      "m1_key_f_5": "2.8\" RENKLİ LCD EKRAN",
      "m1_key_f_6": "30 - 300 SANİYE ESNEK ÇALIŞMA ARALIĞI",
      "m1_key_f_7": "%100 YERLİ ÜRETİM",
      "m2_main_feature": "6 Eksenli Milimetrik Hassasiyet", 
      "m2_sub_feature": "Kompleks Yüzeylerde Kusursuz Uygulama Garantisi.",
      "m2_key_f_1": "KOVA BOYUTUNA GÖRE OTOMATİK AYARLANAN DÖNÜŞ HIZI",
      "m2_key_f_2": "KROM KAPLI VE İNDÜKSİYONLU VİDALI MİL SAYESİNDE UZUN ÖMÜRLÜ KULLANIM",
      "m2_key_f_3": "ÇİFT DOĞRULAMALI ALGORİTMA İLE HER KOŞULDA DOĞRU SIKIŞTIRMA",
      "m2_key_f_4": "HER İKİ EKSENDE HER İKİ YÖNE DÖNÜŞ",
      "m2_key_f_5": "2.8\" RENKLİ LCD EKRAN",
      "m2_key_f_6": "0.5 - 8 DK ESNEK ÇALIŞMA ARALIĞI",
      "m2_key_f_7": "%100 YERLİ ÜRETİM",
      "m3_main_feature": "Anında Kuruma, Maksimum Verimlilik", 
      "m3_sub_feature": "Yeni Nesil LED UV Teknolojisi ile Enerji Tasarrufu.",
      "m3_key_f_1": "YÜKSEK HASSASİYETLİ DOZAJ LİSTESİ",
      "m3_key_f_2": "TAM OTOMATİK RENK VE YOĞUNLUK KONTROLÜ",
      "m3_key_f_3": "KOLAY BAKIM VE MODÜLER POMPA TASARIMI",
      "m3_key_f_4": "OPSİYONEL 2.8\" RENKLİ LCD EKRAN",
      "m3_key_f_5": "KOLAY KALİBRASYON İÇİN ENTEGRE YAZILIM",
      "m3_key_f_6": "HIZLI VE SESSİZ ÇALIŞMA",
      "m3_key_f_7": "AKILLI YAZILIM İLE ATIK YÖNETİMİ",
      "spec_speed": "Hız",
      "spec_eccentric": "Eksantrik Mesafesi", 
      "spec_screen": "Ekran",
      "spec_compression": "Sıkıştırma",
      "spec_engine": "Motor",
      "spec_max_bucket_height": "Max Kova Yüksekliği",
      "spec_max_bucket_diameter": "Max Kova Çapı",
      "spec_mac_bucket_weight": "Max Kova Ağırlığı",
      "spec_power": "Güç/Besleme",
      "spec_dimensions": "Boyutlar (WxDxH)",
      "spec_timer": "Zamanlayıcı",
      "spec_canister_count": "Kutu / Hazne Sayısı", 
      "spec_precision": "Hassasiyet",
      "spec_canister_material": "Kutu / Hazne Malzemesi",
      "spec_mixing_speed": "Karıştırma Hızı",
      "spec_canister_volume": "Kutu / Hazne Hacmi",
      "spec_pump_volume": "Pompa Hacmi",
      "spec_elevator": "Asansör",

      // ===================================
      // PRODUCTSPAGE.JSX ÇEVİRİLERİ
      // ===================================
      "our_products_h1": "ÜRÜNLERİMİZ",
      
      // ===================================
      // ABOUTPAGE.JSX ÇEVİRİLERİ 
      // ===================================
      "about_title": "{{companyName}} Hakkında",
      "about_lead_text_1": "{{foundingYear}} yılından bu yana boya ve otomasyon sektöründe ezber bozan çözümler sunarak endüstriye taze bir bakış açısı getiriyoruz.",
      "about_lead_text_2": "Temel misyonumuz, ileri teknolojiyi kusursuz güvenilirlikle birleştirmek ve bu sayede müşterilerimizin üretim hatlarında maksimum verimlilik sağlamaktır.",
      "about_lead_text_3": "Yerli mühendislik gücümüzle geliştirdiğimiz her makine, hassasiyet ve dayanıklılık taahhüdümüzün somut bir kanıtıdır.",
      "about_lead_text_4": "Biz, sadece makine üretmekle kalmıyor; müşterilerimizin gelecekteki rekabet gücüne yatırım yapıyoruz.",
      
      "about_section_who_are_we_h2": "Biz Kimiz?",
      "about_story_p1": "{{companyName}} olarak, yerli üretim anlayışıyla geliştirdiğimiz makinelerimizi Türkiye ve dünyadaki boya üreticilerinin hizmetine sunuyoruz. Amacımız, profesyonel hizmet anlayışımız ve kaliteli ürünler ile müşterilerimize değer katan çözümler sunmaktır.",
      "about_story_p2": "Ar-Ge'ye verdiğimiz önemle güncel teknolojiyi takip ediyor, yenilikçi çözümler sunuyor ve ürünlerimizi sürekli olarak daha iyiye ulaştırmak için çalışıyoruz.",
      
      "about_vision_h3": "Vizyonumuz",
      "about_vision_p": "Boyama ve kimya otomasyonu alanında global ölçekte lider bir çözüm ortağı olmaktır. Sektördeki yenilikleri sadece takip etmekle kalmayıp, bu yeniliklere yön veren, güvenilir ve öncü bir marka olmayı hedefliyoruz. Geliştirdiğimiz her ürün ve sunduğumuz her hizmet ile müşterilerimizin üretim süreçlerinde verimliliği ve hassasiyeti en üst düzeye çıkarmayı amaçlıyoruz",

      "about_mission_h3": "Misyonumuz",
      "about_mission_p": "Yerli üretime katkı sağlayarak dünya standartlarında yüksek kaliteli makine üretimini sağlamaktır. Enerji ve gayretimizi, ürettiğimiz yerli makinelerle ülkemizi dünyada en güzel şekilde temsil etmek",

      "about_values_h3": "Değerlerimiz",
      "value_precision": "Hassasiyet ve Mükemmeliyet",
      "value_continuous_improvement": "Sürekli İyileştirme ve Geliştirme (Kaizen)",
      "value_solution_partner": "Çözüm Ortaklığı ve Güven",
      "value_sustainable_tech": "Sürdürülebilir Teknoloji",
      "value_domestic_power": "Yerli Güç ve Global Etki",
      "value_innovation_agility": "İnovasyon Çevikliği",
      "value_accessibility": "Erişilebilirlik ve Destek",

      "founder_message_h2": "Kurucu Mesajı",
      "founder_message_p": "\"Başladığımız günden bu yana inancımız hiç değişmedi: Yüksek kalite ve yerli üretim birleştiğinde, sonuç her zaman uluslararası standartların ötesindedir. Gelecek, otomasyon ve hassasiyetle şekillenecek. Biz, {{companyName}} olarak bu geleceğe yön vermeye kararlıyız.\"",
      "founder_title": "Kurucu & CEO",
      // ===================================
      // CONTACTFORM.JSX ÇEVİRİLERİ (Yeni Eklendi)
      // ===================================
      "form_label_name": "Adınız Soyadınız",
      "form_placeholder_name": "Adınız Soyadınız",
      "form_label_email": "E-posta Adresiniz",
      "form_placeholder_email": "E-posta Adresiniz",
      "form_label_phone": "Telefon Numaranız",
      "form_placeholder_phone": "Telefon Numaranız (Opsiyonel)",
      "form_label_message": "Mesajınız",
      "form_placeholder_message": "Mesajınız...",
      "form_button_submit": "Mesajı Gönder",
      "form_success_alert": "Mesajınız başarıyla iletildi!",

      // ===================================
      // FOOTER.JSX ÇEVİRİLERİ (Yeni Eklendi)
      // ===================================
      "footer_logo_alt": "Ms Color Logo",
      "footer_slogan": "Endüstriyel Boyama Sistemlerinde Güven ve Teknoloji.",
      "footer_copyright_text": "Tüm hakları saklıdır.",
      "footer_links_h4": "Hızlı Bağlantılar",
      "footer_contact_h4": "Bize Ulaşın",
      "footer_address_line1": "Bozburun Mahallesi Ahmet Nazif Zorlu Sanayi Sitesi",
      "footer_address_line2": "7153 Sokak No: 15 Merkezefendi/DENİZLİ",
      "footer_phone_number": "+90 546 437 62 18",
      "footer_email_address": "malik@orendaarge.com",

      "contact_us_title": "İletişim Formu"
    }
  },
  en: {
    translation: {
      // ===================================
      // GENEL (HOMEPAGE/HEADER) ÇEVİRİLERİ
      // ===================================
      "homepage_title": "Discover the Future of Paint Technologies Today",
      "homepage_punchline": "Highest Efficiency, Flawless Color Quality in Industry.",
      "button_explore": "Click for Our Solutions",
      "section_machines": "Machine Cards Section",
      "nav_home": "HOME",
      "nav_products": "PRODUCTS",
      "nav_about": "ABOUT US",
      "nav_contact": "CONTACT",

      // ===================================
      // MACHINE GRID ÇEVİRİLERİ (MachineGrid.jsx)
      // ===================================
      
      "tech_specs_title": "TECHNICAL SPECIFICATIONS",
      "m1_main_feature": "High Volume Automation",
      "m1_key_f_2": "FULL SAFETY THANKS TO ELECTRONIC DOOR LOCK AND TOUCH SENSOR",
      "m1_key_f_3": "ACCURATE COMPRESSION IN ALL CONDITIONS WITH DOUBLE-VERIFICATION ALGORITHM",
      "m1_key_f_4": "ALL COVERS OPEN WITH ONLY 8 BOLTS",
      "m1_key_f_5": "2.8\" COLOR LCD SCREEN",
      "m1_key_f_6": "FLEXIBLE OPERATING RANGE OF 30 - 300 SECONDS",
      "m1_key_f_7": "MADE IN TÜRKİYE",
      "m2_main_feature": "6-Axis Millimetric Precision",
      "m2_sub_feature": "Guaranteed Flawless Application on Complex Surfaces.",
      "m2_key_f_1": "AUTOMATICALLY ADJUSTED ROTATION SPEED ACCORDING TO BUCKET SIZE",
      "m2_key_f_2": "LONG LASTING USE THANKS TO CHROME-PLATED AND INDUCTION SCREW SHAFT",
      "m2_key_f_3": "ACCURATE COMPRESSION IN ALL CONDITIONS WITH DOUBLE-VERIFICATION ALGORITHM",
      "m2_key_f_4": "ROTATION IN BOTH DIRECTIONS ON BOTH AXES",
      "m2_key_f_5": "2.8\" COLOR LCD SCREEN",
      "m2_key_f_6": "FLEXIBLE OPERATING RANGE OF 0.5 - 8 MINUTES",
      "m2_key_f_7": "MADE IN TÜRKİYE",
      "m3_main_feature": "Instant Curing, Maximum Efficiency",
      "m3_sub_feature": "Energy Saving with Next-Generation LED UV Technology.",
      "m3_key_f_1": "HIGH PRECISION DOSAGE LIST",
      "m3_key_f_2": "FULL AUTOMATIC COLOR AND DENSITY CONTROL",
      "m3_key_f_3": "EASY MAINTENANCE AND MODULAR PUMP DESIGN",
      "m3_key_f_4": "OPTIONAL 2.8\" COLOR LCD SCREEN",
      "m3_key_f_5": "INTEGRATED SOFTWARE FOR EASY CALIBRATION",
      "m3_key_f_6": "FAST AND QUIET OPERATION",
      "m3_key_f_7": "WASTE MANAGEMENT WITH SMART SOFTWARE",
      "spec_speed": "Speed",
      "spec_eccentric": "Eccentric Distance", 
      "spec_screen": "Screen",
      "spec_compression": "Compression",
      "spec_engine": "Engine",
      "spec_max_bucket_height": "Max Bucket Height",
      "spec_max_bucket_diameter": "Max Bucket Diameter",
      "spec_mac_bucket_weight": "Max Bucket Weight",
      "spec_power": "Power/Supply",
      "spec_dimensions": "Dimensions (WxDxH)",
      "spec_timer": "Timer",
      "spec_canister_count": "Canister / Hopper Count", 
      "spec_precision": "Precision",
      "spec_canister_material": "Canister / Hopper Material",
      "spec_mixing_speed": "Mixing Speed",
      "spec_canister_volume": "Canister / Hopper Volume",
      "spec_pump_volume": "Pump Volume",
      "spec_elevator": "Elevator",

      // ===================================
      // PRODUCTSPAGE.JSX ÇEVİRİLERİ
      // ===================================
      "our_products_h1": "OUR PRODUCTS",
      
      // ===================================
      // ABOUTPAGE.JSX ÇEVİRİLERİ 
      // ===================================
      "about_title": "About {{companyName}}",
      "about_lead_text_1": "Since {{foundingYear}}, we have been providing groundbreaking solutions in the paint and automation sector, bringing a fresh perspective to the industry.",
      "about_lead_text_2": "Our core mission is to combine advanced technology with impeccable reliability to ensure maximum efficiency in our customers' production lines.",
      "about_lead_text_3": "Every machine we develop with our domestic engineering power is a tangible proof of our commitment to precision and durability.",
      "about_lead_text_4": "We do not just produce machines; we invest in the future competitiveness of our customers.",
      
      "about_section_who_are_we_h2": "Who We Are?",
      "about_story_p1": "As {{companyName}}, we offer our domestically produced machines to paint manufacturers in Türkiye and around the world. Our goal is to provide value-added solutions to our customers with our professional service approach and quality products.",
      "about_story_p2": "With the importance we attach to R&D, we follow current technology, offer innovative solutions, and constantly strive to improve our products.",

      "about_vision_h3": "Our Vision",
      "about_vision_p": "To be a globally leading solution partner in the field of painting and chemical automation. We aim not only to follow innovations in the sector but also to be a reliable and pioneering brand that steers these innovations. With every product we develop and every service we offer, we aim to maximize efficiency and precision in our customers' production processes.",

      "about_mission_h3": "Our Mission",
      "about_mission_p": "To contribute to domestic production by ensuring the manufacturing of high-quality machines at world standards. To represent our country globally in the best possible way with the local machines we produce.",

      "about_values_h3": "Our Values",
      "value_precision": "Precision and Excellence",
      "value_continuous_improvement": "Continuous Improvement (Kaizen)",
      "value_solution_partner": "Solution Partnership and Trust",
      "value_sustainable_tech": "Sustainable Technology",
      "value_domestic_power": "Domestic Power and Global Impact",
      "value_innovation_agility": "Innovation Agility",
      "value_accessibility": "Accessibility and Support",

      "founder_message_h2": "Founder's Message",
      "founder_message_p": "\"Since the day we started, our belief has never changed: when high quality and domestic production combine, the result is always beyond international standards. The future will be shaped by automation and precision. We, as {{companyName}}, are determined to guide this future.\"",
      "founder_title": "Founder & CEO",

      // ===================================
      // CONTACTFORM.JSX ÇEVİRİLERİ (Yeni Eklendi)
      // ===================================
      "form_label_name": "Name and Surname",
      "form_placeholder_name": "Your Name and Surname",
      "form_label_email": "Email Address",
      "form_placeholder_email": "Email Address",
      "form_label_phone": " Phone Number",
      "form_placeholder_phone": "Phone Number (Optional)",
      "form_label_message": "Your Message",
      "form_placeholder_message": "Your Message...",
      "form_button_submit": "Send Message",
      "form_success_alert": "Your message has been successfully sent!",

      // ===================================
      // FOOTER.JSX ÇEVİRİLERİ (Yeni Eklendi)
      // ===================================
      "footer_logo_alt": "Ms Color Logo",
      "footer_slogan": "Trust and Technology in Industrial Painting Systems.",
      "footer_copyright_text": "All rights reserved.",
      "footer_links_h4": "Quick Links",
      "footer_contact_h4": "Contact Us",
      "footer_address_line1": "Bozburun Mahallesi Ahmet Nazif Zorlu Sanayi Sitesi",
      "footer_address_line2": "7153 Sokak No: 15 Merkezefendi/DENİZLİ",
      "footer_phone_number": "+90 546 437 62 18",
      "footer_email_address": "malik@orendaarge.com",

      "contact_us_title": "Contact Us"
    }
  }
};

i18n
  // 1. Local Storage ve diğer tarayıcı mekanizmalarından dili otomatik algılar.
  .use(Backend) 
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources,
    
    // Dil algılama ayarları eklendi
    detection: {
      // Dilin Local Storage'dan okunmasını ve Local Storage'a yazılmasını sağlar
      order: ['localStorage', 'navigator'], 
      lookupLocalStorage: 'i18nextLng', // Local Storage'da kullanılacak anahtar adı
      caches: ['localStorage'], // Dili değiştirdikten sonra nereye kaydedileceği
    },

    lng: 'tr', // Eğer Local Storage'da dil yoksa varsayılan dil
    fallbackLng: 'tr',
    
    // Dil dosyalarını sunucudan/dosyadan yüklemediğimiz için backend ayarlarını temizledik

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;