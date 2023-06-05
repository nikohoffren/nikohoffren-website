import React, { useState } from "react";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
}

const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageLoaded = () => {
    setIsLoading(false);
  };

  const loader = <div>Loading...</div>;

  return (
    <div className="music-col skeleton">
      {isLoading && loader}
      <img
        onLoad={imageLoaded}
        src={src}
        alt={alt}
        className="skeleton"
      ></img>
    </div>
  );
};

export default ImageWithLoading;
