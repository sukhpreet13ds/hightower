'use client';

import { useState } from 'react';

export default function ClaimsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = 2; // 7 cards total, 5 visible -> 0, 1, 2 indices

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="claims-carousel-container">
      {/* Left Arrow */}
      <button 
        className="carousel-arrow left-arrow" 
        onClick={scrollLeft} 
        disabled={currentIndex === 0}
        aria-label="Previous Claims"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="claims-carousel-viewport">
        <div 
          className="claims-cards-row" 
          style={{ transform: `translateX(calc(-${currentIndex} * (100% + 24px) / 5))` }}
        >
          <div className="claim-card">
            <img src="../assets/inside4.jpg" alt="Wrongful Death" className="claim-card-img" />
            <div className="claim-card-title">Wrongful Death</div>
          </div>
          <div className="claim-card">
            <img src="../assets/inside3.jpg" alt="Car Accidents" className="claim-card-img" />
            <div className="claim-card-title">Car Accidents</div>
          </div>
          <div className="claim-card">
            <img src="../assets/truck-acc-point.jpg" alt="Truck Accidents" className="claim-card-img" />
            <div className="claim-card-title">Truck Accidents</div>
          </div>
          <div className="claim-card">
            <img src="../assets/motor-acc-point.jpg" alt="Motorcycle Accidents" className="claim-card-img" />
            <div className="claim-card-title">Motorcycle Accidents</div>
          </div>
          <div className="claim-card">
            <img src="../assets/hh-blog3.jpg" alt="Work Accidents" className="claim-card-img" />
            <div className="claim-card-title">Work Accidents</div>
          </div>
          <div className="claim-card">
            <img src="../assets/inside1.jpg" alt="Dog Bites" className="claim-card-img" />
            <div className="claim-card-title">Dog Bites</div>
          </div>
          <div className="claim-card">
            <img src="../assets/inside2.jpg" alt="Slip and Falls" className="claim-card-img" />
            <div className="claim-card-title">Slip and Falls</div>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button 
        className="carousel-arrow right-arrow" 
        onClick={scrollRight} 
        disabled={currentIndex >= maxIndex}
        aria-label="Next Claims"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}
