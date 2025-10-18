import React, { useState } from 'react';
import './MachineGrid.css';

// YENİ AKORDİYON ITEM BİLEŞENİ
const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
    <div className="accordion-header" onClick={onToggle}>
      <h4 className="accordion-title">{title}</h4>
      <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
    </div>
    {isOpen && (
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    )}
  </div>
);


// MachineDetails Bileşeni (Akordiyonu Yönetir)
const MachineDetails = ({ details, machineDescription }) => {
    const [openIndex, setOpenIndex] = useState(0); 
    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        { title: 'Makine Hakkında', content: machineDescription },
        ...details.map(item => ({ title: item.feature, content: item.value })),
    ];

    return (
        <div className="machine-details-accordion">
            {accordionData.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => toggleItem(index)}
                />
            ))}
        </div>
    );
};


// MAKİNE VERİLERİ (Resim yolları / ile başlıyor)
const machines = [
  { id: 1, name: 'Yüksek Hızlı Otomatik Boyama Sistemi', description: 'Büyük ölçekli üretimler için ideal, yüksek verimli, hızlı ve tam otomasyonlu boyama çözümüdür.', image: '/machine1.jpg', details: [{ feature: 'Kapasite', value: '1000m²/saat' }, { feature: 'Kontrol Sistemi', value: 'Siemens PLC ve 15" Dokunmatik Ekran' }, { feature: 'Tünel Uzunluğu', value: '25 metre modüler yapı' }] },
  { id: 2, name: 'Robotik Hassas Boya Uygulayıcı', description: 'En karmaşık ve üç boyutlu yüzeylerde bile milimetrik hassasiyetle çalışan 6 eksenli robot.', image: '/machine2.jpg', details: [{ feature: 'Hassasiyet', value: '± 0.02 mm tekrarlanabilirlik' }, { feature: 'Eksen Sayısı', value: '6 Eksenli KUKA Robot' }, { feature: 'Püskürtme Teknolojisi', value: 'Yüksek verimli elektrostatik' }] },
  { id: 3, name: 'Modüler UV Kürleme Tüneli', description: 'UV boyalı ürünlerin anında ve kusursuz kurumasını sağlayan son nesil enerji verimli tünel sistemi.', image: '/machine4.jpg', details: [{ feature: 'Kürleme Hızı', value: '15m/dakika' }, { feature: 'Lamba Ömrü', value: '20.000 saat (LED UV)' }, { feature: 'Soğutma Sistemi', value: 'Entegre aktif hava soğutma' }] },
];


function MachineCard({ machine }) {
  // KRİTİK: Her kart kendi state'ini yönetir.
  const [showDetails, setShowDetails] = useState(false); 

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="machine-card">
      
      <div 
        className="machine-image-wrapper" 
        // 💥 KRİTİK DÜZELTME: Resim yolu BASE_URL ile düzeltildi
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${machine.image.substring(1)})` }} 
        aria-label={machine.name}
      ></div>
      
      <div className="card-content"> 
        <h3>{machine.name}</h3>
        
        <button className="details-button" onClick={toggleDetails}>
          {showDetails ? 'Detayları Kapat ⬆️' : 'Özellikleri İncele ⬇️'}
        </button>
      </div>

      {showDetails && <MachineDetails 
          details={machine.details} 
          machineDescription={machine.description}
      />}
    </div>
  );
}

function MachineGrid({ isFullPage }) { 
  return (
    <div className="machine-grid-section">
      <div className="container">
        {!isFullPage && <h2>Ürün Yelpazemiz</h2>} 
        
        <div className="machine-grid">
          {machines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} /> 
          ))}
        </div>
      </div>
    </div>
  );
}

export default MachineGrid;