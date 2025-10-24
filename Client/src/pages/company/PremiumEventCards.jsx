import React from "react";

export default function PremiumEventCards() {
  const events = [
    {
      id: 1,
      title: "MWC25",
      date: "6 March, 2025",
      location: "Barcelona, Spain",
      tag: "Tech",
      price: "Free entry",
      image: "https://intglobal.com/wp-content/uploads/2025/01/unnamed-768x768.png",
    },
    {
      id: 2,
      title: "LEAP 2025",
      date: "12 February, 2025",
      location: "Riyadh, Saudi Arabia",
      tag: "Summit",
      price: "Paid",
      image: "https://intglobal.com/wp-content/uploads/2025/01/unnamed-2-768x768.png", 
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl sm:text-4xl text-gray-800 font-extrabold mb-6">Featured events</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <article
            key={event.id}
            className="relative rounded-2xl overflow-hidden shadow-xl group bg-gray-900"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 object-cover sm:h-80 lg:h-96 transform transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute left-6 bottom-6 right-6 text-white">
              <p className="text-sm uppercase tracking-wider text-slate-300">
                {event.date}
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold leading-tight">
                {event.title}
              </h3>
              <p className="mt-1 text-sm sm:text-base text-slate-200 flex items-center gap-2">
                <svg
                  className="w-4 h-4 opacity-80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {event.location}
              </p>

              <div className="mt-4 flex gap-3 items-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white/20 transition"
                >
                  View details
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <span className="ml-auto text-sm text-slate-300">
                  {event.price}
                </span>
              </div>
            </div>

            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 text-xs text-white font-semibold">
              {event.tag}
            </div>
          </article>
        ))}
      </div>

     
    </section>
  );
}
