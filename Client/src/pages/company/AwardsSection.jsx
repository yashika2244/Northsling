import React from "react";
import { motion } from "framer-motion";

export default function AwardsSection() {
  const logos = [
    {
      id: 1,
      src: "https://intglobal.com/wp-content/uploads/2025/02/500-1536x803.png",
      alt: "Deloitte Asia Pacific",
    },
    {
      id: 2,
      src: "https://intglobal.com/wp-content/uploads/2025/02/fast50-1536x958.png",
      alt: "Deloitte India",
    },
    {
      id: 3,
      src: "https://intglobal.com/wp-content/uploads/2025/01/Award-Image-2.png",
      alt: "Dun & Bradstreet SME Awards",
    },
    {
      id: 4,
      src: "https://intglobal.com/wp-content/uploads/2025/01/Award-Image-3.png",
      alt: "Top 100 SMEs of India",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* floating blur lights */}
      <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-blue-300/30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-200/40 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-orange-600 font-semibold mb-3">
            Award-winning
          </p>
          <h2 className="text-4xl  font-extrabold leading-snug text-gray-900 max-w-3xl mx-auto md:mx-0">
            Partner with an{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              award-winning organization
            </span>{" "}
            shaping the future.
          </h2>

          {/* Button now below heading */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
          >
            Connect with us
          </motion.a>
        </motion.div>

        {/* recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg p-10"
        >
          <p className="text-lg font-semibold text-gray-800 mb-8">
            Recognised by
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-12">
            {logos.map((logo) => (
              <motion.div
                key={logo.id}
                whileHover={{ scale: 1.08 }}
                className="transition-all"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 sm:h-12 object-contain opacity-100 hover:opacity-100  transition duration-300"
                />
              </motion.div>
            ))}

            <motion.span
              whileHover={{ x: 5 }}
              className="text-gray-800 font-semibold text-sm sm:text-base whitespace-nowrap cursor-pointer hover:underline"
            >
              and many more +
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
