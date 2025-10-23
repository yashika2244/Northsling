import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function HeroSection({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  bgImage,
  logo,
  ratings = [],
  titleColor = "text-white",
  subtitleColor = "text-gray-100",
  textPosition = "left", // "left" or "right"
}) {
  const isLeft = textPosition === "left";

  return (
    <section className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(0.9) contrast(1.05)",
        }}
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Hero Content */}
      <motion.div
  className={`relative z-10 flex-1 max-w-2xl mt-25 ${
    isLeft ? "text-left" : "text-right ml-auto"
  }`}
  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Logo above heading, aligned with text */}
  {logo && (
    <img
      src={logo}
      alt="Logo"
      className="mb-4 h-8 sm:h-8 lg:h-12 rounded-2xl"
    />
  )}

  {/* Title */}
  <h1 className={`text-4xl font-bold mb-4 leading-tight ${titleColor}`}>
    {title}
  </h1>

  {/* Subtitle */}
  <p className={`text-lg sm:text-xl lg:text-lg mb-8 ${subtitleColor}`}>
    {subtitle}
  </p>
        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          {primaryBtn && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {primaryBtn}
            </motion.button>
          )}
          {secondaryBtn && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              {secondaryBtn}
            </motion.button>
          )}
        </div>

        {/* Ratings */}
        {ratings.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-6">
            {ratings.map((site, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg"
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
                <span className="text-gray-100 font-semibold">
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
