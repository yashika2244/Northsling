import { motion } from "framer-motion";

const industries = [
  {
    name: "Manufacturing",
    image:
      "https://intglobal.com/wp-content/uploads/2025/05/ServingEvery-1-300x197.jpg",
  },
  {
    name: "Retail",
    image:
      "https://intglobal.com/wp-content/uploads/2025/05/ServingEvery-1-300x197.jpg",
  },
  {
    name: "Healthcare",
    image:
      "https://intglobal.com/wp-content/uploads/2025/05/ServingEvery-1-300x197.jpg",
  },
  {
    name: "Logistics",
    image:
      "https://intglobal.com/wp-content/uploads/2025/05/ServingEvery-1-300x197.jpg",
  },
  {
    name: "Corporate",
    image:
      "https://intglobal.com/wp-content/uploads/2025/05/ServingEvery-1-300x197.jpg",
  },
  {
    name: "Education",
    image:
      "https://intglobal.com/wp-content/uploads/2025/05/ServingEvery-1-300x197.jpg",
  },
];

const IndustriesSection = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Serving Every Industry That Demands{" "}
            <span className="text-orange-600">Smarter Teams</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            In today’s fast-paced industries, we help organizations build agile,
            capable teams that drive innovation and digital transformation.
            Whether you’re a startup or a global enterprise, we deliver the
            skills and technology to keep you ahead of the curve.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-40 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-blue-600/50 transition-all duration-500"></div>
              <p className="absolute bottom-3 left-4 text-white font-semibold text-sm md:text-base tracking-wide">
                {industry.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
