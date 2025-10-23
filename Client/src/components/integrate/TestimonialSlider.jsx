import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    image: "https://img.freepik.com/premium-photo/confident-businessman-with-arms-crossed-office_107420-18774.jpg",
    quote:
      "From our point of view, you obviously helped us create value. When we started out with a product which barely worked and now we actually have a mature product used by thousands of users at hundreds of sites.",
    name: "Roger Lawton",
    title: "CEO, Somax Inc.",
  },
  {
    image: "https://img.freepik.com/premium-photo/photo-young-professional-diplomat-foreign-service-officer_1077802-128472.jpg",
    quote:
      "Northsling’s team transformed our project from concept to a robust, scalable solution that’s now trusted globally.",
    name: "Ankit Sharma",
    title: "CTO, FinNet Global",
  },
  {
    image: "https://img.freepik.com/premium-photo/expert-woman-software-engineering_975188-53348.jpg",
    quote:
      "We’re now delivering at a pace that’s 3x faster, thanks to the automation and UX revamp done by your team.",
    name: "Priya Verma",
    title: "Product Head, CloudData",
  },
  {
    image: "https://tse1.mm.bing.net/th/id/OIP.pFqcVa-wLxxMp2ytf2ZhzgHaFY?rs=1&pid=ImgDetMain&o=7&rm=3",
    quote:
      "The collaboration with Northsling has been outstanding. Their proactive communication and deep technical expertise accelerated our delivery timeline significantly.",
    name: "Jonathan Reed",
    title: "VP Engineering, NovaTech",
  },
  {
    image: "https://tse4.mm.bing.net/th/id/OIP.4mBGbY-ohaDr6epEttUPjQHaE7?w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3",
    quote:
      "Working with Northsling felt like having an in-house innovation lab. Every challenge we had turned into an opportunity for creative growth and digital excellence.",
    name: "Sara Malik",
    title: "Digital Strategy Lead, AeroNext",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-orange-50 to-orange-100 md:py-24 py-8 flex justify-center">
      <div className="max-w-6xl w-full px-6 relative overflow-hidden">
        <div className="relative w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (item, index) =>
                index === current && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 120 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -120 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center w-full"
                  >
                    {/* ✅ Image Section */}
                    <div className="md:w-1/2 w-full flex justify-center items-center bg-gray-50 md:py-12">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-98 object-cover rounded-2xl  shadow-xl  transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* ✅ Text Section */}
                    <div className="md:w-1/2 w-full p-10 md:p-14 text-center md:text-left">
                      <Quote className="text-orange-600 w-10 h-10 mb-5 mx-auto md:mx-0" />
                      <p className="text-gray-800 text-xl leading-relaxed mb-8 italic">
                        “{item.quote}”
                      </p>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600">{item.title}</p>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* ⬇️ Arrows Below (Centered) */}
        <div className="flex justify-center mt-10 gap-8">
          <button
            onClick={prevSlide}
            className="bg-white text-black p-4 rounded-full backdrop-blur-md transition"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-black  p-4 rounded-full backdrop-blur-md transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
