import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function HeroSection({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  bgImage,
  ratings = [],
  titleColor = "text-white",
  subtitleColor = "text-gray-200",
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/60"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      />

      {/* Overlay Gradient for Professional Look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Headline */}
        <h1
          className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-sans font-semibold mb-4 leading-snug ${titleColor}`}
        >
          {title}
        </h1>

        {/* Subheading */}
        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto ${subtitleColor}`}
        >
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
          {primaryBtn && (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {primaryBtn}
            </motion.button>
          )}
          {secondaryBtn && (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              {secondaryBtn}
            </motion.button>
          )}
        </div>

        {/* Ratings */}
        {ratings.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
            {ratings.map((site, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-lg shadow-sm"
              >
                <span className="font-medium">{site.name}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(site.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-200 font-semibold">
                  {site.rating.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
