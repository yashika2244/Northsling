import React from "react";
import { motion } from "framer-motion";

const industriesData = [
  { category: "Consumer", items: ["Consumer Packaged Goods", "Travel & Hospitality", "Retail"] },
  { category: "Financial Services", items: ["Wealth Management", "Retail & Commercial Banking", "Open Banking & Payments"] },
  { category: "Telecom, Media & Entertainment", items: ["Telecommunications", "Media & Entertainment", "Gaming", "Business Information & Publishing"] },
  { category: "Life Sciences & Healthcare", items: ["MedTech"] },
  { category: "Software & Hi-Tech", items: ["Education", "Energy & Resources"] },
  { category: "Industrial", items: ["Automotive"] },
  { category: "Insurance", items: [] },
  { category: "Private Equity", items: [] },
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 md:px-16 ">
      {/* === Decorative Gradient Circles === */}
      <div className="absolute -top-32 -right-40 w-[32rem] h-[32rem] bg-gradient-to-br from-orange-200/30 to-amber-200/40 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-32 -left-40 w-[34rem] h-[34rem] bg-gradient-to-tr from-orange-300/30 to-yellow-200/40 rounded-full blur-3xl animate-pulse-slow" />

      {/* === Section Header === */}
      <motion.div
        className="relative z-10 text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl  md:text-6xl font-extrabold text-gray-900 mb-5 tracking-tight">
          Industries We Serve
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Delivering intelligent, impactful solutions across diverse sectors to drive sustainable growth.
        </p>
      </motion.div>

      {/* === Industries Grid === */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {industriesData.map((industry, idx) => (
          <motion.div
            key={idx}
            className="group bg-white rounded-3xl shadow-md hover:shadow-2xl border border-orange-100/60 p-8 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/0 to-orange-200/0 group-hover:from-orange-100/50 group-hover:to-orange-200/60 transition-all duration-500 rounded-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                {industry.category}
              </h3>

              <ul className="space-y-2">
                {industry.items.length > 0 ? (
                  industry.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 hover:text-orange-500 transition-colors duration-200 cursor-pointer"
                    >
                      • {item}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400 italic">Coming Soon...</li>
                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === Closing Statement === */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto mt-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Driving <span className="text-orange-600">innovation</span> across industries.
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We partner with global enterprises to unlock potential, enhance efficiency, and create lasting value in every sector we touch.
        </p>
      </motion.div>
    </section>
  );
}
