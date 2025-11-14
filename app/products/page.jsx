// app/products/page.js

import ProductsPageClient from './ProductsPageClient';

export const metadata = {
    title: 'Tüm Ürünlerimiz - Yüksek Kaliteli Makine ve Çözümler',
    description: 'MS Color Website\'ın sunduğu en yeni ve en kaliteli tüm ürünleri tek bir sayfada inceleyin. İhtiyacınız olan makine ve çözümleri keşfedin.',
    keywords: ['ürünler', 'makine', 'çözümler', 'katalog', 'fiyatlar', 'endüstriyel ürünler'],
};

export default function ProductsPageServerWrapper() {
    return (
        <ProductsPageClient />
    );
}