// components/DigitalLensSection.jsx
import React from "react";

export default function DigitalLensSection() {
  return (
    <section className="relative w-full min-h-screen py-12  bg-gray-900 text-white flex md:px-20 md:py-10 overflow-hidden px-6 ">
      {/* Background subtle gradient circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-800 opacity-20 rounded-full blur-3xl "></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl "></div>

      <div className="relative max-w-4xl text-center md:text-left space-y-8">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Transforming the way you{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            experience
          </span>{" "}
          technology and innovation in your business.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
          We craft seamless digital experiences with creativity and strategy,
          empowering your business to grow, innovate, and lead in a tech-driven
          world.
        </p>

        {/* Stats / Customer Results */}
        <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start mt-6">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex-1 hover:scale-105 transform transition duration-300">
            <h2 className="text-3xl font-bold text-white">120+</h2>
            <p className="text-gray-400 mt-2">Clients Served</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex-1 hover:scale-105 transform transition duration-300">
            <h2 className="text-3xl font-bold text-white">85%</h2>
            <p className="text-gray-400 mt-2">Customer Retention</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex-1 hover:scale-105 transform transition duration-300">
            <h2 className="text-3xl font-bold text-white">50+</h2>
            <p className="text-gray-400 mt-2">Industries Covered</p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-10">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-cyan-400 text-black font-semibold rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
