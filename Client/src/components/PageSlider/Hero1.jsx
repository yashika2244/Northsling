import React from "react";

export default function Hero1() {
  const twinkles = Array.from({ length: 40 });
  const orbs = Array.from({ length: 5 });

  return (
   <section className="relative min-h-screen flex flex-col justify-start md:justify-center items-center text-center overflow-hidden px-6 bg-gray-900 pt-24 md:pt-0">
      {/* 🌌 Overlay */}
    <div className="absolute inset-0 bg-black/40 z-0"></div>
      {/* 🌟 Subtle Stars */}
      <div className="twinkle absolute inset-0">
        {twinkles.map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white/80"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animation: `fadeStar ${Math.random() * 4 + 3}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 6}s`,
              opacity: 0.6,
            }}
          ></div>
        ))}
      </div>

      {/* 🌀 Orbs */}
      <div className="orbs absolute inset-0">
        {orbs.map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full bg-cyan-400/10 blur-3xl"
            style={{
              width: `${Math.random() * 180 + 120}px`,
              height: `${Math.random() * 180 + 120}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animation: `drift ${Math.random() * 30 + 20}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* 🌌 Content */}
    <div className="relative z-10 max-w-4xl text-center px-4">
    {/* 🔖 Tagline */}
    <span className="inline-block text-sm md:text-base font-medium tracking-wide text-cyan-300 mb-4">
      Empowering Digital Transformation
    </span>

    {/* 🔥 Heading */}
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white">
      Welcome to Northsling
      <br className="hidden md:block" />
      <span className="text-cyan-300"> Innovate</span>,{" "}
      <span className="text-teal-300">Automate</span> &{" "}
      <span className="text-indigo-300">Elevate</span>
    </h1>

    {/* ✨ Subheading */}
    <p className="mt-6 text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
      Take your business beyond limits with{" "}
      <span className="text-cyan-300 font-medium">AI-powered</span> solutions, 
      cloud innovation, and seamless automation. Build smarter workflows, 
      drive growth, and stay ahead in the ever-evolving digital universe.
    </p>

    {/* 🎯 CTA Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
      <a
        href="/services"
        className="px-6 py-3 rounded-lg bg-cyan-600 text-white font-medium 
                   hover:bg-cyan-500 transition-all duration-300"
      >
        Explore Solutions
      </a>

      <a
        href="/contact"
        className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-300 font-medium 
                   hover:bg-cyan-500 hover:text-white transition-all duration-300"
      >
        Contact Us
      </a>
    </div>
    </div>
      {/* Animations */}
      <style>{`
        @keyframes fadeStar {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        @keyframes drift {
          0% { transform: translate(0, 0); }
          50% { transform: translate(40px, -30px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </section>
  );
}
