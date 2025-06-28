import React, { useState } from "react";
import image from "@/assets/prof-img.webp";
import imageFallback from "@/assets/prof-img.png";

const OptimizedProfileImage: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse rounded overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-shimmer"></div>
        </div>
      )}

      <picture>
        <source srcSet={image} type="image/webp" />
        <img
          src={imageFallback}
          alt="Parth Verma - Profile Image"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="eager"
          className={`object-cover w-full h-full transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </picture>

      {imageError && (
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
          <span className="text-green-400 text-xs">P</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedProfileImage;
