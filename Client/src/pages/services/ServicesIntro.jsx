import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Lightbulb, Users } from "lucide-react";

export default function ServicesIntro() {
  return (
    <section className="relative overflow-hidden  bg-gray-100 text-gray-900 py-24 px-6 md:px-12">
      {/*  Decorative Gradient Blobs */}
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-gradient-to-br from-orange-300/20 to-amber-200/40 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-tr from-amber-300/20 to-orange-200/40 rounded-full blur-3xl animate-pulse-slow" />

      {/*  Intro Text */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" />
          What We Offer
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold bg-gray-700 pb-2 bg-clip-text text-transparent tracking-tight">
          Transforming Vision Into Impact
        </h1>

        <p className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto">
          Innovative strategies, powerful solutions, and creative execution — designed to help you thrive in a world of change.
        </p>

        <a
          href="#"
          className="mt-8 inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Explore Our Work
        </a>
      </motion.div>

      {/* 🌟 Service Cards */}
      <div className="relative z-10 mt-20 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
            title: "Strategic Consulting",
            desc: "We craft tailored strategies that align with your vision and drive sustainable growth.",
          },
          {
            icon: <Rocket className="w-8 h-8 text-orange-500" />,
            title: "Digital Innovation",
            desc: "From product design to full-scale development, we build future-ready solutions.",
          },
          {
            icon: <Users className="w-8 h-8 text-orange-500" />,
            title: "Collaborative Growth",
            desc: "We partner with your team to turn ideas into reality, ensuring impact at every step.",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-8 text-center border border-orange-100 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 📝 Closing Statement */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto mt-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Empowering Northsling to <span className="text-orange-500">adapt, innovate,</span> and thrive.
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Whether you're optimizing operations or disrupting markets, our team blends creativity, technology, and strategy to unlock your business’s true potential.
        </p>
      </motion.div>
    </section>
  );
}
