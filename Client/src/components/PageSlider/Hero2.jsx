import React from "react";

export default function Hero2() {
  return (
    <section 
      className="relative flex items-start md:items-center justify-center h-screen text-center overflow-hidden"
      style={{
        backgroundImage: `url('/bg-image1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 px-6 mt-16 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl leading-tight">
          Innovating the Future
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-sm">
          We craft modern solutions with cutting-edge technology to drive innovation, 
          deliver impact, and help your business thrive in the digital era.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/about"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-white font-semibold 
                       hover:scale-105 hover:shadow-2xl transition transform duration-300"
          >
            Learn More
          </a>
          <a
            href="/services"
            className="px-8 py-3 rounded-full border border-gray-400 text-gray-200 hover:bg-gray-200 hover:text-gray-900 
                       hover:scale-105 hover:shadow-lg transition transform duration-300"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
