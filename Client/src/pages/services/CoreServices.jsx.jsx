import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const services = [
  "Strategy",
  "Engineering",
  "Cloud",
  "Cybersecurity",
  "Data & Analytics",
  "CX+",
];

export default function CoreServices() {
  return (
    <section className="relative bg-white text-gray-900 py-24 px-6 md:px-12 overflow-hidden">
      {/* 🔸 Decorative Gradient Orbs */}
      <div className="absolute -top-24 -left-24 w-[24rem] h-[24rem] rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem]  rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* ✨ Badge */}
        <motion.div
          className="inline-flex items-center gap-2  text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4" />
          Explore Our Expertise
        </motion.div>

        {/* 🌈 Gradient Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gray-700 bg-clip-text text-transparent mb-10 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our Core Services
        </motion.h2>

        {/* 💠 Animated Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.button
              key={index}
              className="group relative px-8 py-3 rounded-full bg-white border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* ✨ Gradient background on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              <span className="relative z-10 font-medium text-gray-800 group-hover:text-white transition-colors duration-300">
                {service}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
