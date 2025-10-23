import React from 'react'; 
import { Routes, Route } from 'react-router-dom'; 
import './App.css'; 

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'

import SplashCursor from './components/SplashCursor';

function App() {


  
  return (
    <div className="app-container">
      <ScrollToTop />
      <SplashCursor />
      <Header />
      

      <main>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='*' element={<div className="container" style={{padding: '100px 0', textAlign: 'center'}}><h1>404 | Sayfa Bulunamadı</h1></div>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;