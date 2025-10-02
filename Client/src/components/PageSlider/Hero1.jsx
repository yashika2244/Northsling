import React from "react";

export default function Hero1() {
  const stars = Array.from({ length: 50 });
  const bubbles = Array.from({ length: 20 });

  return (
    <section className="relative pt-10 px-6 text-center overflow-hidden min-h-screen flex flex-col 
                        justify-start md:justify-center">
      {/* 🌠 Shooting Stars */}
      <div className="stars">
        {stars.map((_, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              "--star-tail-length": `${Math.random() * 5 + 5}em`,
              "--top-offset": `${Math.random() * 100}vh`,
              "--fall-duration": `${Math.random() * 5 + 5}s`,
              "--fall-delay": `${Math.random() * 10}s`,
              "--star-width": "2px",
            }}
          ></div>
        ))}
      </div>

      {/* 🫧 Bubbles */}
      <div className="bubbles">
        {bubbles.map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="bubble"
            style={{
              "--size": `${Math.random() * 30 + 10}px`,
              "--left": `${Math.random() * 100}%`,
              "--duration": `${Math.random() * 6 + 6}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mt-6 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md leading-tight">
          Transform{" "}
          <span className="bg-cyan-400 text-gray-900 px-1 rounded">Ideas</span>{" "}
          Into Impact
        </h1>

        <p className="mt-4 text-slate-200 max-w-3xl mx-auto text-lg md:text-xl drop-shadow-sm">
          Empower your business with cutting-edge cloud, AI, and software
          solutions that drive growth, efficiency, and innovation. From seamless
          automation to intelligent insights, we help you unlock your
          organization’s full potential and stay ahead in a fast-changing
          digital world.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/services"
            className="px-8 py-3 rounded-md border border-transparent bg-cyan-700 text-white font-semibold 
             hover:bg-transparent hover:border-cyan-400 hover:text-cyan-400 
             hover:scale-105 hover:shadow-2xl transition transform duration-300"
          >
            Explore Solutions
          </a>

          <a
            href="/contact"
            className="px-8 py-3 rounded-md border border-cyan-400 hover:bg-cyan-700  
                       text-cyan-500 hover:text-white hover:shadow-lg transition transform duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
