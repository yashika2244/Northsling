import React from "react";
import { motion } from "framer-motion";

export default function Hero4({ currentPage, setCurrentPage }) {
  return (
    <section className="relative flex flex-col items-center h-screen text-center overflow-hidden bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300">
      
      {/* Animated SVG shapes in background */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[160%] w-[160%] md:h-[140%] md:w-[140%] z-0"
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
      >
        <defs>
          <linearGradient id="hero4Gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA500" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF7F50" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#hero4Gradient1)" strokeWidth="1">
          {Array.from({ length: 30 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 800}
              cy={Math.random() * 800}
              r={10 + Math.random() * 20}
              opacity={0.2 + Math.random() * 0.3}
            />
          ))}
        </g>
      </motion.svg>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl flex flex-col items-center space-y-6 pt-20 md:pt-0 md:h-full md:justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-600 leading-tight">
          Elevate with <span className="text-orange-400">Northsling</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-orange-700/90 max-w-3xl leading-relaxed">
          At Northsling, we craft intelligent digital ecosystems for businesses of all sizes. 
          Our <span className="font-semibold text-orange-500">AI-powered solutions</span> 
          and automation-first approach simplify operations, reduce inefficiencies, and unlock new growth opportunities.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/services"
            className="px-6 py-3 rounded-md bg-orange-400 text-white font-medium
                       hover:bg-orange-500 transition duration-300"
          >
            Explore Solutions
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-md border border-orange-400 text-orange-600 font-medium
                       hover:bg-orange-500 hover:text-white transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

    
    </section>
  );
}
