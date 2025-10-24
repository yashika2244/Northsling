import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timeline = [
  {
    year: 1997,
    title: "Founded Northsling — A Digital Vision Begins",
    description:
      "Northsling started as a small digital consulting firm with a mission to redefine how businesses approached technology. The early focus was on innovation and delivering measurable results.",
    images: ["https://intglobal.com/wp-content/uploads/2025/06/image-133.webp", "/office2.jpg", "https://intglobal.com/wp-content/uploads/2025/06/image-135-1-1-1-1.webp"],
  },
  {
    year: 2007,
    title: "Expanding Horizons",
    description:
      "A decade of growth led to diversification into software and data analytics. Northsling became known for its engineering excellence and customer-first approach.",
    images: ["https://intglobal.com/wp-content/uploads/2025/06/image-133.webp", "https://intglobal.com/wp-content/uploads/2025/06/image-135-1-1-1-1.webp"],
  },
  {
    year: 2010,
    title: "Cloud & Infra Services Launched",
    description:
      "Recognizing the future of cloud technology, Northsling launched its first cloud and infrastructure services, helping clients transition from legacy systems to scalable architectures.",
    images: ["https://intglobal.com/wp-content/uploads/2025/06/image-133.webp", "https://intglobal.com/wp-content/uploads/2025/06/image-135-1-1-1-1.webp"],
  },
  {
    year: 2013,
    title: "Global Expansion & Innovation Labs",
    description:
      "With new offices opening globally, Northsling. set up innovation labs focused on AI and design systems, fueling the next stage of digital transformation.",
    images: ["https://intglobal.com/wp-content/uploads/2025/06/image-133.webp", "https://intglobal.com/wp-content/uploads/2025/06/image-135-1-1-1-1.webp"],
  },
  {
    year: 2016,
    title: "1,000+ Team Members Strong",
    description:
      "Northsling crossed a major milestone — a family of over 1,000 innovators, designers, and technologists working together to create cutting-edge solutions.",
    images: ["https://intglobal.com/wp-content/uploads/2025/06/image-133.webp", "https://intglobal.com/wp-content/uploads/2025/06/image-135-1-1-1-1.webp"],
  },
  {
    year: 2019,
    title: "National Recognition & Industry Awards",
    description:
      "Recognized as a Great Place to Work, Northsling earned national export awards and was celebrated for its impact on digital innovation across industries.",
    images: ["https://intglobal.com/wp-content/uploads/2025/06/image-133.webp", "https://intglobal.com/wp-content/uploads/2025/06/image-135-1-1-1-1.webp"],
  },
  {
    year: 2022,
    title: "Generative AI Takes Center Stage",
    description:
      "Northsling began integrating AI-first design and engineering principles into every solution, positioning itself at the forefront of the AI revolution.",
    images: ["https://intglobal.com/wp-content/uploads/2025/06/image-133.webp", "https://intglobal.com/wp-content/uploads/2025/06/image-135-1-1-1-1.webp"],
  },
  {
    year: 2024,
    title: "Acquired Prime Infoserv — Cybersecurity Leadership",
    description:
      "Acquired Prime Infoserv, expanded cybersecurity services, launched a new HQ, and filed for IPO — marking the beginning of an even more ambitious era.",
    images: ["https://intglobal.com/wp-content/uploads/2025/06/image-133.webp", "/team1.jpg", "https://intglobal.com/wp-content/uploads/2025/06/image-135-1-1-1-1.webp"],
  },
];

export default function JourneySection() {
  const [activeIndex, setActiveIndex] = useState(timeline.length - 1); // Default 2024

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-6 sm:px-12 md:px-24 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-3">
          Our Roadmap
        </p>
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
          The <span className="text-orange-600 font-extrabold">INT.</span> Journey So Far
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          “We think in decades — separating signal from noise to build systems that endure.”
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex justify-between items-center max-w-4xl mx-auto mb-24">
        <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-gray-200 -z-10"></div>

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className="flex flex-col items-center cursor-pointer relative group"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{
                backgroundColor:
                  index === activeIndex ? "#ea580c" : "#d1d5db",
                scale: index === activeIndex ? 1.3 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`w-5 h-5 rounded-full ${
                index === activeIndex
                  ? "ring-4 ring-orange-200 shadow-lg"
                  : ""
              }`}
            ></motion.div>
            <p
              className={`mt-3 text-sm font-semibold transition-colors ${
                index === activeIndex ? "text-orange-600" : "text-gray-500"
              }`}
            >
              {item.year}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Animated Journey Content */}
      <div className="grid lg:grid-cols-2 gap-14 items-start min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={timeline[activeIndex].year + "-text"}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 leading-snug">
              {timeline[activeIndex].title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {timeline[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={timeline[activeIndex].year + "-images"}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {timeline[activeIndex].images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Year ${timeline[activeIndex].year}`}
                className="rounded-2xl shadow-md object-cover h-48 sm:h-56 w-full hover:scale-105 transition-transform duration-300"
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Year Watermark */}
      <motion.h1
        key={timeline[activeIndex].year}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-6 right-10 text-[90px] sm:text-[150px] font-black text-gray-300/70 select-none"
      >
        {timeline[activeIndex].year}
      </motion.h1>
    </section>
  );
}
