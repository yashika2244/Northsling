import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CaseStudyCard() {
  return (
    <div className="relative w-full h-[650px] md:h-[620px] overflow-hidden shadow-2xl flex items-center group rounded-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="bg-img3.jpeg"
          alt="Case Study Background"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2500ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 px-4 sm:px-6 md:px-20 w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative backdrop-blur-md bg-white/10 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl text-white max-w-full md:max-w-xl border border-white/20"
        >
          <p className="text-xs sm:text-sm tracking-[3px] uppercase font-medium text-teal-300">
            Client Journey
          </p>
          <h1 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
            Innovation at Every Touchpoint:
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent text-lg sm:text-2xl md:text-3xl">
              Scaling Innovation for Growth
            </span>
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            Explore how Boden redefined its digital journey, integrating design
            innovation and user-first strategies to boost engagement and drive
            sustainable growth.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-5 sm:mt-8 flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-lg font-semibold shadow-lg text-sm sm:text-base transition-all duration-300"
          >
            Read More <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Right Floating Highlight Card (hidden on mobile) */}
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  animate={{ y: [0, -6, 0] }}
  transition={{
    opacity: { duration: 1, delay: 0.3 },
    y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
  }}
  className="hidden md:block backdrop-blur-xl bg-white/10 p-6 md:p-8 rounded-2xl shadow-2xl max-w-sm border border-white/20"
>
  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
    Key Highlight
  </h3>
  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
    Boden achieved a{" "}
    <span className="text-teal-400 font-semibold">30% increase</span>{" "}
    in customer engagement and built a seamless digital journey with
    scalable design solutions.
  </p>
</motion.div>

      </div>
    </div>
  );
}
