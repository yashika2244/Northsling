import React from "react";
const services = [
  {
    title: "Strategic Product Design",
    desc: "Craft innovative products with a human-centered design approach that drives impact.",
    image: "serviceImg1.webp",
  },
  {
    title: "Digital Transformation",
    desc: "Accelerate your business growth by embracing digital technologies and modern workflows.",
    image: "serviceImg2.png",
  },
  {
    title: "AI & Data Engineering",
    desc: "Leverage AI, machine learning, and data insights to optimize operations and outcomes.",
    image: "serviceImg3.webp",
  },
  {
    title: "Software Product Development",
    desc: "Build scalable, high-quality software products using AI-assisted and human-driven engineering.",
    image: "serviceImg4.webp",
  },
  {
    title: "Technology Modernization",
    desc: "Upgrade your tech stack to reduce risks, improve efficiency, and unlock new opportunities.",
    image: "serviceImg5.jpg",
  },
  {
    title: "Embedded Systems & IoT",
    desc: "Develop cutting-edge embedded solutions and connected systems for IT/OT integration.",
    image: "serviceImg6.jpeg",
  },
];



export default function Services() {
  return (
 <section className="bg-gray-900 text-white py-16 px-6 lg:px-20">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      Explore Our Services
    </h2>
    <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
  Drive innovation and business growth with powerful insights, smart design, and advanced engineering.
</p>
  </div>

  <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {services.map((service, idx) => (
      <div
        key={idx}
        className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        {/* Text content */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-gray-300 mt-1">{service.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


  );
}
