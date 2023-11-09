import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from "react-bootstrap/Image"

function ImageComponent({ src, alt, className, ...props }) {
  const [error, setError] = useState(false);

  return (
  
      <Image
        onError={() => setError(true)}
        className={className}
        src={!error ? src : "/public/spinning-loading.gif"}
        alt={alt}
        loading="lazy"
        placeholder="blur"
        blurDataURL="/public/spinning-loading.gif"
        {...props}
      />
  
  );
}

ImageComponent.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageComponent;