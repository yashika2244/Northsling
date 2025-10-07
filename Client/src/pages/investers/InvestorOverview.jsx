import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaGlobe, FaUsers, FaDollarSign, FaBuilding } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function AnimatedNumber({ value }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, latest => Math.floor(latest).toLocaleString());

  React.useEffect(() => {
    const controls = animate(motionValue, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, motionValue]);

  return <motion.span>{rounded}</motion.span>;
}

export default function InvestorOverview() {
  const highlights = [
    { 
      label: "Market Cap", 
      value: 280000, 
      icon: <FaDollarSign className="w-8 h-8 text-white" />,
      description: "Our current market capitalization reflecting investor confidence."
    },
    { 
      label: "Revenue (2024)", 
      value: 12000, 
      icon: <FaDollarSign className="w-8 h-8 text-white" />,
      description: "Projected revenue demonstrating strong business growth."
    },
    { 
      label: "Global Offices", 
      value: 45, 
      icon: <FaGlobe className="w-8 h-8 text-white" />,
      description: "Strategically located offices across continents."
    },
    { 
      label: "Employees", 
      value: 10000, 
      icon: <FaUsers className="w-8 h-8 text-white" />,
      description: "Talented workforce driving innovation and excellence."
    },
  ];

const cardGradient = "bg-white";



  return (
    <section className="relative md:py-28 py-6 bg-gradient-to-b from-white to-orange-50 px-6 md:px-20 overflow-hidden">
      {/* ===== Floating Shapes ===== */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-0 -left-10 w-48 h-48 bg-orange-200 rounded-full opacity-20 blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-0 -right-10 w-72 h-72 bg-yellow-200 rounded-full opacity-20 blur-3xl"
      ></motion.div>

      {/* ===== Heading ===== */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
        Northsling at a Glance
      </h2>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16">
        Discover the key metrics that highlight our growth, global presence, and workforce excellence. Northsling continues to innovate and create long-term value for stakeholders.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className={`relative bg-gradient-to-tr ${cardGradient} text-gray-700 p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center hover:scale-105 transform transition-all duration-300`}

          >
            <div className="mb-4 p-4 bg-orange-400 rounded-full  transition">
              {item.icon}
            </div>
            <motion.h3 className="text-3xl md:text-4xl font-bold">
              <AnimatedNumber value={item.value} />
              {item.label === "Global Offices" || item.label === "Employees" ? "+" : ""}
            </motion.h3>
            <p className="mt-2 text-lg font-medium">{item.label}</p>
            <p className="mt-2 text-sm text-gray-700 text-center">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
