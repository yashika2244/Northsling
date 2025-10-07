import React from "react";
import { motion } from "framer-motion";

const industriesData = [
  { category: "Consumer", items: ["Consumer Packaged Goods", "Travel & Hospitality", "Retail"] },
  { category: "Financial Services", items: ["Wealth Management", "Retail & Commercial Banking", "Open Banking & Payments"] },
  { category: "Telecom, Media & Entertainment", items: ["Telecommunications", "Media & Entertainment", "Gaming", "Business Information & Publishing"] },
  { category: "Life Sciences & Healthcare", items: ["MedTech"] },
  { category: "Software & Hi-Tech", items: ["Education","Energy & Resources"] },
  { category: "Industrial", items: ["Automotive"] },
  { category: "Insurance", items: [] },
  { category: "Private Equity", items: [] },
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 px-6 md:px-16 -mt-18">
      {/* Gradient Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-gradient-to-br from-orange-300/20 to-amber-200/40 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-36 -left-36 w-[32rem] h-[32rem] bg-gradient-to-tr from-amber-300/20 to-orange-200/40 rounded-full blur-3xl animate-pulse-slow" />

      {/* Section Title */}
      <motion.div
        className="relative z-10 text-center mb-16 mt-18"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
          Diverse sectors where we deliver impactful solutions and drive growth.
        </p>
      </motion.div>

      {/* Industry Cards */}
      <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {industriesData.map((industry, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              {industry.category}
            </h3>
            <ul className="space-y-2">
              {industry.items.length > 0 ? (
                industry.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-600 hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                ))
              ) : (
                <li className="text-gray-400 italic"></li>
              )}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto mt-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Driving <span className="text-orange-500">innovation</span> across industries.
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We partner with businesses to unlock potential and create lasting impact in every sector.
        </p>
      </motion.div>
    </section>
  );
}
