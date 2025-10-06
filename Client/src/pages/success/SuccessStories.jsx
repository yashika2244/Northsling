import React from "react";

export default function SuccessStories() {
  return (
    <section className="relative flex flex-col -mt-18 items-center justify-center text-center min-h-[600px] md:min-h-[700px] px-6 overflow-hidden bg-gradient-to-b from-black to-blue-900">
      
      {/* Layered dark blue waves background */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full opacity-80"
        >
          <path
            fill="#1E3A8A" // deep blue
            fillOpacity="0.9"
            d="M0,128L80,133.3C160,139,320,149,480,160C640,171,800,181,960,176C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
          <path
            fill="#2563EB" // slightly lighter blue
            fillOpacity="0.6"
            d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,218.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-gray-100">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-blue-400">
          Success Stories
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Real results. Real impact. Stories of how{" "}
          <span className="text-blue-300 font-semibold">Northsling</span> turns
          challenges into growth.
        </p>
        <div className="mt-10">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg ">
            Explore Stories
          </button>
        </div>
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
    </section>
  );
}
