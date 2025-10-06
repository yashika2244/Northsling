import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const servicesData = {
  "Customer Experience": [
    "UI/UX Design",
    "Website Redesigning",
    "CMS Development",
    "Customer & Channel Portal",
    "CRM Solutions",
  ],
  "Digital Engineering": [
    "Web & Mobile App Development",
    "API Integration",
    "Product Modernization",
  ],
  "AI and Analytics": ["Predictive Insights", "Data Visualization", "Chatbots"],
  "Cloud Services & DevOps": [
    "Cloud Migration",
    "CI/CD Automation",
    "Infrastructure Management",
  ],
  Cybersecurity: ["Threat Detection", "Data Protection", "Vulnerability Testing"],
  "Integrated Digital Marketing": [
    "SEO",
    "Social Media Marketing",
    "Email Campaigns",
  ],
  "Managed Services": ["IT Support", "System Monitoring", "Helpdesk"],
  Products: ["SaaS Solutions", "Custom Tools", "Enterprise Products"],
};

// Map each category to a relevant image
const categoryImages = {
  "Customer Experience":
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "Digital Engineering":
    "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=1200&q=80",
  "AI and Analytics":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  "Cloud Services & DevOps":
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  Cybersecurity:
    "divimg3.webp",
  "Integrated Digital Marketing":
    "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1200&q=80",
  "Managed Services":
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  Products:
    "product.jpg",
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("Customer Experience");
const navigate = useNavigate();
  return (
    <div className="min-h-screen font-sans mx-3 px-2  rounded-2xl mt-2 bg-gray-100 flex flex-col md:flex-row md:pt-0">
      {/* Sidebar */}
      <div className="w-full md:w-72 md:mt-2 bg-white/80 backdrop-blur-xl  shadow-md border-b md:border-b-0 md:border-r border-orange-200 p-3 sm:p-5 flex flex-col sticky top-16 z-10 rounded-2xl">
        <h1 className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-5 text-black tracking-tight text-center md:text-left">
          Our Services
        </h1>

        {/* Category List */}
        <div className="flex md:block overflow-x-auto custom-scroll  md:overflow-visible space-x-2 sm:space-x-3 md:space-x-0 md:space-y-3 scrollbar-hide pb-1">
          {Object.keys(servicesData).map((category) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-3 sm:px-4 py-2 rounded-full md:rounded-xl text-xs sm:text-sm cursor-pointer transition-all duration-300 ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white hover:bg-orange-100 text-gray-700 border border-orange-100"
              }`}
            >
              {category}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content + Image Section */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 p-3 sm:p-5 md:p-10">
        {/* Left Column: Services List */}
        <div className="flex-1">
          {/* Heading + Description */}
          <div className="flex flex-col justify-between items-center mb-6 sm:mb-8 text-center lg:text-left">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-0">
              {activeCategory}
            </h2>
            <p className="text-gray-600 max-w-lg text-xs sm:text-sm md:text-base">
              Explore our wide range of solutions designed to grow your business with
              creativity, innovation, and customer delight.
            </p>
          </div>

          {/* Services List */}
        <AnimatePresence mode="wait">
  {servicesData[activeCategory].length > 0 ? (
    <motion.ul
      key={activeCategory}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {servicesData[activeCategory].map((service) => (
        <motion.li
          key={service}
          whileHover={{ scale: 1.03 }}
          className="p-4 sm:p-5 bg-white rounded-xl shadow-md hover:shadow-xl border border-orange-100 transition-all duration-300 cursor-pointer group"
       onClick={() => {
  const routeName = service
    .toLowerCase()
    .replace(/\//g, "-")  // <-- added this
    .replace(/\s+/g, "-");
  navigate(`/services/${routeName}`);
}}
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800 text-sm sm:text-base">
              {service}
            </span>
            <motion.span
              whileHover={{ x: 5 }}
              className="text-orange-500 text-lg font-bold"
            >
              ↗
            </motion.span>
          </div>
          <p className="text-gray-500 mt-2 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Learn more about our {service.toLowerCase()} solutions.
          </p>
        </motion.li>
      ))}
    </motion.ul>
  ) : (
    <p className="text-gray-500 mb-8 text-center text-sm sm:text-base">
      No services available in this category yet.
    </p>
  )}
</AnimatePresence>

        </div>

        {/* Right Column: Dynamic Image */}
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
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
            <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
              Better Experiences, Happier Customers
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base max-w-md">
              We craft seamless user journeys that connect, convert, and delight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
