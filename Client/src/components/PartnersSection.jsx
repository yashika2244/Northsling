import React from "react";
import { ArrowRight } from "lucide-react";

const partners = [
  "Acquia", "Adobe", "AWS", "BigCommerce", "commercetools", "Contentful",
  "Contentstack", "Fluent Commerce", "Google Cloud", "Microsoft",
  "Oracle", "Salesforce", "SAP", "Sitecore"
];

export default function PartnersSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 px-6 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
  Empowering innovation <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
    with the world’s top technology partners
  </span>
</h2>

       <p className="text-gray-400 max-w-2xl mb-8">
  Collaborating with leading platforms to deliver seamless integrations,
  powerful tools, and next-generation digital experiences.
</p>
        {/* CTA Button */}
       <button className="group inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition">
  Explore Our Partner Ecosystem
  <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
</button>

        {/* Partner grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((name, i) => (
            <div
              key={i}
              className="bg-white/5 hover:bg-white/10 transition rounded-2xl px-5 py-6 text-lg font-medium text-center backdrop-blur-sm border border-white/10 hover:scale-[1.03] transform"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
