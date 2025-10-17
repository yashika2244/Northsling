import React from "react";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    logo: "https://cdn.worldvectorlogo.com/logos/rolls-royce.svg",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?crop=faces&fit=crop&w=300&h=300",
    text: `"Repeat Business is the best testament to a team’s ability to perform, and I have no hesitation in hiring them again. Their collaboration style and acumen catalyzed significant momentum towards achieving our objectives."`,
    name: "Rolls-Royce",
  },
  {
    logo: "https://logo.clearbit.com/iqvia.com",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=300&h=300",
    text: `"They provide amazing development and design resources, along with best in class account management support. We were able to speed up product delivery while reducing costs."`,
    name: "IQVIA",
  },
  {
    logo: "https://logo.clearbit.com/instructure.com",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=faces&fit=crop&w=300&h=300",
    text: `"A trustworthy, knowledgeable, and adaptable development partner. They know how to push back and ask questions when appropriate, which adds real value."`,
    name: "Instructure",
  },
  {
    logo: "https://logo.clearbit.com/nextroll.com",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=300&h=300",
    text: `"By seamlessly integrating with the internal team, they helped achieve key objectives. Their onboarding and deliverables were exceptional."`,
    name: "NextRoll",
  },
  {
    logo: "https://logo.clearbit.com/rga.com",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=300&h=300",
    text: `"Having access to such a strong talent pool has been hands down the best vendor decision our team has made."`,
    name: "R/GA",
  },
];

export default function BrandsSection() {
  return (
    <section className="max-w-full  py-16 relative">
      <div className="grid lg:grid-cols-2 gap-16 relative md:mx-auto md:px-8 px-6">
        {/* Left Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Teamwork"
            className="rounded-xl shadow-2xl w-full h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700/20 via-transparent to-transparent rounded-3xl"></div>
        </div>

        {/* Right Text */}
        <div className="flex flex-col  space-y-2  ">
          <h2 className="text-4xl  font-semibold leading-snug text-gray-900">
            We've stopped counting. <br />
            Over{" "}
            <span className="text-indigo-600 font-bold">500+ brands</span> trust
            our expertise.
          </h2>
          <p className="text-gray-600 max-w-md text-lg leading-relaxed">
            With <span className="font-medium text-gray-800">1,200+</span>{" "}
            projects delivered successfully and an average relationship span of
            over 3 years, we’ve built long-term partnerships with world-leading
            companies.
          </p>

          <button className="flex items-center gap-3 text-indigo-600 font-semibold hover:underline text-lg">
            Our greatest hits <ArrowRight size={22} />
          </button>
        </div>
      </div>

      {/* Smooth Infinite Slider */}
      <div className="absolute left-0 bottom-[-200px] w-full overflow-hidden pb-20 md:block hidden">
        <div className="relative flex animate-scroll gap-8 w-max  pb-32">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[320px] max-w-[340px] bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <img src={t.logo} alt={t.name} className="h-7" />
              </div>
              <p className="text-[15px] text-gray-700 italic mb-4 leading-relaxed">
                {t.text}
              </p>
              <p className="text-gray-900 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Smooth scroll keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
