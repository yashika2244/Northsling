import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeaturedStoryCard() {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-sm tracking-[0.25em] text-gray-400 mb-10 uppercase">
        Featured Stories
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div className="relative group overflow-hidden rounded-2xl shadow-lg">
          <img
            src="featureSectionImg.jpeg"
            alt="Story"
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-cyan-400 text-sm font-semibold tracking-widest mb-3 uppercase">
            Case Study
          </p>
       <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">
  Technology · Cloud Solutions · Innovation · Future Ready
</p>
<h3 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
  <span className="text-cyan-400">Northsling</span> – Transforming <br />
  Businesses with AI Innovation
</h3>

          <a
            href="#"
            className="flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all"
          >
            Read More <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
