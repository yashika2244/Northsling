import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function OurPeople() {
  const testimonials = [
    {
      quote:
        "The best thing about Northling is the people who work here. Everyone brings creativity and passion that makes each day exciting and full of learning.",
      name: "Aarav Mehta",
      role: "Senior Product Designer",
    },
    {
      quote:
        "Northling is a place where ideas turn into impact. The team encourages innovation, collaboration, and constant growth — it’s more than just work.",
      name: "Sara Kapoor",
      role: "Software Engineer",
    },
    {
      quote:
        "Working at Northling feels like being part of a movement — a culture that values curiosity, kindness, and continuous improvement.",
      name: "Rohan Iyer",
      role: "Data Analyst",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center px-6 md:px-20 py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      {/* --- Abstract glowing circles background --- */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* --- Content --- */}
      <div className="relative z-10 max-w-5xl text-center">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-sm tracking-[0.25em] font-semibold text-orange-400 mb-6"
        >
          Our People
        </motion.h4>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-4xl font-light leading-relaxed max-w-4xl mx-auto text-white/90">
                “{testimonials[index].quote}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-xl text-orange-400">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-white/70">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-14">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-white/20 hover:border-orange-400 hover:bg-orange-400/10 transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="text-sm tracking-widest uppercase font-medium text-white/70">
              <span className="text-orange-400 font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>{" "}
              / {String(testimonials.length).padStart(2, "0")}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-white/20 hover:border-orange-500 hover:bg-orange-400/10 transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
    </section>
  );
}
