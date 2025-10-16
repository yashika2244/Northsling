import React from "react";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    logo: "https://cdn.worldvectorlogo.com/logos/rolls-royce.svg",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?crop=faces&fit=crop&w=200&h=200",
    text: `"Repeat Business is the best testament to a team’s ability to perform, and I have no hesitation in hiring them again. Their collaboration style and acumen catalyzed significant momentum towards achieving our objectives."`,
    name: "Rolls-Royce",
  },
  {
    logo: "https://logo.clearbit.com/iqvia.com",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200",
    text: `"They provide amazing development and design resources, along with best in class account management support. We were able to speed up product delivery while reducing costs."`,
    name: "IQVIA",
  },
  {
    logo: "https://logo.clearbit.com/instructure.com",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=faces&fit=crop&w=200&h=200",
    text: `"A trustworthy, knowledgeable, and adaptable development partner. They know how to push back and ask questions when appropriate, which adds real value."`,
    name: "Instructure",
  },
  {
    logo: "https://logo.clearbit.com/nextroll.com",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=200&h=200",
    text: `"By seamlessly integrating with the internal team, they helped achieve key objectives. Their onboarding and deliverables were exceptional."`,
    name: "NextRoll",
  },
  {
    logo: "https://logo.clearbit.com/rga.com",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=200&h=200",
    text: `"Having access to such a strong talent pool has been hands down the best vendor decision our team has made."`,
    name: "R/GA",
  },
];

export default function BrandsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 relative">
        {/* Left Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Teamwork"
            className="rounded-3xl shadow-lg w-full h-[450px] object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug text-gray-900">
            We've stopped counting. <br />
            Over{" "}
            <span className="text-indigo-600 font-bold">500 brands</span> count
            on us.
          </h2>
          <p className="text-gray-600 max-w-md">
            1,200+ projects executed successfully and an average relationship of
            over 3 years.
          </p>

          <button className="flex items-center gap-2 text-indigo-600 font-medium hover:underline">
            Our greatest hits <ArrowRight size={18} />
          </button>
        </div>

        {/* Smooth Infinite Slider */}
        <div className="absolute left-0 bottom-[-140px] w-full overflow-hidden pb-12">
          <div className="relative flex animate-scroll gap-6 w-max px-4 pb-5">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[260px] max-w-[280px] bg-white p-5 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <img src={t.logo} alt={t.name} className="h-6" />
                </div>
                <p className="text-sm text-gray-700 italic mb-3">{t.text}</p>
                <p className="text-gray-900 font-medium">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smooth scroll keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
