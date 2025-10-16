import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function UiImpactSection({
  title,
  description,
  points = [],
  stats = [],
  emphasisText,
  titleColor = "text-gray-900",
  descriptionColor = "text-gray-600",
  pointColor = "text-gray-700",
}) {
  return (
    <section className="md:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6  flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Text Content */}
        <motion.div
          className="lg:w-2/3 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {title && (
            <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${titleColor}`}>
              {title}
            </h2>
          )}

          {description && (
            <p className={`text-lg md:text-xl text-gray-700 ${descriptionColor} max-w-2xl`}>
              {description}
            </p>
          )}

          {points.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {points.map((point, idx) => (
                <motion.li
                  key={idx}
                  className={`flex items-center gap-3 font-medium ${pointColor} p-3 rounded-lg cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 shadow-sm`}
                  whileHover={{ scale: 1.03 }}
                >
                  <ArrowUpRight className="text-blue-600 w-5 h-5" />
                  {point}
                </motion.li>
              ))}
            </ul>
          )}

          {emphasisText && (
            <p className="font-semibold text-lg mt-6 text-gray-800 border-l-4 border-blue-600 pl-4">
              {emphasisText}
            </p>
          )}
        </motion.div>

        {/* Right Stats */}
        {stats.length > 0 && (
          <motion.div
            className="lg:w-1/3 flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-white shadow-xl rounded-2xl p-8 transition-all duration-300 hover:scale-105"
              >
                <span className="text-4xl font-extrabold text-blue-600">{stat.value}</span>
                <p className="text-gray-700 mt-3 text-lg leading-snug">
                  {stat.description}{" "}
                  {stat.source && (
                    <span className="text-red-500 font-semibold">({stat.source}).</span>
                  )}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
