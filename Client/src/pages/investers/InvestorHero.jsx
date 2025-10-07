import React from "react";
import { motion } from "framer-motion";

export default function InvestorHero() {
  return (
    <section className="relative -mt-18 bg-gradient-to-br from-orange-50 via-white to-gray-100 text-gray-900 py-28 px-6 md:px-20 overflow-hidden">
{/* ===== Updated Fluid Wave-Line SVG Backgrounds (shifted right) ===== */}
<motion.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 800"
  className="absolute left-[75%] top-[50%] -translate-x-1/2 -translate-y-1/2 h-[160%] w-[160%] md:h-[140%] md:w-[140%] z-10"
  initial={{ rotate: 0, scale: 1 }}
  animate={{ rotate: 360, scale: [1.05, 1.15, 1.05] }}
  transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
>
  <defs>
    <linearGradient
      id="waveGradient1"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="100%"
    >
      <stop offset="0%" stopColor="#FF6F61" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#FF3D00" stopOpacity="0.15" />
    </linearGradient>
  </defs>
  <g fill="none" stroke="url(#waveGradient1)" strokeWidth="1">
    {Array.from({ length: 30 }).map((_, i) => (
      <path
        key={i}
        d={`
          M 0 ${400 + Math.sin(i * 0.5) * 50} 
          C 200 ${300 + i * 5}, 
            600 ${500 - i * 5}, 
            800 ${400 + Math.sin(i * 0.3) * 50}
        `}
        opacity={0.5 - i * 0.012}
      />
    ))}
  </g>
</motion.svg>

<motion.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 800"
  className="absolute left-[80%] top-[50%] -translate-x-1/2 -translate-y-1/2 h-[180%] w-[180%] md:h-[150%] md:w-[150%] z-20"
  initial={{ rotate: 0, scale: 1 }}
  animate={{ rotate: -360, scale: [1, 1.07, 1] }}
  transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
>
  <defs>
    <linearGradient
      id="waveGradient2"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="100%"
    >
      <stop offset="0%" stopColor="#FFB347" stopOpacity="0.35" />
      <stop offset="100%" stopColor="#FF7F50" stopOpacity="0.1" />
    </linearGradient>
  </defs>
  <g fill="none" stroke="url(#waveGradient2)" strokeWidth="0.8">
    {Array.from({ length: 28 }).map((_, i) => (
      <path
        key={i}
        d={`
          M 0 ${350 + Math.cos(i * 0.4) * 60} 
          C 200 ${450 - i * 4}, 
            600 ${350 + i * 4}, 
            800 ${400 + Math.cos(i * 0.5) * 60}
        `}
        opacity={0.45 - i * 0.01}
      />
    ))}
  </g>
</motion.svg>


      {/* ===== Main Content ===== */}
      <div className="relative z-30 max-w-4xl mx-auto text-center md:text-left md:mt-18">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 drop-shadow-md"
        >
          Investor Relations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl text-gray-700 mt-6 max-w-2xl leading-relaxed"
        >
          Northsling is committed to delivering long-term value and sustainable
          growth. Explore our corporate strategy, financial performance, and
          governance initiatives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex justify-center md:justify-start"
        >
          <a
            href="#overview"
            className="inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full font-medium shadow-xl hover:bg-orange-600 hover:scale-105 transform transition-all duration-300"
          >
            View Investor Overview
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
