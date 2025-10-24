import React, { useState } from "react";

export default function WhySection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block   after:h-1 after:bg-gray-800 after:mx-auto md:after:mx-0 after:mt-2">
          Why Northsling?
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0 mb-10 text-lg">
          At Northsling, we ensure you have the resources and support you need to excel in your career.
          Our team of 1100+ self-starting, fun-loving, mission-driven individuals are passionate 
          about purposeful innovation. We believe in equality and creating equal opportunities. 
          We have received the Great Place to Work® Certification for building an outstanding 
          workplace, with an industry-leading, people-centric culture through our HR initiatives.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 text-center hover:shadow md:hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold text-gray-900">1100+</h3>
            <p className="text-gray-500">Innovative Team Members</p>
          </div>
          
          <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 text-center hover:shadow md:hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold text-gray-900">Great Place</h3>
            <p className="text-gray-500">Certified Workplace</p>
          </div>
          
          <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 text-center hover:shadow md:hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold text-gray-900">Purpose-Driven</h3>
            <p className="text-gray-500">Innovation Culture</p>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative max-w-5xl mx-auto">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4" // <-- यहां अपना MP4 वीडियो लिंक डालें
            className="w-full rounded-2xl shadow-lg object-cover"
            controls={isPlaying}
            autoPlay={isPlaying}
            onPlay={() => setIsPlaying(true)}
          />

          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white p-6 rounded-full shadow-md text-3xl font-bold">
                ▶
              </div>
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
