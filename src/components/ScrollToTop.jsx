"use client";
import React, { useEffect } from 'react';
// Correct import for Next.js App Router path detection
import { usePathname } from 'next/navigation';

function ScrollToTop() { 
    // Use the Next.js equivalent hook
    const pathname = usePathname();

    useEffect(() => {
        // Disable browser scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const delay = 50; 

        const scrollToTop = () => {
            // Instantly scroll the window to the top
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant' 
            });
            // Ensure documentElement (html) position is also reset for safety
            document.documentElement.scrollTop = 0; 
        };
        
        // Run with a slight delay to ensure the page update is rendered
        const timeoutId = setTimeout(scrollToTop, delay);
        
        return () => clearTimeout(timeoutId);

    }, [pathname]); // Depend on pathname (Next.js route change)

    return null; 
}

export default ScrollToTop;