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
    <section className="relative  min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-0 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/70"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Headline */}
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug ${titleColor}`}
        >
          {title}
        </h1>

        {/* Subheading */}
        <p
          className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 ${subtitleColor}`}
        >
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 mb-6 sm:mb-8 w-full">
          {primaryBtn && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md"
            >
              {primaryBtn}
            </motion.button>
          )}
          {secondaryBtn && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
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
                className="flex items-center gap-2 text-sm sm:text-base bg-black/30 px-3 py-2 rounded-md"
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
                          : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-200">{site.rating.toFixed(1)}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
