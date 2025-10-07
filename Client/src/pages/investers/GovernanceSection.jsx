import React from "react";

export default function GovernanceSection() {
  return (
    <section className="md:py-16 bg-gray-50 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-snug">
            Corporate Governance
          </h2>
          <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            At <span className="font-semibold text-orange-600">Northsling</span>, we uphold the highest standards of corporate governance and ethical business practices. Our governance framework ensures transparency, accountability, and long-term value for our shareholders.
          </p>
          <ul className="space-y-5 text-gray-800">
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Board of Directors
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Audit & Risk Committee
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Sustainability & Ethics Committee
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Nomination & Remuneration Committee
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="md:w-1/2 md:h-full">
          <img
            src="https://freedesignfile.com/upload/2018/05/Business-women-Stock-Photo-06.jpg"
            alt="Corporate Governance"
            className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
