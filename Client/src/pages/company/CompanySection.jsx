import React from "react";
import { motion } from "framer-motion";

export default function CompanySection() {
  return (
    <section className="relative bg-gray-50 py-24 px-6 md:px-16 overflow-hidden -mt-18">
      {/* Decorative Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100, y: -100 }}
        animate={{ opacity: 0.5, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 rounded-full blur-3xl"
      />

      <div className="relative max-w-4xl md:text-left text-center md:mt-18 mt-6 mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:text-6xl text-4xl font-extrabold text-gray-600 mb-6"
        >
          Company
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed"
        >
          We can help you reimagine your business through a digital lens. Our
          software engineering heritage combined with our strategic business
          and innovation consulting, design thinking, and physical-digital
          capabilities provide real business value to our customers through
          human-centric innovation.
        </motion.p>

        {/* Contact Link */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-orange-500 font-semibold text-lg hover:underline transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          Contact Us <span className="text-xl">→</span>
        </motion.a>
      </div>
    </section>
  );
}
