import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function FinancialHighlights() {
  const data = [
    {
      year: "2022",
      revenue: "$950M",
      growth: "18%",
      profit: "$120M",
    },
    {
      year: "2023",
      revenue: "$1.2B",
      growth: "22%",
      profit: "$160M",
    },
    {
      year: "2024",
      revenue: "$1.5B",
      growth: "25%",
      profit: "$210M",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
        Financial Highlights
      </h2>
      <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
        A snapshot of Northsling's revenue, growth, and profit over the last few years, reflecting our consistent financial performance.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transform transition-all duration-300"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{item.year}</h3>
              <div className="flex items-center text-green-600 font-semibold">
                <FaArrowUp className="mr-1" />
                {item.growth}
              </div>
            </div>

            {/* Card Body */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Revenue</span>
                <span className="text-gray-900 font-bold">{item.revenue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Net Profit</span>
                <span className="text-gray-900 font-bold">{item.profit}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
