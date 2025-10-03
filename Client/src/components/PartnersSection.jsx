import React from "react";
import { ArrowRight } from "lucide-react";

const partners = [
  "Acquia", "Adobe", "AWS", "BigCommerce", "commercetools", "Contentful",
  "Contentstack", "Fluent Commerce", "Google Cloud", "Microsoft",
  "Oracle", "Salesforce", "SAP", "Sitecore"
];

export default function PartnersSection() {
  return (
    <section className="relative w-full bg-white text-gray-800 py-32 px-6 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-200/30 blur-[180px] rounded-full pointer-events-none"></div>
      
      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-24 h-24 bg-yellow-200/20 rounded-full blur-2xl animate-[float_15s_linear_infinite]`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Empowering innovation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            with the world’s top technology partners
          </span>
        </h2>

        <p className="text-gray-700 max-w-2xl mb-10">
          Collaborating with leading platforms to deliver seamless integrations,
          powerful tools, and next-generation digital experiences.
        </p>

        {/* CTA Button */}
        <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
          Explore Our Partner Ecosystem
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>

        {/* Partner grid */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((name, i) => (
            <div
              key={i}
              className="bg-white/60 hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-100 transition-all rounded-2xl px-5 py-6 text-lg font-medium text-center backdrop-blur-sm border border-orange-200 hover:scale-105 transform shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes for floating particles */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </section>
  );
}
