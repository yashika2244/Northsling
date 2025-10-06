import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const sections = [
  "About the Company",
  "Board of Directors",
  "Careers / Job Openings",
  "Awards",
  "Events & Talk",
  "INT. Foundation",
];

const sectionContent = {
  "About the Company": {
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    title: "About the Company",
    description:
      "We are a global digital transformation partner focused on building cutting-edge solutions that empower businesses to scale, innovate, and thrive in a rapidly changing world.",
  },
  "Board of Directors": {
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    title: "Board of Directors",
    description:
      "Our leadership team brings together decades of expertise across technology, business, and strategy to guide our vision and uphold our values of innovation and excellence.",
  },
  "Careers / Job Openings": {
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    title: "Careers / Job Openings",
    description:
      "Join our diverse team of innovators and creators. Explore exciting opportunities that inspire growth, creativity, and professional development.",
  },
  Awards: {
    image:
      "https://images.unsplash.com/photo-1573166364524-8bb07e5e4a7b?auto=format&fit=crop&w=1200&q=80",
    title: "Awards",
    description:
      "Our commitment to quality and innovation has earned us numerous industry accolades recognizing our excellence in digital delivery and client satisfaction.",
  },
  "Events & Talk": {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    title: "Events & Talk",
    description:
      "We actively participate in global events, thought leadership summits, and tech conferences to share our insights and learn from industry pioneers.",
  },
  "INT. Foundation": {
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    title: "INT. Foundation",
    description:
      "Through INT. Foundation, we give back to the community — fostering education, sustainability, and equal opportunities for all.",
  },
};

export default function CompanyAbout() {
  const [activeSection, setActiveSection] = useState("About the Company");

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans mx-2 mt-2 rounded-2xl">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-4 md:p-10 flex flex-col lg:flex-row gap-6 shadow-lg">
        {/* ===== Sidebar ===== */}
        <div className="w-full lg:w-72 bg-white/80 backdrop-blur-xl shadow-md border-b lg:border-b-0 lg:border-r border-orange-200 p-4 flex flex-col sticky top-16 z-10 rounded-xl">
          <h1 className="text-xl sm:text-2xl font-extrabold mb-4 text-black text-center lg:text-left">
            Company Info
          </h1>
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible space-x-3 lg:space-x-0 lg:space-y-3 scrollbar-hide">
            {sections.map((section) => (
              <motion.div
                key={section}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveSection(section)}
                className={`whitespace-nowrap px-4 py-2 rounded-full lg:rounded-xl text-sm cursor-pointer transition-all duration-300 ${
                  activeSection === section
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white hover:bg-orange-100 text-gray-700 border border-orange-100"
                }`}
              >
                {section}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== Content Section ===== */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl shadow-xl border border-orange-100 p-6 md:p-10"
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {sectionContent[activeSection].title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {sectionContent[activeSection].description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-orange-600 font-medium mt-4"
                >
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Image Card */}
              <div className="relative w-full sm:w-72 h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md">
                <motion.img
                  key={activeSection + "-img"}
                  src={sectionContent[activeSection].image}
                  alt={activeSection}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
