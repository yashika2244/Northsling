import React from "react";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function WhoWeAreSection({
  tag = "About Us",
  title = "Who We Are",
  highlightedText = "",
  description = "We go beyond maintaining operations—empowering businesses with data, insights, and best practices to stay ahead in an ever-evolving digital landscape.",
  stats = [
    { value: "27+", label: "Years of Excellence" },
    { value: "10", label: "Offices Worldwide" },
    { value: "1,100+", label: "Solution Experts" },
    { value: "500+", label: "Worldwide Happy Clients" },
  ],
  awards = [],
  primaryColor = "text-blue-600",
  swiperSlidesPerView = { 640: 3, 1024: 5 },
  swiperDelay = 2500,
}) {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16 text-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
        >
          <p className={`text-xs font-semibold tracking-widest ${primaryColor} mb-2`}>
            {tag.toUpperCase()}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            {title}{" "}
            {highlightedText && <span className={primaryColor}>{highlightedText}</span>}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">{description}</p>
        </motion.div>

        {/* Right Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform"
            >
              <h3 className={`text-4xl md:text-5xl font-extrabold ${primaryColor}`}>{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-2 text-center">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Recognition Slider */}
      {awards.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className={`text-xs font-semibold tracking-widest ${primaryColor} mb-6 text-center`}>
            RECOGNIZED BY
          </p>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: swiperDelay, disableOnInteraction: false }}
            breakpoints={swiperSlidesPerView}
            className="py-4"
          >
            {awards.map((src, i) => (
              <SwiperSlide key={i} className="flex justify-center items-center">
                <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
                  <img
                    src={src}
                    alt={`Award ${i + 1}`}
                    className="h-14 md:h-16 object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
    </section>
  );
}
