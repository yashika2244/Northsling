import React from "react";
import {
  UserIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  MegaphoneIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Customer Experience",
    description:
      "Designing experiences that convert, retain, and truly delight customers at scale.",
    icon: <UserIcon className="h-8 w-8 text-orange-400" />,
  },
  {
    title: "Digital Engineering",
    description:
      "Building future-proof platforms with speed, precision, and engineering craftsmanship.",
    icon: <ComputerDesktopIcon className="h-8 w-8 text-orange-400" />,
  },
  {
    title: "AI and Analytics",
    description:
      "Transforming raw data into foresight, action, and competitive advantage.",
    icon: <ChartBarIcon className="h-8 w-8 text-orange-400" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Driving demand and visibility with performance-led digital marketing campaigns.",
    icon: <MegaphoneIcon className="h-8 w-8 text-orange-400" />,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Powering agility and uptime through automated, scalable cloud-native infrastructure.",
    icon: <CloudIcon className="h-8 w-8 text-orange-400" />,
  },
  {
    title: "Cybersecurity",
    description:
      "Fortifying businesses with real-time protection and compliance.",
    icon: <ShieldCheckIcon className="h-8 w-8 text-orange-400" />,
  },
  {
    title: "Managed Services",
    description:
      "Keeping digital always-on with 24x7 support and continuous improvement.",
    icon: <CogIcon className="h-8 w-8 text-orange-400" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-sm text-gray-400 uppercase mb-2">How We Do It</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          We craft services that drive transformational change
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <a
              href="#"
              className="text-orange-400 font-semibold hover:underline"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>

      {/* Optional subtle background grid */}
      <div className="absolute inset-0 bg-[url('/grid-bg.png')] opacity-10 pointer-events-none"></div>
    </section>
  );
}
