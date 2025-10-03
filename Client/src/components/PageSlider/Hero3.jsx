import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NUM_PARTICLES = 50;

export default function Hero3({ currentPage, setCurrentPage }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: NUM_PARTICLES }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 12,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
      driftX: Math.random() * 30 - 15,
      driftY: Math.random() * 30 - 15,
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center px-6 md:px-12 bg-gray-900 text-gray-100">

      {/* ===== SVG Background Layer 1 ===== */}
{/* ===== SVG Background Layer 1 ===== */}
<motion.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 800"
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[160%] w-[160%] md:h-[140%] md:w-[140%] z-10"
  initial={{ rotate: 0, scale: 1 }}
  animate={{ rotate: 360, scale: [1.1, 1.2, 1.1] }}
  transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
>
  <defs>
    <linearGradient id="hero3Gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FFA500" stopOpacity="0.6" />
      <stop offset="100%" stopColor="#FF7F50" stopOpacity="0.3" />
    </linearGradient>
  </defs>
  <g fill="none" stroke="url(#hero3Gradient1)" strokeWidth="1">
    {Array.from({ length: 30 }).map((_, i) => (
      <line
        key={i}
        x1={Math.random() * 800}
        y1={Math.random() * 800}
        x2={Math.random() * 800}
        y2={Math.random() * 800}
        opacity={0.2 + Math.random() * 0.5}
        strokeLinecap="round"
      />
    ))}
  </g>
</motion.svg>

{/* ===== SVG Background Layer 2 ===== */}
<motion.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 800"
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[180%] w-[180%] md:h-[150%] md:w-[150%] z-20"
  initial={{ rotate: 0, scale: 1 }}
  animate={{ rotate: -360, scale: [1, 1.1, 1] }}
  transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
>
  <defs>
    <linearGradient id="hero3Gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#FF4500" stopOpacity="0.2" />
    </linearGradient>
  </defs>
  <g fill="none" stroke="url(#hero3Gradient2)" strokeWidth="0.8">
    {Array.from({ length: 25 }).map((_, i) => (
      <polygon
        key={i}
        points={`
          ${Math.random() * 800},${Math.random() * 800} 
          ${Math.random() * 800},${Math.random() * 800} 
          ${Math.random() * 800},${Math.random() * 800}
        `}
        opacity={0.1 + Math.random() * 0.4}
      />
    ))}
  </g>
</motion.svg>


      {/* ===== Hero Content ===== */}
<div className="relative z-30 text-center max-w-3xl flex flex-col items-center justify-center space-y-6 animate-heroFade">
  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md text-orange-400">
    Northsling: Innovating the Digital Future
  </h1>
  <p className="text-lg md:text-xl text-gray-300/80">
    We build <span className="text-orange-300 font-semibold">cutting-edge web experiences</span> and <span className="text-orange-300 font-semibold">AI-powered solutions</span> that empower businesses to thrive in a digital-first world.
  </p>
  <div className="flex flex-wrap gap-4 mt-6">
    <a
      className="px-6 py-3 rounded-xl bg-orange-600/20 backdrop-blur-md hover:bg-orange-500/40 text-orange-300 font-semibold transition transform hover:scale-105 shadow-lg"
      href="/cases"
    >
      Explore Our Work
    </a>
    <a
      className="px-6 py-3 rounded-xl border border-orange-400/50 backdrop-blur-md hover:bg-orange-500/10 text-orange-300 font-semibold transition transform hover:scale-105"
      href="/contact"
    >
      Connect With Us
    </a>
  </div>


</div>


      {/* ===== Animations ===== */}
      <style>
        {`
          @keyframes floatParticle {
            0% { transform: translateY(0) scale(1); opacity: 0.3; }
            50% { transform: translateY(-20px) scale(1.1); opacity: 0.6; }
            100% { transform: translateY(-40px) scale(0.9); opacity: 0.2; }
          }

          .animate-heroFade {
            animation: heroFade 2s ease forwards;
          }

          @keyframes heroFade {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
