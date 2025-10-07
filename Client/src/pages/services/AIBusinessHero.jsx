import React from "react";
import { motion } from "framer-motion";

export default function AIBusinessHero() {
  return (
    <section className="relative w-full h-[550px] md:h-[650px] flex items-center justify-start text-gray-900 overflow-hidden bg-gradient-to-br from-white via-gray-100 to-gray-200">
      
      {/* ===== Floating Orbs (Subtle) ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-[-100px] top-[50px] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-pink-300 to-purple-400 blur-[100px] opacity-30"
          animate={{ y: [0, 30, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[50px] top-[300px] w-[250px] h-[250px] rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 blur-[80px] opacity-25"
          animate={{ y: [0, -20, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ===== Right-side SVG waves ===== */}
{/* ===== Right-side Top Wave (Foreground) ===== */}
<motion.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 800"
  className="absolute right-[-100px] top-0 h-[130%] w-[600px] opacity-60 z-20"
  initial={{ rotate: 0 }}
  animate={{ rotate: -360 }}
  transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
>
  <defs>
    <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#6b46c1" stopOpacity="0.7" />  {/* Richer dark purple */}
      <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.4" /> {/* Deep violet */}
    </linearGradient>
  </defs>

  {Array.from({ length: 20 }).map((_, i) => (
    <path
      key={i}
      d={`M0 ${50 + i * 35} C150 ${-30 + i * 10}, 650 ${60 + i * 12}, 800 ${50 + i * 35}`}
      stroke="url(#waveGradient2)"
      strokeWidth={1.2}
      fill="none"
      opacity={0.5 - i * 0.015}
    />
  ))}
</motion.svg>

{/* ===== Right-side Bottom Wave (Background) ===== */}
<motion.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 800"
  className="absolute right-[-120px] top-20 h-[140%] w-[650px] opacity-50 z-10"
  initial={{ rotate: 0 }}
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
>
  <defs>
    <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#6b46c1" stopOpacity="0.6" />
      <stop offset="100%" stopColor="#b794f4" stopOpacity="0.25" />
    </linearGradient>
  </defs>

  {Array.from({ length: 25 }).map((_, i) => (
    <path
      key={i}
      d={`M0 ${i * 35} C200 ${80 + i * 6}, 600 ${-50 + i * 12}, 800 ${i * 35}`}
      stroke="url(#waveGradient1)"
      strokeWidth={1.4}
      fill="none"
      opacity={0.55 - i * 0.015}
    />
  ))}
</motion.svg>


      </div>

      {/* Overlay (Soft) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>

      {/* ===== Content Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-30 px-8 md:px-20 max-w-2xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-3"
        >
          Northsling
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-3xl md:text-5xl font-bold leading-snug text-gray-900"
        >
          Discover <span className=" bg-clip-text text-black">Talent</span>  
          <br /> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Opportunities</span>  
          <br /> with <span className="text-gray-800 drop-shadow-md">Northsling</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-4 text-gray-600 text-lg"
        >
          Connect with the best artists, creators, and freelancers worldwide. Explore services, book gigs, and grow your business seamlessly.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59,130,246,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-7 py-3 bg-gray-600 text-white font-semibold rounded-full shadow-lg transition-all"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}
