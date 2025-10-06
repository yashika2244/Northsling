import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Banking & Finance",
  "Insurance",
  "Life Sciences",
  "Retail and FMCG",
];

const solutionsData = {
  "Banking & Finance": [
    "DSA/Connector Portal",
    "Customer Portal",
    "Customer Onboarding Journey",
    "LOS Journey",
    "Payment and Transaction Services",
    "Risk and Compliance Management",
    "Fraud Detection and Prevention",
    "Investment and Wealth Management Solutions",
  ],
  Insurance: [
    "Policy Management",
    "Claims Processing",
    "Customer Onboarding",
    "Fraud Detection",
    "Risk Analysis Solutions",
  ],
  "Life Sciences": [
    "Clinical Trial Management",
    "Regulatory Compliance",
    "Patient Engagement Solutions",
    "Data Analytics & Insights",
  ],
  "Retail and FMCG": [
    "Customer Loyalty Programs",
    "E-commerce Platforms",
    "Inventory Management",
    "Sales Analytics",
  ],
};

// Map category to images
const categoryImages = {
  "Banking & Finance":
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  Insurance:
    "https://images.unsplash.com/photo-1581090700227-7c1e5fd0e01e?auto=format&fit=crop&w=1200&q=80",
  "Life Sciences":
    "https://images.unsplash.com/photo-1581094456227-7c1e5fd0e01e?auto=format&fit=crop&w=1200&q=80",
  "Retail and FMCG":
    "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1200&q=80",
};

export default function IndustrySolutions() {
  const [activeCategory, setActiveCategory] = useState("Banking & Finance");

  return (
    <div className="min-h-screen bg-gray-100 p-4  font-sans mx-2 rounded-2xl mt-2">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-4 md:p-10 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-72 bg-white/80 backdrop-blur-xl shadow-md border-b lg:border-b-0 lg:border-r border-orange-200 p-3 flex flex-col sticky top-16 z-10 rounded-none lg:rounded-2xl">
          <h1 className="text-xl sm:text-2xl font-extrabold mb-4 text-black text-center lg:text-left">
            Industries
          </h1>
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible space-x-3 lg:space-x-0 lg:space-y-3 scrollbar-hide">
            {categories.map((cat) => (
              <motion.div
                key={cat}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full lg:rounded-xl text-sm cursor-pointer transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white hover:bg-orange-100 text-gray-700 border border-orange-100"
                }`}
              >
                {cat}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solutions List */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              {activeCategory} Solutions
            </h2>
            <a
              href="#"
              className="text-orange-500 text-sm font-medium hover:underline"
            >
              Learn more
            </a>
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {solutionsData[activeCategory].map((solution) => (
                <motion.li
                  key={solution}
                  whileHover={{ scale: 1.03 }}
                  className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl border border-orange-100 transition-all duration-300 cursor-pointer group flex justify-between items-center"
                >
                  <span className="font-medium text-gray-800">{solution}</span>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="text-orange-500 text-lg font-bold"
                  >
                    ↗
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Image Card */}
        <div className="flex-1 relative w-full lg:max-w-md h-64 sm:h-80 lg:h-auto rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeCategory}
              src={categoryImages[activeCategory]}
              alt={activeCategory}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-base sm:text-xl md:text-2xl font-bold">
              {activeCategory} Industry Expertise
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
