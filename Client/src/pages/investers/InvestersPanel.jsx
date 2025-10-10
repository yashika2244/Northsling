import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvestorsPanel() {
  const categories = [
    "Incorporation information",
    "Financial information",
    "Governance",
    "Our Committees",
    "Board of Directors",
    "Credit Rating",
    "Code of Policies",
  ];

  const data = {
    "Incorporation information": {
      text: "Details about incorporation of the company.",
      image: "https://images.unsplash.com/photo-1581090700227-6c29c16f24c3?fit=crop&w=800&q=80",
    },
    "Financial information": {
      text: "Explore the financial reports and statements.",
      image: "https://images.unsplash.com/photo-1565372918104-7d3db5b35b6e?fit=crop&w=800&q=80",
    },
    "Governance": {
      text: "Understand our corporate governance structure.",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4438b0?fit=crop&w=800&q=80",
    },
    "Our Committees": {
      text: "Meet the committees that drive strategic decisions.",
      image: "https://images.unsplash.com/photo-1581092580490-237bc4d832b0?fit=crop&w=800&q=80",
    },
    "Board of Directors": {
      text: "Get to know our board members.",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?fit=crop&w=800&q=80",
    },
    "Credit Rating": {
      text: "Check our latest credit ratings.",
      image: "https://images.unsplash.com/photo-1561414927-6d77b8c0abf8?fit=crop&w=800&q=80",
    },
    "Code of Policies": {
      text: "Read our corporate policies and codes.",
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?fit=crop&w=800&q=80",
    },
  };

  const [active, setActive] = useState("");

  const defaultContent = {
    text: "Welcome! Explore our company and AI initiatives.",
    image: "https://th.bing.com/th/id/OIP.UCBZDNYDcPY36Uhue0Bj0wHaEK?w=301&h=180&c=7&r=0&o=7&pid=1.7&rm=3", // AI related image
  };

  return (
    <div className="relative hide-scrollbar bg-gradient-to-br from-white via-orange-50 to-white text-gray-800 rounded-3xl shadow-xl border border-orange-100 flex flex-col sm:flex-row overflow-hidden max-w-8xl md:mx-6  mb-16">
      {/* Mobile Categories */}
      <div className="sm:hidden overflow-x-auto py-4 px-2 flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat
                ? "bg-orange-500 text-white shadow-md"
                : "bg-orange-100 text-orange-700 hover:bg-orange-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden sm:flex sm:w-1/3 bg-white/60 backdrop-blur-xl border-b sm:border-b-0 border-orange-100 p-5 sm:p-6 flex-col rounded-l-3xl relative overflow-hidden">
        <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
           Investors
        </h2>

        <div className="flex flex-col space-y-2 overflow-y-auto max-h-[480px] py-4 px-2 rounded-lg border scrollbar-thumb-orange-200 pr-2 border-gray-100">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.02, x: 5 }}
              onClick={() => setActive(cat)}
              className={`relative text-left px-5 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none ${
                active === cat
                  ? " text-orange-700 border-r-4 border-orange-500 shadow-sm"
                  : "bg-white/70 text-gray-800 hover:text-orange-700 hover:shadow-sm hover:border-r-4 border-orange-500"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative p-6 sm:p-10 rounded-3xl">
        <h3 className="text-3xl font-bold tracking-tight mb-6 text-gray-800">
          Our  Investors
        </h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={active || "default"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl shadow-xl"
          >
            <motion.img
              src={(data[active] || defaultContent).image}
              alt={active || "default"}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              className="w-full h-72 sm:h-96 object-cover rounded-3xl brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6 sm:p-8">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-2xl font-semibold text-white drop-shadow-lg"
              >
                {(data[active] || defaultContent).text}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
