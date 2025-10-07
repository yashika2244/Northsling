// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CareerSection() {
  return (
    <section className="relative h-screen flex flex-col -mt-18 items-center justify-center px-6 md:px-20 lg:px-40 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 overflow-hidden">
      {/* Background gradient circles (orange theme) */}
      <div className="absolute -top-40 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-orange-300 to-orange-200 rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute -bottom-48 -right-40 w-[550px] h-[550px] bg-gradient-to-tr from-orange-100 to-orange-50 rounded-full opacity-20 animate-pulse-slow"></div>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-extralight text-gray-900 text-center leading-tight relative z-10">
        Build Your Future as a <br />
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
          Data Scientist
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-lg md:text-xl text-gray-600 text-center max-w-xl relative z-10">
        Take the next step in your career and discover exciting opportunities in
        data science.
      </p>

      {/* CTA Button */}
      <motion.a
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(249, 115, 22, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        href="#"
        className="mt-10 relative z-10 inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:brightness-110 transition-all"
      >
        Find Your Dream Job &rarr;
      </motion.a>

      {/* Minimal floating geometric icons */}
      <div className="absolute top-16 right-10 text-orange-400 text-4xl opacity-20 animate-float-slow">
        📊
      </div>
      <div className="absolute bottom-24 left-16 text-orange-300 text-3xl opacity-15 animate-float-slow">
        💻
      </div>
      <div className="absolute bottom-36 right-32 text-orange-200 text-3xl opacity-15 animate-float-slow">
        🤖
      </div>
    </section>
  );
}
