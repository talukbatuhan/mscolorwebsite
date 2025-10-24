import React from 'react';
import MachineGrid from '../components/MachineGrid'; 
import { useTranslation } from 'react-i18next'; 
import './ProductsPage.css'

function ProductsPage() {
    const { t, i18n } = useTranslation();
        const changeLanguage = (lng) => { 
          i18n.changeLanguage(lng);
      };
  return (
    <section className="products-page-container" style={{ paddingTop: '80px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="container">
        {/* Sayfa başlığı */}
        <h1 style={{ textAlign: 'center', color: 'white', marginBottom: '10px' }}>{t('our_products_h1')}</h1>
        
        {/* MachineGrid bileşeninin ürün kartlarını gösteren kısmı */}
        <MachineGrid isFullPage={true} /> 
      </div>
    </section>
  );
}

export default ProductsPage;