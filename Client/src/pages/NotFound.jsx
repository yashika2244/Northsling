import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  // Randomly generate some floating circles for background
  const circles = [...Array(10)].map((_, idx) => ({
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative min-h-screen -mt-18 flex flex-col justify-center items-center bg-gradient-to-br from-orange-50 to-orange-200 overflow-hidden px-4">
      {/* Animated SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {circles.map((circle, idx) => (
          <motion.circle
            key={idx}
            cx={`${circle.x}%`}
            cy={`${circle.y}%`}
            r={circle.size / 2}
            fill="rgba(255,165,0,0.1)"
            animate={{ cy: [`${circle.y}%`, `${circle.y + 15}%`, `${circle.y}%`] }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              delay: circle.delay,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Main 404 Content */}
      <motion.h1
        className="text-8xl md:text-9xl font-extrabold text-orange-500 mb-6 select-none z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 text-center max-w-xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Oops! The page you’re looking for doesn’t exist. But don’t worry, your journey
        doesn’t have to end here.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="z-10"
      >
        <Link
          to="/"
          className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg font-semibold hover:bg-orange-600 transition-all"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Floating UFO Emoji */}
      <motion.div
        className="text-6xl absolute animate-bounce z-10"
        style={{ top: "20%", right: "10%" }}
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      >
        🛸
      </motion.div>
    </div>
  );
}
