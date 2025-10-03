import React, { useEffect, useState } from "react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";

const pages = [Hero1, Hero2, Hero3, Hero4];

export default function PageSlider() {
  const [currentPage, setCurrentPage] = useState(0);
  const [prevPage, setPrevPage] = useState(null);
  const [direction, setDirection] = useState(1);
  const [touchStartX, setTouchStartX] = useState(null);

  // Desktop only autoplay
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
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
    setCurrentPage((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (window.innerWidth < 768) return;
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goToNext() : goToPrev();
    setTouchStartX(null);
  };

  const CurrentComponent = pages[currentPage];
  const PrevComponent = prevPage !== null ? pages[prevPage] : null;

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Mobile */}
   <div className="block md:hidden w-full h-full">
  <Hero1 showSVG={false} /> {/* Mobile: SVG hidden */}
</div>


      {/* Desktop */}
     
<div className="hidden md:block w-full h-full overflow-visible">
  {PrevComponent && (
    <div
      key={`prev-${prevPage}`}
      className="absolute top-0 left-0 w-full h-full z-10"
      style={{ animation: `slideOut-${direction === 1 ? "left" : "right"} 0.8s forwards` }}
    >
      <PrevComponent showSVG={true} />
    </div>
  )}

  <div
    key={`current-${currentPage}`}
    className="absolute top-0 left-0 w-full h-full z-20"
    style={{ animation: `slideIn-${direction === 1 ? "right" : "left"} 0.8s forwards` }}
  >
    <CurrentComponent showSVG={true} />
  </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white shadow-lg hover:scale-110 transition-transform duration-300 z-30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white shadow-lg hover:scale-110 transition-transform duration-300 z-30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
