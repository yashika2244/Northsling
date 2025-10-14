import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function UxAuditSection({
  logoText = "NS",
  heading = "Claim Your Free UX Audit",
  subheading = "Your interface might be costing you more than you think.",
  find = "What you’ll get:",
  points = [
    "Journey friction heatmap",
    "Mobile & accessibility compliance scan",
    "Competitor benchmark score",
    "Top 5 UX improvement recommendations",
  ],
  buttonText = "Schedule Your Free Assessment",
  buttonAction = () => {},
  bgImage = "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
  accentColor = "bg-orange-600 ",
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
        className="relative z-10 max-w-5xl mx-auto bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-16 flex flex-col md:flex-row items-start gap-8"
      >
        {/* Logo / Icon with subtle float */}
        <motion.div
          className={`flex-shrink-0 ${accentColor} w-24 h-24 rounded-full flex items-center justify-center font-bold text-3xl shadow-lg text-white`}
          animate={{ y: [0, -6, 0] }}
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
            className="text-gray-200 mb-5 md:text-lg"
          >
            {subheading}
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl font-semibold mb-4 ${textColor}`}
          >
            {find}
          </motion.h3>

          {/* Points with icons */}
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
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button with gradient */}
          <motion.button
            onClick={buttonAction}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl font-semibold text-white shadow-xl bg-orange-600  hover:bg-orange-600 transition-all duration-300"
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
