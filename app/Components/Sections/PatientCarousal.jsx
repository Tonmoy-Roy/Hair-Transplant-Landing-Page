"use client";
import React, { useState, useEffect } from "react";

const PatientCarousal = ({
  items,
  autoPlay = true,
  interval = 3000,
  showIndicators = true,
  className = "",
  itemClassName = "",
  renderItem,
  cardsToShow = 4, 
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width < 768) {
          setCardsPerPage(1); 
        } else if (width < 1024) {
          setCardsPerPage(2); 
        } else {
          setCardsPerPage(4); 
        }
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, [cardsToShow]);

  const pages = [];
  for (let i = 0; i < items.length; i += cardsPerPage) {
    pages.push(items.slice(i, i + cardsPerPage));
  }

  const totalPages = pages.length;

  useEffect(() => {
    if (!autoPlay || totalPages <= 1) return;

    const carouselInterval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, interval);

    return () => clearInterval(carouselInterval);
  }, [autoPlay, interval, totalPages]);

  const goToPage = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="w-full min-w-full flex-shrink-0">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 py-4 w-full`}
              >
                {page.map((item, itemIndex) => {
                  const globalIndex = pageIndex * cardsPerPage + itemIndex;
                  
                  return (
                    <div key={itemIndex} className={`h-full ${itemClassName}`}>
                      {renderItem(item, globalIndex)}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showIndicators && totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentPage
                  ? "bg-gray-800 w-8 h-2"
                  : "bg-gray-300 w-2 h-2 hover:bg-gray-400" 
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientCarousal;