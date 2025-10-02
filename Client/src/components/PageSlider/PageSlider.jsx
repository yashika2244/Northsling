// components/PageSlider.jsx
import React, { useEffect, useState } from "react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";

const pages = [Hero1, Hero2, Hero3, Hero4];

export default function PageSlider() {
  const [currentPage, setCurrentPage] = useState(0);
  const [prevPage, setPrevPage] = useState(null);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 12000);
    return () => clearInterval(interval);
  }, [currentPage]);

  const goToNext = () => {
    setDirection(1);
    setPrevPage(currentPage);
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setPrevPage(currentPage);
    setCurrentPage((prev) =>
      prev === 0 ? pages.length - 1 : (prev - 1) % pages.length
    );
  };

  // Swipe handlers (for mobile)
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // swipe left → next
        goToNext();
      } else {
        // swipe right → prev
        goToPrev();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const CurrentComponent = pages[currentPage];
  const PrevComponent = prevPage !== null ? pages[prevPage] : null;

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Previous Slide */}
      {PrevComponent && (
        <div
          key={`prev-${prevPage}`}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            animation: `slideOut-${
              direction === 1 ? "left" : "right"
            } 1s forwards`,
          }}
        >
          <PrevComponent />
        </div>
      )}

      {/* Current Slide */}
      <div
        key={`current-${currentPage}`}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          animation: `slideIn-${direction === 1 ? "right" : "left"} 1s forwards`,
        }}
      >
        <CurrentComponent />
      </div>

      {/* Desktop Arrows */}
      <div className="hidden md:block">
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/50 text-white shadow-lg hover:scale-110 transition-transform duration-300 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/50 text-white shadow-lg hover:scale-110 transition-transform duration-300 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dots (arrows removed) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentPage ? 1 : -1);
              setPrevPage(currentPage);
              setCurrentPage(i);
            }}
            className={`w-3 h-3 rounded-full transition ${
              i === currentPage ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
