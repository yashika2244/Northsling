import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

export default function IndustryCTA() {
  return (
    <section className="relative py-28 px-6 md:px-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-900 text-center overflow-hidden rounded-t-3xl">
      {/* Decorative Floating Blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[20rem] h-[20rem] bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[25rem] h-[25rem] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
        animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* CTA Content */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
      >
        Let’s Transform Your Industry Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-10"
      >
        Partner with Northsling to unlock innovation, enhance efficiency, and scale success in your business sector.  
        We deliver solutions that are customized, scalable, and future-ready.
      </motion.p>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md transition"
        >
          <FaRocket className="w-10 h-10 text-orange-500 mb-4" />
          <h4 className="font-semibold text-lg mb-2">Accelerated Growth</h4>
          <p className="text-gray-700 text-sm text-center">
            Drive measurable results with innovative strategies tailored for your industry.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md transition"
        >
          <FaUsers className="w-10 h-10 text-orange-500 mb-4" />
          <h4 className="font-semibold text-lg mb-2">Client-Centric Approach</h4>
          <p className="text-gray-700 text-sm text-center">
            Collaboration at every step ensures solutions align perfectly with your goals.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md transition"
        >
          <FaLightbulb className="w-10 h-10 text-orange-500 mb-4" />
          <h4 className="font-semibold text-lg mb-2">Innovative Solutions</h4>
          <p className="text-gray-700 text-sm text-center">
            Cutting-edge technology to optimize operations, sustainability, and growth.
          </p>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-orange-500 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition"
      >
        Get in Touch
      </motion.button>
    </section>
  );
}
