import React from "react";
import { motion } from "framer-motion";

export default function Hero1({ showSVG = true }) {
  return (
    <section className="relative w-full h-full min-h-screen bg-black flex flex-col justify-start md:justify-center px-6 md:px-12 overflow-visible pt-24 md:pt-32 pb-16">

      {/* ===== Background Layer 1 ===== */}
{showSVG && (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    className="absolute left-[55%] top-[30%] -translate-x-1/2 -translate-y-1/2 h-[150%] w-[150%] md:h-[130%] md:w-[130%] max-h-none max-w-none z-10"
    initial={{ rotate: 0, scale: 1 }}
    animate={{ rotate: 360, scale: [1.15, 1.25, 1.15] }}
    transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
  >
    <defs>
      <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF7F50" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FF4500" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <g fill="none" stroke="url(#lineGradient1)" strokeWidth="0.5">
      {Array.from({ length: 50 }).map((_, i) => (
        <path
          key={i}
          d={`M ${150 + i * 10},400 Q 400,${200 + i * 6} 650,400 T 400,650 Z`}
          opacity={0.5 - i * 0.008}
        />
      ))}
    </g>
  </motion.svg>
)}

{/* ===== Background Layer 2 ===== */}
{showSVG && (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    className="absolute left-[65%] top-[25%] -translate-x-1/2 -translate-y-1/2 h-[180%] w-[180%] md:h-[140%] md:w-[140%] max-h-none max-w-none z-20"
    initial={{ rotate: 0, scale: 1 }}
    animate={{ rotate: -360, scale: [1, 1.1, 1] }}
    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
  >
    <defs>
      <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA500" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#FF6347" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <g fill="none" stroke="url(#lineGradient2)" strokeWidth="0.6">
      {Array.from({ length: 45 }).map((_, i) => (
        <path
          key={i}
          d={`M ${180 + i * 14},400 Q 400,${150 + i * 8} 620,400 T 400,620 Z`}
          opacity={0.6 - i * 0.01}
        />
      ))}
    </g>
  </motion.svg>
)}


      {/* ===== Content ===== */}
<div className="relative z-30 max-w-3xl text-left px-4 sm:px-6 md:px-0 lg:ml-10 mt-[-1rem] md:mt-[-3rem] lg:mt-[-180px] flex flex-col md:justify-center min-h-screen">
  {/* Tagline */}
  <p className="text-base sm:text-base md:text-lg text-orange-400 font-medium tracking-wide mb-3 sm:mb-2">
    Innovating the Future of Digital Solutions
  </p>

  {/* Heading */}
  <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-snug md:leading-tight drop-shadow-md">
    Welcome to <span className="text-orange-400">Northsling</span>
  </h1>

  {/* Subheading */}
  <p className="mt-4 sm:mt-4 md:mt-5 text-gray-300 text-lg sm:text-lg md:text-xl drop-shadow-sm max-w-full sm:max-w-lg">
    Driving innovation with <span className="text-orange-400 font-semibold">AI-powered solutions</span> to help businesses optimize processes, enhance customer experiences, and gain a competitive edge.
  </p>

  {/* Buttons */}
  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:from-orange-600 hover:to-orange-500"
    >
      Explore Solutions
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="px-6 sm:px-8 py-3 sm:py-4 border border-orange-500 text-orange-400 font-semibold rounded-lg transition-all duration-300 hover:bg-orange-600 hover:text-white hover:border-transparent shadow-sm"
    >
      Contact Us
    </motion.button>
  </div>
</div>


    </section>
  );
}
 