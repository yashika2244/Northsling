import React from "react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="relative bg-white text-gray-900 py-28 px-6 md:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Subheading */}
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.15em] text-xs font-semibold text-gray-700 mb-6"
        >
          Who We Are
        </motion.h4>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-light leading-tight mb-8"
        >
          We are <span className="font-medium text-gray-900">relentless</span> in our
          <br className="hidden md:block" /> pursuit of solutions that help
          <br className="hidden md:block" /> our clients.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-sm md:text-base max-w-3xl leading-relaxed"
        >
          We deliver where others often fail — doing the right thing, every time, because it’s right.
        </motion.p>
      </div>

      {/* Subtle background accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange-200 to-transparent opacity-40 blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
}
