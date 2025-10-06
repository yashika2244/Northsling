import React, { useState } from "react";
import { Search } from "lucide-react";

const categories = [
  "All",
  "AI and Analytics",
  "Cloud & DevOps",
  "Customer Experience",
  "Cybersecurity",
  "Digital Engineering",
  "Integrated Digital Marketing",
  "Managed Services",
];

const stories = [
  {
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    title: "Aditya Birla Health – Smart Underwriting Service",
    desc: "A model that combined wearable, financial, and social media data for an accurate Health Risk Score.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80",
    title:
      "Ageas Federal Life Insurance – Empowering Agents with a Full-Stack Digital Portal",
    desc: "Launched a mobile-first portal to digitize onboarding, proposals, and commissions for AFLI agents.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&w=800&q=80",
    title: "Ageas Federal Life Insurance – Reimagining Policyholder Experience",
    desc: "Built seamless, customer-first digital solutions improving user engagement and retention.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    title: "Ageas Insurance – Agile Remote Teams for Core Insurance",
    desc: "Developed flexible, high-performance teams driving insurance platform scalability and innovation.",
  },
];

export default function SuccessStoriesCards() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Search + Categories */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search success stories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}

                className="w-full rounded-full border border-orange-200 py-2.5 pl-10 pr-4 text-sm focus:ring-1 focus:ring-orange-400 text-black outline-none"
              />
              <Search
                size={18}
                className="absolute left-3 top-3.5 text-gray-400"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Story Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredStories.map((story, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-orange-600 transition">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {story.desc}
                </p>
                <button className="text-orange-500 text-sm font-medium hover:underline">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
