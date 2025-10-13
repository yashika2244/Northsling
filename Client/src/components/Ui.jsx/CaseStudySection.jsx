import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CaseStudySection({
  tag = "Case Study",
  title,
  highlightedText,
  description,
  image,
  stats = [],
  ctaText = "Read full case study",
  ctaLink = "#",
}) {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
        >
          <img
            src={
              image ||
              "https://tse3.mm.bing.net/th/id/OIP.WnBIDw6gU_3nk555duI5WAHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
            }
            alt={highlightedText || "Case Study Image"}
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-widest font-semibold text-orange-500">
            {tag}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            {title}{" "}
            {highlightedText && (
              <span className="text-orange-500">{highlightedText}</span>
            )}
          </h2>

          <p className="text-gray-700 text-lg md:text-xl">{description}</p>

          {/* Stats */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-3xl font-bold text-orange-500">{stat.value}</h3>
                  <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Read More */}
          {ctaText && (
            <motion.a
              href={ctaLink}
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-orange-600 font-semibold mt-6 hover:text-orange-700 transition-colors"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
