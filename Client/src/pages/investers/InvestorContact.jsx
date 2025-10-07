import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function InvestorContact() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 md:px-20 rounded-t-3xl">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Investor Relations
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12">
          Northsling is committed to transparent communication with our investors. 
          Our Investor Relations team is here to provide financial updates, corporate announcements, and guidance on investment opportunities. 
          Reach out to us for any questions or inquiries regarding our company’s performance and governance.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-800 p-6 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-2xl transition">
            <FaEnvelope className="text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-200 text-center">investors@northsling.com</p>
          </div>

          <div className="bg-blue-800 p-6 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-2xl transition">
            <FaPhone className="text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-200 text-center">+91 98765 43210</p>
          </div>

          <div className="bg-blue-800 p-6 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-2xl transition">
            <FaMapMarkerAlt className="text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Office Address</h3>
            <p className="text-gray-200 text-center">
              Northsling Corporate Office<br />
              123 Business Avenue,<br />
              Mumbai, Maharashtra, India
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12">
          <a
            href="mailto:investors@northsling.com"
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-orange-600 transition"
          >
            Contact Investor Relations
          </a>
        </div>
      </div>
    </section>
  );
}