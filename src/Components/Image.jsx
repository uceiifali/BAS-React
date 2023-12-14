import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({ src, alt, className, height, width }) => (
  <div >
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
      effect="blur"
    />
  </div>
);

export default Image;