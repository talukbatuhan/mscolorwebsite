import React from 'react';
import './ContactForm.css';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız başarıyla iletildi!");
    // Gerçek uygulamada burada API çağrısı yapılmalıdır.
  };

  return (
    <form className="contact-form-luxury" onSubmit={handleSubmit}>
      
      <div className="form-group">
        <label htmlFor="name" className="visually-hidden">Adınız Soyadınız</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Adınız Soyadınız" 
          required 
          className="luxury-input" // Yeni sınıf
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="visually-hidden">E-posta Adresiniz</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="E-posta Adresiniz" 
          required 
          className="luxury-input" // Yeni sınıf
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="visually-hidden">Telefon Numaranız</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder="Telefon Numaranız (Opsiyonel)" 
          className="luxury-input" // Yeni sınıf
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="visually-hidden">Mesajınız</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          placeholder="Mesajınız..." 
          required 
          className="luxury-textarea" // Yeni sınıf
        ></textarea>
      </div>

      <button type="submit" className="submit-button-luxury">
        Mesajı Gönder
      </button>
    </form>
  );
}

export default ContactForm;