"use client"; 
import { useTranslation } from 'react-i18next';

import { useEffect } from 'react';
import Head from 'next/head';
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

export default function ProductsPage() {
    const { t } = useTranslation();
    const pageTitle = t('our_products_h1');
    const pageDescription = "Yüksek kaliteli endüstriyel makinelerimizi keşfedin. Geniş ürün yelpazemiz ve uzman çözümlerimizle işinizi geliştirin.";
    const pageKeywords = "endüstriyel makineler, ürünler, ekipmanlar, sanayi makineleri";
    useEffect(() => {
        document.title ="Ms Color " + pageTitle;
    }, []);

    return (
        <>
            

            <div style={styles.mainContainer}>
                <div style={styles.contentContainer}>
                    <h1 style={styles.title}>
                        {pageTitle}
                    </h1>
                    <MachineGrid showHero={false} /> 
                </div>
            </div>
        </>
    );
}