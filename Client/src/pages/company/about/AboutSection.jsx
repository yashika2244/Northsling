import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden rounded-2xl bg-black max-w-7xl mx-auto ">
      {/* Background Image */}
      <img
        src="/team1.jpg"
        alt="Audience listening to presentation"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mt-12 flex flex-col justify-center h-full px-6 sm:px-12 md:px-20 lg:px-28 text-white max-w-3xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-5xl font-semibold leading-tight mb-6 tracking-tight"
        >
          Born to Solve,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
            Built to Last.
          </span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10"
        >
          INT. began with a vision — to solve real problems through technology.
          Today, we’re 1,000+ strong, trusted in 45+ countries, and still proudly
          founder-led. Every solution we create stands for quality, trust, and
          innovation.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button className="px-8 py-3 rounded-full font-medium text-black bg-white hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-orange-400/30">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Subtle bottom fade for style */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  );
}
