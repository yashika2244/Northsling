import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Real Time Location Tracking",
    image: "https://intglobal.com/wp-content/uploads/2025/05/automate-processes-slider-img-1-new-min-2.webp",
    description: "Monitor employee locations in real time on an interactive map.",
  },
  {
    title: "Route Planning & Optimisation",
    image: "https://intglobal.com/wp-content/uploads/2025/05/automate-processes-slider-img-2-new-min-1.webp",
    description: "Plan and optimise routes for efficient travel and reduced costs.",
  },
];

export default function FeatureSlider() {
  return (
    <div className=" py-12 px-6 md:px-20">
      <h2 className="text-4xl  font-bold text-gray-800 mb-12 text-center">
        All in One Platform
      </h2>

      <div className="relative max-w-7xl  mx-auto flex md:flex-row flex-col gap-8 justify-center md:justify-center flex-wrap md:flex-nowrap overflow-x-auto space-x-8 scrollbar-hide pb-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-80 md:w-[28rem] bg-white md:shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="rounded-2xl mb-6 w-full h-64 object-cover"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-lg">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
