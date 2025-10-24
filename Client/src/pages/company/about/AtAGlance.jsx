import React from "react";
import { motion } from "framer-motion";

export default function AtAGlance() {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden rounded-3xl">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px] opacity-60"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-gray-800 text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            At a <span className="text-orange-600">Glance</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            At <strong>Northsling</strong>, we don’t just deliver code — we deliver
            measurable impact. We co-own outcomes, think like founders, and deliver
            like partners. Our work goes beyond writing lines of software — we
            engineer solutions that solve real business problems, create tangible
            value, and accelerate growth.
          </p>
        </motion.div>

        {/* Right Diagram */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-gray-200 w-full md:w-[520px]"
        >
          <div className="flex flex-col items-center text-center space-y-5">

            {/* Top */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center">
              <div className="text-sm font-semibold bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-100 transition">
                Consulting & Design Thinking
              </div>
              <div className="text-sm font-semibold bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-100 transition">
                Governance, Risk & Compliance
              </div>
            </div>

            {/* Middle Boxes */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {[
                "Technology",
                "Data Analytics & AI",
                "Cloud, Infra & Cybersecurity",
                "CX & Digital Marketing",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-gray-50 border font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Center Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="px-6 py-2 bg-gradient-to-r from-orange-700 to-orange-700 text-white rounded-full font-semibold shadow-lg"
              >
                Confluence
              </motion.div>
            </div>

            {/* Bottom */}
            <div className="text-sm font-semibold bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-100 transition">
              Managed Services, Maintenance & Support
            </div>

            {/* Side Labels */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[65%] rotate-[-90deg] text-xs sm:text-sm font-semibold bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 hover:bg-blue-100 transition">
              Venture Studio
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[65%] rotate-[90deg] text-xs sm:text-sm font-semibold bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5 hover:bg-blue-100 transition">
              Corporate Venture Capital
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
