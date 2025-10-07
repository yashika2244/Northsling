import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative md:h-screen py-20 md:py-0 bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      >
        <img
          src="https://img.freepik.com/premium-photo/black-white-abstract-background-with-wavy-lines-generative-ai_797840-1093.jpg"
          alt="Abstract swirl"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      </motion.div>

      {/* Subtle Gradient Overlays */}
     

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 md:px-16 max-w-4xl">
        {/* Animated Subtitle */}
        <motion.p
          className="text-orange-500 font-semibold tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Empowering Innovation
        </motion.p>

        {/* Animated Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-800 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Vision
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We craft impactful digital experiences that redefine industries,
          combining creativity, strategy, and technology to help you lead in the
          modern world.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {["LEADERSHIP", "HISTORY", "NEWSROOM"].map((btn) => (
            <motion.button
              key={btn}
              whileHover={{
                scale: 1.08,
                y: -2,
                boxShadow: "0px 0px 15px rgba(234, 88, 12, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-orange-500 text-orange-600 rounded-full text-sm md:text-base font-medium tracking-wide
                         hover:bg-orange-600 hover:text-white hover:shadow-lg
                         backdrop-blur-md bg-white/70 transition-all duration-300"
            >
              {btn}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
