import React, { useState } from "react";

function KodoImageLoader({ src , alt }) {

  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <img
      src={ src }
      className={`w-full h-full object-cover ${
        imageLoaded ? "" : "blur-on-load"
      }`}
      loading="lazy"
      onLoad={handleImageLoad}
      alt= { alt }
    />
  );
}

export default KodoImageLoader;
