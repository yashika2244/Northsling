// src/components/industries/IndustryCards.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaTruck, FaLeaf } from "react-icons/fa";

export default function IndustryCards() {
  const industries = [
    {
      icon: <FaIndustry className="w-10 h-10 text-orange-500" />,
      title: "Manufacturing",
      desc: "Driving digital transformation with automation, predictive maintenance, and smart factories.",
    },
    {
      icon: <FaTruck className="w-10 h-10 text-orange-500" />,
      title: "Logistics",
      desc: "Optimizing supply chains with real-time analytics and intelligent routing solutions.",
    },
    {
      icon: <FaLeaf className="w-10 h-10 text-orange-500" />,
      title: "Sustainability",
      desc: "Empowering green initiatives through efficient resource management and innovation.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-orange-50 to-white py-28 px-6 md:px-20 overflow-hidden">
      {/* ===== Decorative Blobs ===== */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[28rem] h-[28rem] bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[32rem] h-[32rem] bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* ===== Content Wrapper ===== */}
      <div className="relative z-10 grid md:grid-cols-2 items-center gap-16">
        {/* ===== Left Content ===== */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            Industries We Power with{" "}
            <span className="text-orange-500">Innovation</span>
          </motion.h2>

          <p className="text-gray-600 text-lg mb-12 max-w-xl">
            Northsling partners with industry leaders to reimagine how technology
            drives performance, sustainability, and intelligent growth.
          </p>

          <div className="space-y-6">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start gap-5 bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="mt-1">{ind.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-gray-600">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== Right Image / Illustration ===== */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <img
              src="https://www.bing.com/th/id/OIP.ox-jdyKB_2Ssfo7xA2HZBgHaE8?w=264&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="Industry Innovation"
              className="w-full h-auto rounded-3xl shadow-2xl object-cover"
            />
            {/* Accent Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-400 to-transparent opacity-40 blur-3xl animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
