import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function UI() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-img3.jpeg')" }} 
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      <div className="relative z-10 max-w-3xl">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          They Click. Or They Leave. <br />
          Your <span className="text-orange-400">Interface</span> Decides.
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg text-gray-200 font-medium">
          UI/UX That Turns Clicks into Customers – Your interface isn’t just how your product looks — it’s how it wins.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition">
            Schedule a meeting
          </button>
          <button className="border border-gray-400 hover:border-white px-6 py-3 rounded-lg font-semibold transition">
            Read Success Stories
          </button>
        </div>

        {/* Ratings */}
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <Rating logo="Google" rating={4.0} />
          <Rating logo="Clutch" rating={4.5} />
          <Rating logo="glassdoor" rating={4.5} logoColor="text-green-500" />
        </div>
      </div>
    </section>
  );
}

function Rating({ logo, rating, logoColor = "" }) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-500"}`}
    />
  ));

  return (
    <div className="flex items-center gap-2">
      <span className={`text-lg font-bold ${logoColor}`}>{logo}</span>
      <span className="flex">{stars}</span>
      <span className="font-semibold">{rating}</span>
    </div>
  );
}
