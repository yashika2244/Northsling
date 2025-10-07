// src/components/NorthslingAtGlance.jsx
import React from "react";
import { motion } from "framer-motion";

export default function NorthslingAtGlance() {
  const stats = [
    { number: "340+", label: "Global Enterprise Clients" },
    { number: "55+", label: "Countries of Operation" },
    { number: "65K+", label: "Team Members Worldwide" },
  ];

  return (
    <section className="relative bg-white text-gray-900 px-6 md:px-20 py-20 overflow-hidden">
      {/* Decorative Background Gradient */}
     

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
            Northsling at a Glance
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
            Empowering businesses worldwide through innovation, technology, and design thinking. Explore our global reach and growing network of clients and experts.
          </p>
     <motion.button
  whileHover={{
    scale: 1.05,
    backgroundColor: "#6b7280", // Gray-500
    color: "#fff",
    boxShadow: "0 0 15px rgba(107, 114, 128, 0.5)", // soft gray glow
  }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-3 border border-gray-400 text-gray-600 font-semibold rounded-full text-sm tracking-wide transition-all duration-300 bg-white hover:bg-gray-500 hover:text-white"
>
  DOWNLOAD REPORT
</motion.button>


        </motion.div>

        {/* Right Section - Stats */}
        <motion.div
          className="grid sm:grid-cols-3 grid-cols-1 gap-10 md:gap-12 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center md:items-start"
            >
              <p className="text-5xl md:text-6xl font-extrabold text-orange-500 drop-shadow-sm">
                {item.number}
              </p>
              <p className="text-gray-600 text-sm md:text-base mt-2 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
