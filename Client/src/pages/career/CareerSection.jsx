// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 md:px-20 lg:px-40 overflow-hidden bg-gradient-to-b from-gray-50 to-white text-gray-900">

      {/* ===== Animated Gradient Background Blobs ===== */}
      <motion.div
        className="absolute -top-60 -left-60 w-[36rem] h-[36rem] bg-gradient-to-br from-orange-400/30 via-orange-300/20 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-80 right-0 w-[32rem] h-[32rem] bg-gradient-to-bl from-orange-300/20 via-orange-200/10 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== Animated Fluid Wave SVGs ===== */}
  {/* ===== Redesigned Floating Gradient Waves ===== */}
<motion.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 800"
  className="absolute left-[70%] top-[55%] -translate-x-1/2 -translate-y-1/2 h-[170%] w-[170%] md:h-[150%] md:w-[150%] z-10"
  initial={{ rotate: 0, scale: 1 }}
  animate={{ rotate: 360, scale: [1.02, 1.1, 1.02] }}
  transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
>
  <defs>
    <linearGradient id="waveGradientA" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FF6F61" stopOpacity="0.35" />
      <stop offset="100%" stopColor="#FF3D00" stopOpacity="0.1" />
    </linearGradient>
  </defs>
  <g fill="none" stroke="url(#waveGradientA)" strokeWidth="1">
    {Array.from({ length: 25 }).map((_, i) => (
      <path
        key={i}
        d={`
          M 0 ${400 + Math.sin(i * 0.6) * 60} 
          C 200 ${300 + Math.cos(i * 0.5) * 50}, 
            600 ${500 - Math.sin(i * 0.4) * 50}, 
            800 ${400 + Math.cos(i * 0.3) * 60}
        `}
        opacity={0.5 - i * 0.015}
      />
    ))}
  </g>
</motion.svg>

<motion.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 800"
  className="absolute left-[75%] top-[50%] -translate-x-1/2 -translate-y-1/2 h-[180%] w-[180%] md:h-[160%] md:w-[160%] z-20"
  initial={{ rotate: 0, scale: 1 }}
  animate={{ rotate: -360, scale: [1, 1.08, 1] }}
  transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
>
  <defs>
    <linearGradient id="waveGradientB" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FFB347" stopOpacity="0.3" />
      <stop offset="100%" stopColor="#FF7F50" stopOpacity="0.08" />
    </linearGradient>
  </defs>
  <g fill="none" stroke="url(#waveGradientB)" strokeWidth="0.9">
    {Array.from({ length: 22 }).map((_, i) => (
      <path
        key={i}
        d={`
          M 0 ${360 + Math.cos(i * 0.5) * 70} 
          C 200 ${440 - Math.sin(i * 0.4) * 40}, 
            600 ${360 + Math.cos(i * 0.6) * 50}, 
            800 ${400 + Math.sin(i * 0.3) * 60}
        `}
        opacity={0.45 - i * 0.012}
      />
    ))}
  </g>
</motion.svg>


      {/* ===== Hero Text ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-light text-center leading-snug relative z-30 drop-shadow-md"
      >
        Accelerate Your <span className="font-semibold">Career</span> in{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 animate-text-gradient">
          Data & AI
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-2xl relative z-30"
      >
        Join Northling and shape the future of digital innovation. Collaborate with industry leaders, work on cutting-edge AI projects, and grow your expertise in a vibrant, forward-thinking environment.
      </motion.p>

      {/* ===== CTA Buttons ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 relative z-30"
      >
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249,115,22,0.6)" }}
          whileTap={{ scale: 0.95 }}
          href="#open-roles"
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:brightness-110 transition-all duration-300"
        >
          Explore Open Roles →
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249,115,22,0.3)" }}
          whileTap={{ scale: 0.95 }}
          href="#about-us"
          className="px-8 py-4 bg-white/70 backdrop-blur-lg border border-orange-400/50 text-orange-600 font-semibold rounded-xl shadow-md hover:bg-orange-50 transition-all duration-300"
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
}
