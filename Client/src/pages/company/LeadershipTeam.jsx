// src/components/LeadershipTeam.jsx
import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Aarav Mehta",
    title: "Executive Chairman",
    img: "https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
{
  name: "Arjun Malhotra",
  title: "Chief Executive Officer & President",
  img: "https://tse1.mm.bing.net/th/id/OIP.tVA4W9dnMWQBb7kZW0sJbgHaH2?w=625&h=663&rs=1&pid=ImgDetMain&o=7&rm=3",
},

  {
    name: "Rohan Deshmukh",
    title: "Chief Financial Officer, SVP & Treasurer",
    img: "https://tse2.mm.bing.net/th/id/OIP.yCCHBJatPcyozdCjJykMSQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Maya Verma",
    title: "Chief Marketing & Strategy Officer, SVP",
    img: "https://www.techaxisinc.com/wp-content/uploads/2017/12/woman-at-work.jpg",
  },
];


export default function LeadershipTeam() {
  return (
    <section className="relative bg-gray-50 py-28 px-6 md:px-20 overflow-hidden">
      {/* Background Accent Circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-orange-100 to-pink-100 rounded-full opacity-30 -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-100 to-purple-100 rounded-full opacity-25 -z-10 animate-pulse-slow"></div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Meet the Northsling Leadership Team
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Our visionary leaders drive innovation, strategy, and global growth.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.08, y: -10 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden text-center p-6 cursor-pointer transition-transform duration-300 hover:shadow-2xl hover:shadow-indigo-300/30"
          >
            <div className="relative w-32 h-32 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full  p-[3px]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover bg-gray-100"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-500 mt-1 text-sm">{member.title}</p>
          </motion.div>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-20">
        <motion.button
          whileHover={{
            scale: 1.08,
            backgroundPosition: "100% 0",
            boxShadow: "0 12px 25px rgba(249, 115, 22, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 font-semibold rounded-full text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-[length:200%_200%] transition-all duration-500 tracking-wide shadow-lg"
        >
          SEE ALL
        </motion.button>
      </div>
    </section>
  );
}
