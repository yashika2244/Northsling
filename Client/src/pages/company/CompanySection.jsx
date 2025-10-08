import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Lightbulb, Users } from "lucide-react";

export default function CompanySection() {
  const info = [
    {
      icon: <Briefcase className="w-8 h-8 text-orange-500" />,
      title: "Our Mission",
      desc: "To empower businesses with smart, scalable digital solutions that drive innovation and sustainable growth.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Our Vision",
      desc: "To be a trusted global technology partner known for transforming ideas into impactful realities.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Our Values",
      desc: "Integrity, collaboration, and creativity guide everything we do — from concept to delivery.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-orange-50 md:py-24 py-12 px-6 md:px-16 overflow-hidden">
      {/* Soft floating orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100, y: -100 }}
        animate={{ opacity: 0.4, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 via-pink-100 to-transparent rounded-full blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto text-center md:text-left">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 text-center"
        >
          About Our Company
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-14 text-center"
        >
          We are a forward-thinking technology company dedicated to delivering
          exceptional digital experiences. Our teams combine creativity and
          engineering excellence to help organizations thrive in the digital
          era.
        </motion.p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {info.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-block bg-orange-500 text-white text-lg font-medium px-8 py-3 rounded-full shadow-md hover:bg-orange-600 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
