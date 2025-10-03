import React from "react";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    type: "Report",
    image: "divimg1.jpg",
    category: "Zero Trust, Cybersecurity, Cloud Strategy, IT Leadership",
    title: "Mastering Cloud: Turning Complexity into Competitive Advantage",
    link: "#",
  },
  {
    type: "Report",
    image: "/divimg2.webp",
    category: "Leadership, Digital Strategy, Innovation",
    title: "Overcoming Leadership Barriers in Digital Transformation",
    link: "#",
  },
  {
    type: "White Paper",
    image: "divimg3.webp",
    category: "Zero Trust, Cybersecurity Strategy, IT Security",
    title: "Implementing Zero Trust: Modern Strategies for Cybersecurity",
    link: "#",
  }
];

export default function StoryGrid() {
  return (
    <div className="bg-white text-gray-800 py-20 px-6 md:px-20 overflow-hidden">
      {/* Section Heading */}
      <h2 className="text-4xl font-extrabold mb-16 text-center tracking-tight">
        Insights & <span className="text-orange-500">Resources</span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {stories.map((story, i) => (
          <div
            key={i}
            className="group relative bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-200 hover:border-orange-400 shadow-md hover:shadow-orange-200 transition-all duration-500 flex flex-col"
          >
            {/* IMAGE */}
            {story.image ? (
              <div className="overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="w-full h-56 bg-gradient-to-br from-orange-300 to-yellow-200 flex items-center justify-center text-lg font-bold text-gray-800 tracking-wide">
                {story.type}
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">
                {story.type}
              </span>

              {story.category && (
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-3">
                  {story.category}
                </p>
              )}

              <h3 className="text-xl font-bold leading-snug mb-6 group-hover:text-orange-500 transition-colors">
                {story.title}
              </h3>

              {/* Button Style Link */}
              <div className="mt-auto">
                <a
                  href={story.link}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-200/30 text-orange-500 text-sm font-medium hover:bg-orange-200/50 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
