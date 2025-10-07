import React from "react";
import { ArrowRight } from "lucide-react";

const careers = [
  {
    title: "Grow Your Design Career",
    desc: "We harness the power of our design talent with ESAM's engineering expertise to bring our customers’ ideas to life.",
    link: "#",
  },
  {
    title: "Grow Your Client Partner Career",
    desc: "We build strong partnerships with our customers and help them thrive in a market challenged by the pressures of digitization.",
    link: "#",
  },
];

export default function CreateCareerSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-6  px-6 md:px-16 overflow-hidden">
      {/* Decorative blob */}
    

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
          Create <br />
          <span className="font-semibold text-orange-600">Your Career</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Discover opportunities that align with your passion and expertise.
        </p>
      </div>

      {/* Career Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {careers.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
          >
            {/* Number Icon */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-semibold text-lg mb-6 shadow-md">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {item.desc}
            </p>

            {/* Link */}
            <a
              href={item.link}
              className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors duration-300"
            >
              Find your perfect role
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Bottom accent gradient */}
    </section>
  );
}
