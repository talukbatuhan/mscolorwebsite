import React from 'react';
import MachineGrid from '../components/MachineGrid'; 
import './ProductsPage.css'

function ProductsPage() {
  return (
    <section className="products-page-container" style={{ paddingTop: '80px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="container">
        {/* Sayfa başlığı */}
        <h1 style={{ textAlign: 'center', color: 'white', marginBottom: '10px' }}>ÜRÜNLERİMİZ</h1>
        
        {/* MachineGrid bileşeninin ürün kartlarını gösteren kısmı */}
        <MachineGrid isFullPage={true} /> 
      </div>
    </section>
  );
}

export default ProductsPage;