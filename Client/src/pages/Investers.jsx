import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CompanyInsights() {
  const sidebarItems = [
    "Incorporation Information",
    "Financial Information",
    "Governance",
    "Our Committees",
    "Board of Directors",
    "Credit Rating",
  ];

  const articles = [
    {
      title: "India’s UPI Revolution Will Leave You Behind If You Don’t Act Now",
      image:
        "https://images.unsplash.com/photo-1633436371050-4e9c86a2a3cf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Overcoming Barriers to Generative AI in Life Sciences R&D",
      image:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "The Future of Cloud and Edge Computing in 2025",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Building Responsible AI for a Sustainable Future",
      image:
        "https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const [active, setActive] = useState(sidebarItems[0]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans mx-2 rounded-2xl mt-2">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-4 md:p-10 flex flex-col lg:flex-row gap-6 shadow-sm">
        {/* ===== Sidebar ===== */}
        <div className="w-full lg:w-72 bg-white/80 backdrop-blur-xl shadow-md border-b lg:border-b-0 lg:border-r border-orange-200 p-4 flex flex-col sticky top-16 z-10 rounded-none lg:rounded-2xl">
          <h1 className="text-xl sm:text-2xl font-extrabold mb-4 text-black text-center lg:text-left">
            Company Info
          </h1>

          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible space-x-3 lg:space-x-0 lg:space-y-3 scrollbar-hide">
            {sidebarItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActive(item)}
                className={`whitespace-nowrap px-4 py-2 rounded-full lg:rounded-xl text-sm cursor-pointer transition-all duration-300 ${
                  active === item
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white hover:bg-orange-100 text-gray-700 border border-orange-100"
                }`}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== Insights Grid ===== */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Latest Insights & Reports
            </h2>
            <a
              href="#"
              className="text-orange-500 text-sm font-medium hover:underline"
            >
              View All
            </a>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {articles.map((post, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition">
                      <ArrowUpRight className="w-5 h-5 text-gray-700" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-base md:text-lg font-semibold leading-snug">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
