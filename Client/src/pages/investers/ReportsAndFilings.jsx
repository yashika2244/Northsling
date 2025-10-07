import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { FaCalendarAlt, FaFileAlt } from "react-icons/fa";

export default function ReportsAndFilings() {
  const reports = [
    {
      title: "Annual Report 2024",
      date: "March 15, 2024",
      size: "5.2 MB",
      description: "A comprehensive overview of our annual performance and key initiatives.",
      link: "#",
    },
    {
      title: "Quarterly Results Q4 2024",
      date: "January 10, 2025",
      size: "2.3 MB",
      description: "Detailed insights into the company’s Q4 financial results.",
      link: "#",
    },
    {
      title: "Sustainability Report 2024",
      date: "February 20, 2025",
      size: "3.1 MB",
      description: "Our environmental and social responsibility achievements and goals.",
      link: "#",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-6 md:px-20">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Reports & Filings
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Stay informed with our latest corporate reports, quarterly results, and sustainability updates. All reports are available in PDF format for your convenience, providing transparent insights into our performance and governance.
        </p>
      </div>

      {/* Reports Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {reports.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> {item.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaFileAlt /> {item.size}
                </span>
              </div>
            </div>
            <p className="mt-6 text-gray-500 flex items-center gap-3 text-lg font-medium">
              <FaFilePdf className="text-red-600 text-xl" /> Download PDF
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
