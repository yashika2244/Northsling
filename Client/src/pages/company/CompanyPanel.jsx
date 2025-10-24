import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CompanyPanel() {
  const navigate = useNavigate();

  const categories = [
    "About the Company",
    "Board of Directors",
    "Career / Job Openings",
    "Awards",
    "Event & Talk",
    "Northsling Foundations",
  ];

  const routes = {
    "About the Company": "/company/about",
    "Board of Directors": "/company/board-directors",
    "Career / Job Openings": "/company/career",
    "Awards": "/company/awards",
    "Event & Talk": "/company/events",
    "Northsling Foundations": "/company/foundations",
  };

  const data = {
    "About the Company": {
      text: "Learn more about our company's mission, vision, and values.",
      image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    },
    "Board of Directors": {
      text: "Meet the people guiding our company to success.",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
    },
    "Career / Job Openings": {
      text: "Explore exciting career opportunities with us.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    },
    "Awards": {
      text: "Recognizing our achievements and accolades.",
      image: "https://images.unsplash.com/photo-1581090700227-6c29c16f24c3",
    },
    "Event & Talk": {
      text: "Join our events and insightful talks.",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6",
    },
    "Northsling Foundations": {
      text: "Our foundation initiatives and social contributions.",
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    },
  };

  const handleClick = (cat) => {
    navigate(routes[cat]); // ⬅ navigate to full new page
  };

  return (
    <div className="relative hide-scrollbar bg-gradient-to-br from-white via-orange-50 to-white text-gray-800 rounded-3xl shadow-xl border border-orange-100 flex flex-col sm:flex-row overflow-hidden max-w-8xl md:mx-6 mb-16">

      {/* Sidebar */}
      <div className="hidden sm:flex sm:w-1/3 bg-white/60 backdrop-blur-xl p-5 sm:p-6 flex-col rounded-l-3xl border-r border-orange-100">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-500 bg-clip-text text-transparent">
          Team
        </h2>
        <div className="flex flex-col space-y-2 overflow-y-auto max-h-[480px] hide-scrollbar">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.02, x: 5 }}
              onClick={() => handleClick(cat)}
              className="text-left px-5 py-3 rounded-xl font-medium transition-all duration-300 bg-white/70 text-gray-800 hover:text-orange-700 hover:shadow-sm"
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-1 relative rounded-3xl overflow-hidden mb-6 mx-4">
        <h3 className="text-3xl font-bold tracking-tight bg-gray-600 bg-clip-text text-transparent mt-4 mb-6 mx-4">
          Company
        </h3>
        <AnimatePresence mode="wait">
          <motion.div
            key="company"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <motion.img
              src="/teamImg.jpeg"
              alt="Company Overview"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              className="w-full h-96 object-cover rounded-3xl"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 bg-gradient-to-t from-black/40 via-transparent to-transparent">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                Welcome to Northsling
              </h3>
              <p className="text-lg sm:text-xl text-white drop-shadow-md">
                Discover everything about our company — leadership, careers, events, and achievements.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
