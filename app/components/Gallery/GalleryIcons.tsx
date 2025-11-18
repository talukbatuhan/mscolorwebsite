// components/Gallery/GalleryIcons.tsx
import React from 'react';

// Reusable Play Icon component (Tailwind CSS sınıflarıyla)
export const PlayIcon: React.FC = () => (
    <svg className="w-12 h-12 text-white/90 group-hover:text-white transition duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

// Reusable Loader component (Tailwind CSS sınıflarıyla)
export const Loader: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 z-10">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
    </div>
);

// Close Icon for Fullscreen (Tailwind CSS sınıflarıyla)
export const CloseIcon: React.FC = () => (
    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// Back Arrow Icon for Header
export const BackIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

// Navigation Arrow Icon
interface NavIconProps {
    direction: 'prev' | 'next';
}

export const NavIcon: React.FC<NavIconProps> = ({ direction }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white transition duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
    >
        {direction === 'prev' ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
    </svg>
);