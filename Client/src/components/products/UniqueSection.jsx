import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://intglobal.com/wp-content/uploads/2025/06/app-unique-box-img-4-300x182.webp",
    title: "Next-Gen UX",
    description:
      "A clean, mobile-first interface that feels instantly familiar. Learners can like, share, and save bite-sized videos, making education as engaging as their favorite apps.",
  },
  {
    image:
      "https://intglobal.com/wp-content/uploads/2025/06/app-unique-box-img-5-300x182.webp",
    title: "Built for Speed",
    description:
      "Experience lightning-fast performance and offline access, so learning never stops — even on the move or in low-connectivity areas.",
  },
  {
    image:
      "https://intglobal.com/wp-content/uploads/2025/06/app-unique-box-img-6-300x182.webp",
    title: "Personalized for Everyone",
    description:
      "AI-driven recommendations tailor learning paths to each user, ensuring every moment spent on MobiLearn drives real growth and engagement.",
  },
  {
    image:
      "https://intglobal.com/wp-content/uploads/2025/06/app-unique-box-img-2-300x182.webp",
    title: "Gemiied Engagement with Leaderboards",
    description:
      "Faster healthy competition and motivation by ranking empolyee performance with stats",
  },
];

const UniqueSection = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Optional: Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gray-50 py-24 px-6 md:px-20 overflow-hidden">
      {/* Soft background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Slider */}
        <div className="relative flex items-center justify-center">
          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg w-full max-w-xs">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[index].image}
                src={slides[index].image}
                alt={slides[index].title}
                className="w-full h-auto object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-6 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:-right-6 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Text Slider (Syncs with image) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Makes <span className="text-orange-600">MobiLearn</span> Unique?
            </h2>

            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              {slides[index].title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {slides[index].description}
            </p>

            <motion.button
              className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Features
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UniqueSection;
