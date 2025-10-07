import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CareerStory() {
  return (
    <section className="relative bg-gradient-to-br from-[#f0f4ff] via-[#f9fafb] to-[#ffffff] py-28 px-6 md:px-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-xl group"
        >
          <img
            src="career.webp"
            alt="Career Story"
            className="w-full h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <p className="uppercase tracking-[0.25em] text-sm font-semibold text-gray-600 mb-2">
            Career Stories
          </p>

          <p className="text-sm uppercase font-medium text-orange-600 mb-4 tracking-wider">
            Blog Insight
          </p>

          <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Empathy: The Hidden Power <br /> of Modern Engineering
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
            Discover how empathy drives better teamwork, stronger communication, and innovative problem-solving in the fast-evolving world of engineering.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Read the Story
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
