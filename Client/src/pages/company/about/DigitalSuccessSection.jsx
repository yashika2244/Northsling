import React from "react";
import { motion } from "framer-motion";

export default function DigitalSuccessSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden "
      style={{
        backgroundImage: "url('/teamImg.jpeg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 sm:px-10 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
          27+ Years of Delivering
        </h2>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            #DigitalSuccess
          </span>
        </h1>

        <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
          The journey of impact, innovation, and integrity with a confluence of
        </p>

        <p className="mt-3 text-white font-semibold text-lg sm:text-xl">
          Technology • Data & AI • Cloud & Cyber Security • Marketing
        </p>
      </motion.div>
    </section>
  );
}
