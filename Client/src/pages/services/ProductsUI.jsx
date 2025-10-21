import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const data = {
  "Customer Experience": {
    services: [
      "UI/UX Design",
      "Website Redesign",
      "CMS Solutions",
      "Customer Portal Development",
      "CRM Integration",
    ],
    image:
      "https://tse3.mm.bing.net/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "Better Experiences, Happier Customers",
  },
  "Digital Engineering": {
    services: [
      "Custom App Development",
      "Legacy Modernization",
      "Business Process Management",
      "Product Engineering",
      "Quality Assurance (QA) & Quality Control (QC)",
      "Maintenance and Support",
    ],
    image:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1600",
    text: "Build smarter, faster, and scalable digital ecosystems.",
  },
  "AI and Analytics": {
    services: [
      "Data Lake & Business Intelligence",
      "Gen AI and Agentic AI",
      "AI Chatbots",
      "AI Models",
      "Advanced Analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1581091870622-7e0cdfbb6798?q=80&w=1600",
    text: "Unlock business insights using AI and data intelligence.",
  },
  "Cloud Services & DevOps": {
    services: [
      "Intelligent Infrastructure Management (iiM)",
      "Performance Optimization",
      "DevOps Excellence",
      "Cloud Consulting & Migration",
      "Cloud Email Solution",
    ],
    image:
      "https://images.unsplash.com/photo-1581091870622-7e0cdfbb6798?q=80&w=1600",
    text: "Unlock business insights using AI and data intelligence.",
  },
  Cybersecurity: {
    services: [
      "Cybersecurity Audits & Risk Assessments",
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Governance, Risk, and Compliance (GRC)",
      "Cyber Insurance & Incident Response",
      "Email Threat Protection & Compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1581091870622-7e0cdfbb6798?q=80&w=1600",
    text: "Unlock business insights using AI and data intelligence.",
  },
  "Integrated Digital Marketing": {
    services: [
      "Unified KPI Visibility",
      "Digital Asset Optimization",
      "Full-Funnel Growth",
      "Media and Communication Excellence",
    ],
    image:
      "https://images.unsplash.com/photo-1581091870622-7e0cdfbb6798?q=80&w=1600",
    text: "Unlock business insights using AI and data intelligence.",
  },
  "Managed Services": {
    services: ["Flexi", "Dedicated", "Managed Dedicated", "Fix-Bid"],
    image:
      "https://images.unsplash.com/photo-1581091870622-7e0cdfbb6798?q=80&w=1600",
    text: "Unlock business insights using AI and data intelligence.",
  },
  Products: {
    services: ["Breeze", "Mobilearn", "Origin Insurance", "Video Banking"],
    image:
      "https://images.unsplash.com/photo-1581091870622-7e0cdfbb6798?q=80&w=1600",
    text: "Unlock business insights using AI and data intelligence.",
  },
};

export default function ServicesPanel() {
    const location = useLocation();
  // const categories = Object.keys(data);

  const categories = [
    "Customer Experience",
    "Digital Engineering",
    "AI and Analytics",
    "Cloud Services & DevOps",
    "Cybersecurity",
    "Integrated Digital Marketing",
    "Managed Services",
    "Products",
  ];


    
  const normalize = (str) =>
    str.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-");

    const getActiveFromURL = () => {
    const path = location.pathname.toLowerCase();
    for (let cat of categories) {
      const services = data[cat].services.map((s) =>
        `/services/${normalize(s)}`.toLowerCase()
      );
      if (services.includes(path)) return cat;
    }
    return "Customer Experience"; // fallback
  };
const [active, setActive] = useState(getActiveFromURL());
  // Re-run when the route changes
  React.useEffect(() => {
    setActive(getActiveFromURL());
  }, [location.pathname]);
  return (
    <div className="relative hide-scrollbar bg-gradient-to-br from-white via-orange-50 to-white text-gray-800 rounded-3xl shadow-xl border border-orange-100 flex flex-col sm:flex-row overflow-hidden max-w-8xl md:mx-6 mb-16">
      {/* Mobile Categories - Horizontal Scroll */}
      <div className="sm:hidden overflow-x-auto  py-4 px-2 flex gap-2">
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
      <div className="hidden hide-scrollbar  sm:w-1/3 sm:flex bg-white/60 backdrop-blur-xl border-b sm:border-b-0 border-orange-100 p-5 sm:p-4 flex-col rounded-l-3xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
          Our Capabilities
        </h2>

        <div className="flex flex-col space-y-2 overflow-y-auto max-h-[480px] hide-scrollbar py-4 px-2 rounded-lg border scrollbar-thumb-orange-200 pr-2 border-gray-100">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.02, x: 5 }}
              onClick={() => setActive(cat)}
              className={`relative text-left px-5 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none ${
                active === cat
                  ? " text-orange-700 border-r-4 border-orange-500 shadow-sm"
                  : "bg-white/70  text-gray-800 hover:text-orange-700 hover:shadow-sm hover:border-r-4 border-orange-500"
              }`}
            >
              {cat}
              {active === cat && (
                <motion.span
                  layoutId="activeGlow"
                  className="absolute inset-0 rounded-xl"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative bg-gradient-to-br from-white/90 via-orange-50/40 to-white/80 backdrop-blur-xl p-6 sm:p-10 grid sm:grid-cols-2 gap-10 items-start rounded-3xl">
        {/* Services */}
        <div className="flex flex-col space-y-6 ">
          <div className="flex justify-between items-center mb-2 ">
            <h3 className="text-3xl font-bold tracking-tight bg-gray-600 bg-clip-text text-transparent">
              Our Services
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm text-orange-600 font-medium hover:underline hover:text-orange-700"
            >
              Explore All
            </motion.button>
          </div>

       <div className="space-y-3">
  {data[active]?.services.map((service, i) => {
    const route = `/services/${normalize(service)}`; // <- fix here
    return (
      <motion.div
        key={service}
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.08 }}
        whileHover={{ x: 8 }}
      >
        <Link
          to={route}
          className="flex items-center justify-between border border-transparent hover:border-orange-100 bg-white/60 hover:bg-white/90 rounded-xl px-4 py-3 shadow-sm hover:shadow-md group transition-all duration-300"
        >
          <span className="group-hover:text-orange-600 text-gray-800 font-medium transition-colors">
            {service}
          </span>
          <ArrowUpRight
            size={18}
            className="opacity-0 group-hover:opacity-100 text-orange-500 transition-all transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    );
  })}
</div>

        </div>

        {/* Image + Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl shadow-xl group"
          >
            <motion.img
              src={data[active]?.image}
              alt={active}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              className="w-full h-72 sm:h-96 object-cover rounded-3xl brightness-90 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 sm:p-8">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-2xl font-semibold text-white leading-snug drop-shadow-lg"
              >
                {data[active]?.text}
              </motion.p>
            </div>

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-400/40 blur-3xl rounded-full animate-pulse" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
