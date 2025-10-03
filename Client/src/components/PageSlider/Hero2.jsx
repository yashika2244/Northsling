import React from "react";

export default function Hero2({ currentPage, setCurrentPage }) {
  return (
    <section
      className="relative flex flex-col md:pt-20 items-center justify-start md:justify-center h-screen text-center overflow-hidden bg-gray-100"
   
    >
      {/* Soft Overlay for depth */}
      <div className="absolute inset-0 bg-white/20 z-0 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl flex flex-col items-center justify-start pt-20 space-y-6 md:justify-center md:pt-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 drop-shadow-md leading-tight">
          Innovating the <span className="text-orange-500">Future</span>
        </h1>

        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We craft modern solutions with cutting-edge technology to drive 
          innovation, deliver measurable impact, and help your business 
          thrive in the digital era.
        </p>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          From AI-powered platforms to intelligent automation and data-driven 
          strategies, our mission is to simplify complexity and unlock new 
          opportunities.
        </p>

        <div className="mt-8 flex flex-row flex-wrap justify-center gap-5">
          <a
            href="/about"
            className="px-8 py-4 rounded-xl bg-white/20 backdrop-blur-sm text-orange-600 font-semibold 
                       shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            Learn More
          </a>
          <a
            href="/services"
            className="px-8 py-4 rounded-xl border-2 border-orange-400 text-orange-600 
                       hover:bg-orange-100 hover:text-orange-700 hover:scale-105 hover:shadow-lg transition transform duration-300"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Navigation Dots */}
  
    </section>
  );
}
