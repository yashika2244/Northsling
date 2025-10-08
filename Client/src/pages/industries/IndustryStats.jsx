import React from "react";
import { motion } from "framer-motion";

export default function IndustryStats() {
  const stats = [
    { number: "25+", label: "Industries Served" },
    { number: "100+", label: "Clients Worldwide" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years of Expertise" },
  ];

  return (
    <section className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* ===== Decorative Blobs ===== */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[25rem] h-[25rem] bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[30rem] h-[30rem] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center">
        Our Global Impact
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-lg"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
              {s.number}
            </h3>
            <p className="text-gray-300 text-lg md:text-xl">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
