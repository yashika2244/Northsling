import React from "react";
import { motion } from "framer-motion";

const roadmap = [
  {
    number: "01",
    title: "Co-build future-defining platforms",
  },
  {
    number: "02",
    title: "Stay founder-led, people-first, and outcome-obsessed",
  },
  {
    number: "03",
    title: "Drive sustainable scale through digital public infra",
  },
  {
    number: "04",
    title: "Embed AI and automation across ecosystems",
  },
];

export default function RoadAheadSection() {
  return (
    <section className="relative bg-[#0B0F19] text-white py-24 px-6 sm:px-12 md:px-24 overflow-hidden">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-16"
      >
        The Road Ahead
      </motion.h2>

      {/* Roadmap Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
        {roadmap.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="space-y-4 group"
          >
            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-700 tracking-tight group-hover:from-orange-500 group-hover:to-orange-700 transition-all duration-300">
              {item.number}
            </div>
            <h3 className="text-lg sm:text-xl font-medium leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-xl sm:text-2xl font-medium text-gray-200 mb-4 italic">
          “We think in decades. We move boldly. We care deeply.”
        </p>
        <p className="text-gray-400 text-sm sm:text-base font-light">
          — Abhishek Rungta (Founder & CEO)
        </p>
      </motion.div>

      {/* Glow Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 to-transparent blur-3xl pointer-events-none"></div>
    </section>
  );
}
