"use client";
import React, { useState, useEffect, useRef } from "react";

const Carousel = ({
  items,
  autoPlay = true,
  interval = 3000,
  showIndicators = true,
  className = "",
  itemClassName = "",
  renderItem,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const maxScrollCount = items.length > 2 ? items.length - 2 : items.length;

  useEffect(() => {
    if (!autoPlay) return;
    const carouselInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxScrollCount);
    }, interval);
    return () => clearInterval(carouselInterval);
  }, [autoPlay, interval, maxScrollCount]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slideRef = useRef(null);
  const [slideSize, setSlideSize] = useState(0);
  const gapPx = 16; 

  useEffect(() => {
    const measure = () => {
      const el = slideRef.current;
      if (el) {
        const w = el.offsetWidth;
        setSlideSize(w + gapPx);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items.length]);

  const translateX = slideSize ? currentSlide * slideSize : 0;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: slideSize ? `translateX(-${translateX}px)` : undefined,
            width: slideSize ? `${items.length * slideSize}px` : undefined,
            gap: `${gapPx}px`, 
          }}
        >
          {items.map((item, index) => {
            const centerIndex = currentSlide + 1;
            const scale =
              index === centerIndex ? "scale-105 z-10" : "scale-95 opacity-80";

            return (
              <div
                key={index}
                ref={index === 0 ? slideRef : null}
                className={`flex-shrink-0 flex justify-center transition-transform duration-500 ${scale} ${itemClassName}`}
              >
                {renderItem(item, index)}
              </div>
            );
          })}
        </div>
      </div>

      {showIndicators && (
        <div className="flex justify-center gap-2 mt-6">
          {items.slice(0, maxScrollCount).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-gray-700 w-8"
                  : "bg-gray-400 hover:bg-gray-500"
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