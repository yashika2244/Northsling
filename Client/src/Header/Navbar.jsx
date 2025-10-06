import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Company", path: "/company" },
    { label: "Investors", path: "/investors" },
    { label: "Success Stories", path: "/success-stories" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <header className="sticky top-1 z-50 bg-white shadow-sm border-b border-orange-100 rounded-full mx-4">
      <div className="max-w-7xl flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-14 w-14 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
            NS
          </div>
          <span className="font-bold text-xl text-gray-800">Northsling</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center bg-gray-50 rounded-full py-1 px-10 shadow-sm">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-orange-600 hover:bg-white transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition">
            Book a Free Consultation
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-orange-700"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Background Overlay */}
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
          ></div>

          {/* Sliding Sidebar */}
          <div className="ml-auto relative h-full w-80 bg-white shadow-2xl border-l border-orange-100 animate-slideIn">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                NS
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full text-gray-600 hover:text-orange-600 transition"
              >
                ✕
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col space-y-2 p-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-2 text-gray-700 font-medium hover:text-orange-600 transition"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button */}
              <button className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition">
                Book a Free Consultation
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
