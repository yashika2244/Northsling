import React from "react";
import { motion } from "framer-motion";

export default function PartnersSection({
  title = "Our Trusted Cloud Partners",
  subtitle = "Partnering with industry leaders to deliver secure and scalable cloud transformations.",
  partners = [],
  themeColor = "orange",
}) {
  const accent = `text-${themeColor}-600`;
  const borderAccent = `hover:border-${themeColor}-300`;

  return (
    <section className={`py-20 bg-gradient-to-br from-white via-${themeColor}-50/30 to-pink-50`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-3">
            {title.includes("Northsling") ? (
              <>
                Cloud Migration, the{" "}
                <span className={accent}>Northsling</span> Way Through Our  Partners
              </>
            ) : (
              <span>{title}</span>
            )}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${borderAccent} p-8`}
            >
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {partner.name}
                </h3>
              </div>

              <p className="text-gray-600 mb-5">{partner.benefit}</p>

              {partner.capabilities && (
                <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
                  {partner.capabilities.map((cap, i) => (
                    <li key={i}>{cap}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
