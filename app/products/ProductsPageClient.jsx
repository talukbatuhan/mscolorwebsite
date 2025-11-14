// app/products/ProductsPageClient.jsx

"use client"; 
import { useTranslation } from 'react-i18next'; 
import { useEffect } from 'react'; 

import MachineGrid from '@/app/page'; 

const styles = {
    mainContainer: {
        backgroundColor: '#182d51', 
        minHeight: '100vh', 
        width: '100%', 
    },
    contentContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '48px',
        paddingBottom: '48px',
        paddingLeft: '16px',
        paddingRight: '16px',
        width: '100%',
    },
    title: {
        fontSize: '2.25rem',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '1.5rem', 
        textAlign: 'center',
    }
};

export default function ProductsPageClient() {
    const { t } = useTranslation();
    const pageTitle = t('our_products_h1');
    
    return (
        <>
            <div style={styles.mainContainer}>
                <div style={styles.contentContainer}>
                    <h1 style={styles.title}>
                        {pageTitle}
                    </h1>
    
                    {/* showHero=false hem Video Hero'yu hem de SplashCursor'ı gizler. */}
                    <MachineGrid showHero={false} /> 
                </div>
            </div>
        </>
    );
}