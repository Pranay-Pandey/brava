'use client';
import React, { useState } from 'react';

const CustomCarousel = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1;
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) return 0;
      return prevIndex + 1;
    });
  };

  return (
    <div className="custom-carousel" style={{ display:'flex', width: '100%', height: '65vh', position: 'relative' }}>
      <div className="slides" style={{ overflow: 'hidden' }}>
        <div className="slide" style={{ height: '100%', width: '100%', position: 'relative' , overflow: 'hidden',}}>
          <img
            src={images[currentIndex].url}
            alt={`slide ${currentIndex + 1}`}
            style={{
              objectFit: 'cover',
              objectPosition: '50% 0%', // Center horizontally, crop from the top
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          />
          {images[currentIndex].caption && (
            <div
              className="caption"
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '100%',
                textAlign: images[currentIndex].captionPosition === 'left' ? 'left' : 'right',
                color: '#fff',
                padding: '20px',
              }}
            >
              <h3>{images[currentIndex].caption}</h3>
            </div>
          )}
          <div className="overlay"></div>
        </div>
      </div>

      <button className="prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;