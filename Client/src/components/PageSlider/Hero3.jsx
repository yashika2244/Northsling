import React from "react";

const NUM_BUBBLES = 40;

export default function Hero3({ currentPage, setCurrentPage }) {
  const bubbles = Array.from({ length: NUM_BUBBLES }).map(() => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = 20 + Math.random() * 60;
    const duration = 5 + Math.random() * 10;
    const delay = Math.random() * 5;
    return { top, left, size, duration, delay };
  });

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#1a1a3a] to-[#000010] text-center flex flex-col md:justify-center px-6 pt-16 md:pt-0">
      
      {/* Floating Glowing Bubbles */}
      <div className="absolute inset-0">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            style={{
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animation: `floatBubble ${bubble.duration}s ease-in-out ${bubble.delay}s infinite alternate`,
              background: "radial-gradient(circle, rgba(0,255,255,0.15), transparent 70%)",
              borderRadius: "50%",
              position: "absolute",
              filter: "blur(8px)",
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
     <div className="relative z-10 max-w-4xl  md:pt-20  mx-auto flex flex-col items-center justify-center h-full space-y-6">
  <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
    Seamless Digital Experiences
  </h1>

  <p className="text-white/70 md:text-lg text-base leading-relaxed max-w-3xl">
    Welcome to our digital world! We craft seamless experiences that elevate brands, enhance user engagement, 
    and deliver measurable results. Our team focuses on intuitive designs, scalable solutions, and innovative ideas.
  </p>

  <div className="flex flex-wrap justify-center gap-4 mt-6">
    <a
      href="/cases"
      className="px-6 py-3 rounded-md bg-cyan-600 text-white font-semibold shadow-lg 
                 hover:bg-cyan-500 hover:scale-105 transition transform duration-300"
    >
      View Case Studies
    </a>
    <a
      href="/contact"
      className="px-6 py-3 rounded-md border-2 border-white text-white font-semibold 
                 hover:bg-white hover:text-cyan-600 hover:scale-105 transition transform duration-300"
    >
      Get in Touch
    </a>
  </div>

  {/* Mobile Dots */}
  <div className="flex justify-center gap-3 mt-auto mb-6 w-full">
    {[0,1,2,3].map((i) => (
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentPage ? "bg-white scale-125 shadow-md" : "bg-gray-400 hover:bg-white/70"
        }`}
      ></button>
    ))}
  </div>
</div>


      {/* Bubble Animation Keyframes */}
      <style>
        {`
          @keyframes floatBubble {
            0% { transform: translateY(0) scale(1); opacity: 0.3; }
            50% { transform: translateY(-80px) scale(1.1); opacity: 0.6; }
            100% { transform: translateY(-150px) scale(0.9); opacity: 0.2; }
          }
        `}
      </style>
    </section>
  );
}
