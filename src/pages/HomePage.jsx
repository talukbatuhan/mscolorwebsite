// src/pages/HomePage.jsx

import React from 'react';
import MachineGrid from '../components/MachineGrid'; 
import './HomePage.css'; 

function HomePage() {
  return (
    <div className="homepage-container">
      {/* HEADER BÖLÜMÜ */}
      <header className="hero-section">
        <div className="header-content">
          
          {/* LOGO VE BAŞLIK KAPSAYICISI */}
          <div className="brand-title">
            <img src="/ms-color-logo.png" alt="Ms Color Logo" className="brand-logo" /> 
            <h1>Ms Color</h1>
          </div>
          
          <p className="hero-subtitle">Sanayide Renklerin Gücü, Teknolojinin Zirvesi</p>
          <button className="hero-button">Keşfet</button>
        </div>
      </header>

      {/* Makine Kartları Bölümü */}
      <MachineGrid />
      
      {/* Footer bileşeni buraya import edilmelidir */}

    </div>
  );
}

export default HomePage;