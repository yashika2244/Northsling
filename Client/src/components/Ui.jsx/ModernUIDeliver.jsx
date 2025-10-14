import React from "react";
import { motion } from "framer-motion";

export default function ModernUIDeliver({
  title,
  description,
  features = [],
  sectionClass = "relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-24 px-6 overflow-hidden",
  featureCardClass = "bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-yellow-400/50 rounded-2xl p-6 text-left shadow-md hover:shadow-yellow-500/20 transition-all duration-300"
}) {
  // Don't render the section at all if no props are passed
  if (!title && !description && features.length === 0) return null;

  return (
    <section className={sectionClass}>
      {/* Optional subtle background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto text-center mb-16">
        {title && <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">{title}</h2>}
        {description && <p className="text-gray-300 text-lg max-w-2xl mx-auto">{description}</p>}
      </div>

      {features.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={featureCardClass}
            >
              {item.icon && <div className="mb-4 text-yellow-400">{item.icon}</div>}
              {item.title && <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>}
              {item.desc && <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>}
            </motion.div>
          ))}
        </div>
      )}

    
    </section>
  );
}
