"use client"
import React, { useState, useEffect } from 'react';

const Carousel = ({
  items,
  autoPlay = true,
  interval = 3000,
  showIndicators = true,
  className = "",
  itemClassName = "",
  renderItem
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const carouselInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(carouselInterval);
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 flex justify-center ${itemClassName}`}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                ? 'bg-gray-700 w-8'
                : 'bg-gray-400 hover:bg-gray-500'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;