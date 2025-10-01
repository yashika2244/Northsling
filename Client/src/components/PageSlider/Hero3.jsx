import React from "react";

const NUM_BUBBLES = 50;

export default function Hero3() {
  const bubbles = Array.from({ length: NUM_BUBBLES }).map(() => {
    const top = Math.random() * 100; // random top position
    const left = Math.random() * 100; // random left position
    const size = 20 + Math.random() * 40; // random size 20px to 60px
    const duration = 3 + Math.random() * 7; // random animation duration 3s to 10s
    return { top, left, size, duration };
  });

  return (
    <section className="relative h-screen text-center overflow-hidden">
      {/* Bubbles Background */}
      <div className="wrapper">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            style={{
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              height: `${bubble.size}px`,
              width: `${bubble.size}px`,
              animation: `animate ${bubble.duration}s linear infinite`,
            }}
          >
            <span
              style={{
                height: `${bubble.size / 5}px`,
                width: `${bubble.size / 5}px`,
              }}
            ></span>
          </div>
        ))}
      </div>

      {/* Content */}
     <div className="relative z-10 px-6 flex flex-col items-center justify-start h-full pt-16 space-y-8 text-center max-w-4xl mx-auto">


  {/* Main Hero Content */}
  <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
    Seamless Digital Experiences
  </h1>
    {/* Subheading / Extra descriptive text */}
  <p className="text-white/70 text-base md:text-lg leading-relaxed">
    Welcome to our digital world! We craft seamless experiences that elevate brands, enhance user engagement, and deliver measurable results. 
    Our team focuses on intuitive designs, scalable solutions, and innovative ideas to bring your vision to life. 
    Explore our work and see how we can transform your business digitally.
  </p>
  <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
    We design and build intuitive solutions that enhance user engagement
    and create lasting impact.
  </p>

  {/* Buttons */}
  <div className="flex justify-center gap-4 flex-wrap mt-4">
    <a
      href="/cases"
      className="px-6 py-3 rounded-md bg-white text-indigo-600 font-semibold hover:bg-gray-200 shadow-lg transition"
    >
      View Case Studies
    </a>
    <a
      href="/contact"
      className="px-6 py-3 rounded-md border border-white text-white hover:bg-white hover:text-indigo-600 shadow-md transition"
    >
      Get in Touch
    </a>
  </div>
</div>

    </section>
  );
}
