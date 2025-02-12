import React, { useState, useEffect } from 'react';
import styles from './LazyImage.module.css';

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  placeholderSrc = '/placeholder.jpg', 
  threshold = 0.5 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc);
  const [imageRef, setImageRef] = useState(null);

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (
              !didCancel && 
              entry.intersectionRatio > threshold && 
              entry.isIntersecting
            ) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: threshold,
          rootMargin: '0px 0px 50px 0px'
        }
      );
      observer.observe(imageRef);
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, threshold, imageRef]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`${styles.lazyImage} ${className}`}
      loading="lazy"
    />
  );
};

export default LazyImage;
