import React from "react";

export default function Hero4() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-img2.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Elevate with <span className="text-cyan-400">Northsling</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
          Empower your business with AI-powered solutions, seamless automation, and innovative workflows. 
          Drive growth, innovate faster, and stay ahead in the digital universe.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/services"
            className="px-6 py-3 rounded-md bg-cyan-500 text-white font-medium
                       hover:bg-cyan-400 transition duration-300"
          >
            Explore Solutions
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-md border border-cyan-400 text-cyan-400 font-medium
                       hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
