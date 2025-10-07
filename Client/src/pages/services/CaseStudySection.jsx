import React from "react";

const caseStudies = [
  {
    id: 1,
    title: "Creative Talent, Freelancers, Artists",
    heading: "Connecting Top Creators with Exciting Opportunities Worldwide",
    img: "https://images.unsplash.com/photo-1581092334444-8c59f7b4b7e9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Design, Media, Content Creation",
    heading: "Empowering Teams to Build Stunning Creative Campaigns",
    img: "https://images.unsplash.com/photo-1581091870627-3e89e7a1e4e8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Technology, Innovation, Startups",
    heading: "Bridging Creators and Businesses for Seamless Collaboration",
    img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=600&q=80",
  },
];

export default function CaseStudySection() {
  return (
    <section className="bg-gray-50 text-gray-900 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm uppercase text-orange-500 font-semibold tracking-widest">
          Case Studies
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          How Northsling Connects Talent with Opportunities
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore stories of creators and businesses who leveraged Northsling to discover talent, scale projects, and collaborate globally.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {caseStudies.map((item) => (
          <div key={item.id} className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.heading}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-orange-500 uppercase mb-2 font-semibold">
                {item.title}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                {item.heading}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all">
          View All Case Studies
        </button>
      </div>
    </section>
  );
}
