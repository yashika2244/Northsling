// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CareerSection() {
  return (
    <section className="relative h-screen flex flex-col -mt-18 items-center justify-center px-6 md:px-20 lg:px-40 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 overflow-hidden">

      {/* ===== Animated Wave Background ===== */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        className="absolute left-[55%] top-[50%] -translate-x-1/2 -translate-y-1/2 h-[180%] w-[180%] md:h-[150%] md:w-[150%] z-10 opacity-30"
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
      >
        <defs>
          <linearGradient id="waveGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FDBA74" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#waveGradientHero)" strokeWidth="1">
          {Array.from({ length: 25 }).map((_, i) => (
            <path
              key={i}
              d={`
                M 0 ${400 + Math.sin(i * 0.4) * 50} 
                C 200 ${300 + i * 5}, 
                  600 ${500 - i * 5}, 
                  800 ${400 + Math.sin(i * 0.3) * 50}
              `}
              opacity={0.5 - i * 0.015}
            />
          ))}
        </g>
      </motion.svg>

     

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extralight text-gray-900 text-center leading-tight relative z-20"
      >
        Build Your Future as a <br />
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600 animate-text-gradient">
          Data Scientist
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-xl relative z-20"
      >
        Take the next step in your career and discover exciting opportunities in
        data science.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(249, 115, 22, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        href="#"
        className="mt-10 relative z-20 inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:brightness-110 transition-all duration-300"
      >
        Find Your Dream Job &rarr;
      </motion.a>

      {/* Floating icons with motion */}
      
      <motion.div
        className="absolute bottom-24 left-16 text-orange-300 text-3xl opacity-15"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        💻
      </motion.div>
      
    </section>
  );
}
