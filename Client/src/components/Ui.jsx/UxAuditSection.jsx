import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function UxAuditSection({
  logoText = "NS",
  heading = "Claim Your Free UX Audit",
  find = "What’s included:",
  points = [
    "Journey friction heatmap",
    "Mobile & accessibility compliance scan",
    "Competitor benchmark score",
    "Top 5 UX improvement recommendations",
  ],
  buttonText = "Schedule Your Free Assessment",
  buttonAction = () => {},
  accentColor = "bg-gradient-to-r from-orange-500 to-orange-600",
}) {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-gray-900 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-gray-800"
      >
        {/* Card Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-12 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Logo */}
          <motion.div
            className="flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`w-28 h-28 rounded-full flex items-center justify-center font-bold text-4xl shadow-lg ${accentColor} text-white`}
            >
              {logoText}
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center gap-5 text-white">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold leading-tight"
            >
              {heading}
            </motion.h2>

           

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-semibold text-orange-400"
            >
              {find}
            </motion.h3>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="space-y-3 mb-6"
            >
              {points.map((point, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-3 text-gray-100 text-lg"
                >
                  <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              onClick={buttonAction}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 shadow-xl hover:brightness-110 transition-all duration-300"
            >
              {buttonText}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
