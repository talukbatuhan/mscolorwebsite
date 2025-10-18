import React from 'react';
import MachineGrid from '../components/MachineGrid'; // MachineGrid'i içe aktar

function ProductsPage() {
  return (
    <section className="products-page-container" style={{ paddingTop: '80px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="container">
        {/* Sayfa başlığı */}
        <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '50px' }}>Tüm Otomasyon Ürünlerimiz</h1>
        
        {/* MachineGrid bileşeninin ürün kartlarını gösteren kısmı */}
        <MachineGrid isFullPage={true} /> 
      </div>
    </section>
  );
}

export default ProductsPage;