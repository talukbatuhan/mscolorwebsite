import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css'; 

// Sabit Bileşenler
import Header from './components/Header';
import Footer from './components/Footer';

// Yeni Sayfalar
import HomePage from './pages/HomePage';       
import ContactPage from './pages/ContactPage'; 
import ProductsPage from './pages/ProductsPage'; // 👈 Yeni sayfa

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <Routes>
          {/* Anasayfa: MachineGrid burada da görünür (küçük versiyon) */}
          <Route path="/mscolorwebsite" element={<HomePage />} />
          
          {/* ÜRÜNLER Sayfası: Sadece MachineGrid'i büyük başlıkla gösterir */}
          <Route path="/products" element={<ProductsPage />} /> 

          {/* İletişim Sayfası */}
          <Route path="/contact" element={<ContactPage />} />
          
          {/* 404 Sayfası */}
          <Route path="*" element={<div className="container" style={{padding: '100px 0', textAlign: 'center'}}><h1>404 | Sayfa Bulunamadı</h1></div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;