import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NorthslingUIDesigns({
  sectionTitle,
  sectionSubtitle,
  features = [],
  bgGradient = "bg-gradient-to-b from-gray-50 via-white to-gray-50",
  titleColor = "text-gray-800",
  subtitleColor = "text-gray-500",
  iconColor = "text-orange-500",
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={`${bgGradient} py-16 px-6`}>
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className={`text-4xl md:text-4xl font-extrabold ${titleColor}`}>
          {sectionTitle}
        </h2>
        {sectionSubtitle && (
          <p className={`text-lg md:text-xl mt-4 ${subtitleColor} max-w-2xl mx-auto`}>
            {sectionSubtitle}
          </p>
        )}
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-2xl border p-6 cursor-pointer transition-all duration-300 ${
              hovered === index
                ? "bg-orange-500 text-white border-orange-500 shadow-xl scale-105"
                : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`text-2xl transition-colors duration-300 ${
                  hovered === index ? "text-white" : iconColor
                }`}
              >
                {item.icon}
              </div>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  hovered === index ? "opacity-100 rotate-45 text-white" : "opacity-40 rotate-0 text-gray-400"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            <h3
              className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                hovered === index ? "text-white" : "text-gray-900"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`text-sm leading-relaxed transition-colors duration-300 ${
                hovered === index ? "text-orange-100" : "text-gray-600"
              }`}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Section Footer Text */}
      <p className="text-center mt-16 text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
        These 7 dimensions form our <span className="font-semibold">Enterprise Experience Framework™</span> — a proprietary model that ensures no blind spots, only bold outcomes. And yes — most agencies ignore at least 3 of them. We don’t.
      </p>
    </section>
  );
}
