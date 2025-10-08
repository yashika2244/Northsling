import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaRocket, FaUsers } from "react-icons/fa";

const features = [
  { icon: <FaCheckCircle className="w-8 h-8 text-orange-500" />, text: "Trusted by top global brands." },
  { icon: <FaRocket className="w-8 h-8 text-orange-500" />, text: "Accelerating innovation across industries." },
  { icon: <FaUsers className="w-8 h-8 text-orange-500" />, text: "Client-focused solutions that deliver results." },
];

export default function FeatureImageSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50 text-gray-900 flex flex-col md:flex-row items-center gap-12">
      {/* Left Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://hr-gazette.com/wp-content/uploads/2018/10/bigstock-196164373.jpg"
          alt="Client Success"
          className="w-full h-auto rounded-3xl shadow-2xl object-cover"
        />
      </motion.div>

      {/* Right Features */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
          Why Companies Choose Northsling
        </h3>
        <p className="text-gray-700 text-lg mb-6">
          Northsling partners with global brands to deliver innovative, scalable, and impactful solutions that transform industries and drive measurable results.
        </p>
        <div className="space-y-4">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4">
              <div>{f.icon}</div>
              <p className="text-gray-700 text-lg">{f.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
