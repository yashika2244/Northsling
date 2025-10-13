import React from "react";
import { motion } from "framer-motion";

export default function UxAuditSection({
  logoText = "NS",
  heading = "Claim Your Free UX Audit",
  subheading = "Your interface might be costing you more than you think.",
  points = [
    "Journey friction heatmap",
    "Mobile & accessibility compliance scan",
    "Competitor benchmark score",
    "Top 5 UX improvement recommendations",
  ],
  buttonText = "Schedule Your Free Assessment",
  buttonAction = () => {},
  bgImage = "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
  accentColor = "bg-orange-500",
  textColor = "text-white",
}) {
  return (
    <section className="relative py-24 px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-75"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-start gap-8"
      >
        {/* Logo / Icon with subtle float */}
        <motion.div
          className={`flex-shrink-0 ${accentColor} w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg`}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {logoText}
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-extrabold mb-3 ${textColor}`}
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-gray-200 mb-5 ${textColor}`}
          >
            {subheading}
          </motion.p>

          {/* Points with stagger */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="mb-6 space-y-3"
          >
            {points.map((point, idx) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-3 text-gray-100"
              >
                <span className={`w-2 h-2 rounded-full ${accentColor} inline-block mt-1`}></span>
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button with hover motion */}
          <motion.button
            onClick={buttonAction}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 ${accentColor} rounded-lg font-semibold text-white shadow-lg`}
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
