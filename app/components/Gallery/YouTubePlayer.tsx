// components/Gallery/YouTubePlayer.tsx
import React from 'react';

interface YouTubePlayerProps {
  embedUrl: string;
  className?: string; // Konteyner için Tailwind sınıfları
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ embedUrl, className = '' }) => {
  // 16:9 oranını korumak için responsive CSS hilesi
  const responsiveStyle = {
    paddingTop: '56.25%', // 9/16 * 100% = 56.25%
  };

  return (
    // Responsive konteyner
    <div 
      className={`relative w-full overflow-hidden bg-black ${className}`} 
      style={responsiveStyle}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;