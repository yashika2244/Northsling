// src/components/TeamSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden -mt-18">
      {/* ===== Background Image ===== */}
      <div
        className="absolute inset-0 bg-cover bg-top "
        style={{
          backgroundImage: `url('teamImg.jpeg')`,
        }}
      ></div>

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ===== Heading Text ===== */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Meet Our Amazing Team
        </h1>
        <p className="text-white/80 text-lg md:text-2xl max-w-2xl">
          Dedicated professionals driving innovation and excellence.
        </p>
      </motion.div>
    </section>
  );
}
