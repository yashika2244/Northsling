import React from "react";

export default function Hero2() {
  return (
    <section 
      className="relative flex flex-col md:flex-col items-center justify-start md:justify-center h-screen text-center overflow-hidden"
      style={{
        backgroundImage: `url('/bg-image1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-0"></div>

      {/* Content */}
      <div 
        className="
          relative z-10 px-6 max-w-4xl flex flex-col items-center 
          justify-start pt-20 space-y-6   /* Mobile: top aligned with padding */
          md:justify-center md:pt-0       /* Desktop: center aligned */
        "
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
          Innovating the <span className="text-cyan-400">Future</span>
        </h1>

        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
          We craft modern solutions with cutting-edge technology to drive 
          innovation, deliver measurable impact, and help your business 
          thrive in the digital era.
        </p>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
          From AI-powered platforms to intelligent automation and data-driven 
          strategies, our mission is to simplify complexity and unlock new 
          opportunities. 
        </p>

        <div className="mt-8 flex flex-row justify-center gap-5">
          <a
            href="/about"
            className="px-8 py-4 rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-semibold 
                       shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300"
          >
            Learn More
          </a>
          <a
            href="/services"
            className="px-8 py-4 rounded-md border-2 border-gray-400 text-gray-200 
                       hover:bg-gray-200 hover:text-gray-900 hover:scale-105 hover:shadow-lg transition transform duration-300"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
