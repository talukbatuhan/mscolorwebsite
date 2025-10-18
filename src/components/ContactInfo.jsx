import React from 'react';
import './ContactInfo.css'; // Yeni CSS dosyasını import ediyoruz

function ContactInfo({ location }) {
  // location objesi, maps_local'dan gelen bilgileri içerecek.
  const { address, phone_number, hours } = location;

  return (
    <div className="contact-info-section">
      <h3>Bize Ulaşın</h3>
      
      <div className="info-item">
        <h4>Konumumuz</h4>
        <p>{address}</p>
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Yol Tarifi Al
        </a>
      </div>
      
      <div className="info-item">
        <h4>Telefon</h4>
        <p>{phone_number}</p>
      </div>

      <div className="info-item hours-item">
        <h4>Çalışma Saatleri</h4>
        <ul>
          {hours.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactInfo;