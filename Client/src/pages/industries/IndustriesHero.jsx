// src/components/industries/IndustriesHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden -mt-18 bg-gradient-to-br from-orange-100 via-white to-orange-50 text-gray-900 py-32 px-6 md:px-20">
      {/* ====== Floating Gradient Blobs ====== */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[35rem] h-[35rem] bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[30rem] h-[30rem] bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* ====== Content Section ====== */}
      <div className="relative z-10 flex flex-col items-center text-center md:mt-18">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl pb-2 font-extrabold bg-gradient-to-r from-orange-600 to-gray-900 bg-clip-text text-transparent"
        >
          Empowering Every Industry
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mt-6"
        >
          At <span className="font-semibold text-orange-600">Northsling</span>, we blend innovation with industry expertise — creating solutions that transform businesses and redefine possibilities.
        </motion.p>

        {/* ====== CTA Button ====== */}
        <motion.a
          href="#industries-list"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-flex items-center gap-2 bg-orange-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:bg-orange-700 transition"
        >
          Explore Industries <ArrowDown className="w-5 h-5" />
        </motion.a>
      </div>

      {/* ====== Subtle Animated Wave Pattern ====== */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full text-orange-100"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <path
          fill="currentColor"
          d="M0,288L60,272C120,256,240,224,360,202.7C480,181,600,171,720,176C840,181,960,203,1080,218.7C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </motion.svg>
    </section>
  );
}
