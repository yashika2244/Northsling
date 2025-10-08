import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaIndustry, FaUsers, FaSmile, FaAward } from "react-icons/fa";

const stats = [
  { icon: <FaIndustry className="w-10 h-10 text-orange-400" />, number: 25, suffix: "+", label: "Industries Served" },
  { icon: <FaUsers className="w-10 h-10 text-orange-400" />, number: 100, suffix: "+", label: "Clients Worldwide" },
  { icon: <FaSmile className="w-10 h-10 text-orange-400" />, number: 98, suffix: "%", label: "Client Satisfaction" },
  { icon: <FaAward className="w-10 h-10 text-orange-400" />, number: 15, suffix: "+", label: "Years of Expertise" },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      if (start >= target) {
        clearInterval(timer);
        start = target;
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
}

export default function SuccessStats() {
  return (
    <section className="relative py-28 px-6 md:px-20 bg-gray-900 text-white overflow-hidden rounded-3xl">
      {/* Decorative gradient shapes */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[25rem] h-[25rem] bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 25, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[30rem] h-[30rem] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mb-12 md:mb-0"
      >
        <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Our Impact in Numbers</h3>
        <p className="text-gray-300 text-lg md:text-xl">
          Northsling has helped transform industries with measurable success. Here's a quick look at our achievements and the global impact we've made.
        </p>
      </motion.div>

      {/* Right Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-12 md:mt-0">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="p-4 bg-orange-600 rounded-full flex items-center justify-center">
              {s.icon}
            </div>
            <div>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-1">
                <Counter target={s.number} suffix={s.suffix} />
              </h4>
              <p className="text-gray-300 text-lg">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
