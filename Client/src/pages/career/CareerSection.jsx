// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CareerSection() {
  return (
    <section className="relative -mt-18 h-screen flex flex-col items-center justify-center px-6 md:px-20 lg:px-40 overflow-hidden bg-gradient-to-br from-orange-100 via-white to-orange-50 text-gray-900">

      {/* ===== Layered Gradient Blobs for Depth ===== */}
      <div className=" mt-18 absolute  -top-40 -left-40 w-[32rem] h-[32rem] bg-gradient-to-br from-orange-500/40 via-orange-300/30 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-60 right-0 w-[28rem] h-[28rem] bg-gradient-to-bl from-orange-300/30 via-orange-200/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-1/3 w-[25rem] h-[25rem] bg-gradient-to-tl from-orange-400/30 via-transparent to-transparent rounded-full blur-2xl opacity-60" />

      {/* ===== Animated Abstract Rings ===== */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-[120%] h-[120%] border border-orange-200/30 rounded-full blur-[1px]" />
        <div className="absolute w-[90%] h-[90%] border border-orange-300/20 rounded-full blur-[1px]" />
        <div className="absolute w-[60%] h-[60%] border border-orange-400/10 rounded-full blur-[1px]" />
      </motion.div>

      {/* ===== Hero Text ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-light text-center leading-snug relative z-20 drop-shadow-sm"
      >
        Build Your <span className="font-semibold">Career</span> in{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 animate-text-gradient">
          Data & AI
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-2xl relative z-20"
      >
        Join Northling’s journey to transform industries with the power of data,
        creativity, and intelligent innovation. Let’s shape the digital future —
        together.
      </motion.p>

      {/* ===== CTA Buttons ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 relative z-20"
      >
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(249, 115, 22, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:brightness-110 transition-all duration-300"
        >
          View Open Roles →
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="px-8 py-4 bg-white/70 backdrop-blur-lg border border-orange-400/50 text-orange-600 font-semibold rounded-xl shadow-md hover:bg-orange-50 transition-all duration-300"
        >
          Learn More
        </motion.a>
      </motion.div>

      {/* ===== Floating Icons ===== */}
      <motion.div
        className="absolute bottom-24 left-20 text-4xl opacity-40"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        💻
      </motion.div>

      <motion.div
        className="absolute top-24 right-28 text-4xl opacity-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        📈
      </motion.div>
    </section>
  );
}
