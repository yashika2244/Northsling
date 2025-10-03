import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "NorthSing: Elevate Your Music Experience",
    image: "/slider2.webp",
  },
  {
    title: "Discover the Latest Hits & Talents with NorthSing",
    image: "/slider1.jpg",
  },
  {
    title: "Connect, Collaborate, and Create with NorthSing",
    image: "/slider3.jpg",
  },
  {
    title: "NorthSing: Where Music Meets Innovation",
    image: "/slider4.webp",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative w-full mt-10 md:mt-0 h-[500px] sm:h-[550px] md:h-[650px] overflow-hidden rounded-3xl shadow-2xl">
      <AnimatePresence initial={false} mode="wait">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image */}
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay for dark effect */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text Overlay */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg max-w-2xl"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="mt-4 text-white/80 text-sm sm:text-base md:text-lg max-w-xl"
                  >
                    Explore more about our latest updates and offerings. Stay
                    ahead with our innovative solutions.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-6 px-8 sm:px-10 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-white to-gray-200 text-black font-semibold hover:scale-105 hover:from-gray-200 hover:to-white border-2 border-white transition-all duration-300 shadow-md"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4  px-4 py-2   z-20">
        <button
          onClick={prevSlide}
          className="bg-white/30 hover:bg-white/60 text-black p-3 rounded-full shadow-md transition"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="bg-white/30 hover:bg-white/60 text-black p-3 rounded-full shadow-md transition"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
