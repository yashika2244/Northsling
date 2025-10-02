import { useState } from "react";
import { motion } from "framer-motion";

const locations = {
  AMERICAS: [
    { country: "Argentina", img: "location1.jpeg" },
    { country: "Canada", img: "location3.webp" },
    { country: "Colombia", img: "location2.webp" },
    { country: "Dominican Republic", img: "location4.jpg" },
  ],
  EMEA: [
    { country: "France", img: "location5.jpeg" },
    { country: "Germany", img: "location6.jpeg" },
    { country: "UAE", img: "location7.webp" },
  ],
  APAC: [
    { country: "India", img: "location8.webp" },
    { country: "Japan", img: "location9.webp" },
    { country: "Australia", img: "location10.jpeg" },
  ],
};

export default function Locations() {
  const [activeTab, setActiveTab] = useState("AMERICAS");
  const [search, setSearch] = useState("");

  const filteredLocations = locations[activeTab].filter((loc) =>
    loc.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white px-6 sm:px-10 py-16">
      <div className="text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Our Locations
        </motion.h1>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 text-lg mb-6">
          {Object.keys(locations).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-cyan-500 text-black font-semibold shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a country..."
            className="px-4 py-2 w-full max-w-md rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-gray-200 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Locations Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {filteredLocations.length > 0 ? (
          filteredLocations.map((loc, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.07, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-900 border border-gray-800 group">
                <div className="relative">
                  <img
                    src={loc.img}
                    alt={loc.country}
                    className="h-52 w-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
                  <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl font-bold tracking-wide text-white drop-shadow-lg">
                    {loc.country}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 text-lg">
            No locations found.
          </div>
        )}
      </motion.div>
    </div>
  );
}
