import React, { useState } from 'react';
import './MachineGrid.css';

// MAKİNE VERİLERİ (Değişmedi)
const machines = [
  { id: 1, name: 'Shaker', description: 'Büyük ölçekli üretimler için ideal, yüksek verimli, hızlı ve tam otomasyonlu boyama çözümüdür.', image: '/src/public/machine.png', details: [{ feature: 'Kapasite', value: '1000m²/saat' }, { feature: 'Kontrol Sistemi', value: 'Siemens PLC ve 15" Dokunmatik Ekran' }, { feature: 'Tünel Uzunluğu', value: '25 metre modüler yapı' }] },
  { id: 2, name: 'Robotik Hassas Boya Uygulayıcı', description: 'En karmaşık ve üç boyutlu yüzeylerde bile milimetrik hassasiyetle çalışan 6 eksenli robot.', image: '/src/public/machine.png', details: [{ feature: 'Hassasiyet', value: '± 0.02 mm tekrarlanabilirlik' }, { feature: 'Eksen Sayısı', value: '6 Eksenli KUKA Robot' }, { feature: 'Püskürtme Teknolojisi', value: 'Yüksek verimli elektrostatik' }] },
  { id: 3, name: 'Modüler UV Kürleme Tüneli', description: 'UV boyalı ürünlerin anında ve kusursuz kurumasını sağlayan son nesil enerji verimli tünel sistemi.', image: '/src/public/machine.png', details: [{ feature: 'Kürleme Hızı', value: '15m/dakika' }, { feature: 'Lamba Ömrü', value: '20.000 saat (LED UV)' }, { feature: 'Soğutma Sistemi', value: 'Entegre aktif hava soğutma' }] },
];

// 1. Akordiyon Item
// Bu bileşeni olduğu gibi bırakıyoruz, böylece detaylar açılıp kapanabilir kalır.
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

// 2. MachineDetails (Akordiyon Yöneticisi) - Değişmedi
const MachineDetails = ({ details, machineDescription }) => {
    // İlk öğe ("Makine Hakkında") varsayılan olarak açık başlar
    const [openIndex, setOpenIndex] = useState(0); 
    
    const toggleItem = (index) => {
        // Tıklanan öğe zaten açıksa kapat, değilse aç.
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

// 3. MachineCard (BUTONSUZ VE HER ZAMAN AÇIK VERSİYON)
function MachineCard({ machine }) {
  // Artık showDetails state'ine ihtiyacımız yok

  return (
    <div className="machine-card details-visible">
      <div 
        className="machine-image-wrapper" 
        style={{ backgroundImage: `url(${machine.image})` }} 
        aria-label={machine.name}
      ></div>
      
      {/* Makine Adı doğrudan resmin altına geliyor */}
      <div className="card-content-auto"> 
        <h3>{machine.name}</h3>
      </div>
      
      {/* Detay Akordiyon Alanı doğrudan gösteriliyor */}
      <MachineDetails 
          details={machine.details} 
          machineDescription={machine.description}
      />
    </div>
  );
}

// 4. MachineGrid (Listeyi Oluşturur) - Değişmedi
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