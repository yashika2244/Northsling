import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Company", path: "/company" },
    { label: "Investors", path: "/investors" },
    { label: "Success Stories", path: "/success-stories", noIcon: true },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <header className="sticky top-1 z-50 bg-white shadow-sm border-b border-orange-100 rounded-full mx-4">
   <div className="max-w-7xl flex items-center justify-between pl-3 py-2 w-full">
  {/* Logo */}
  <Link to="/" className="flex items-center space-x-2">
    <div className="h-14 w-14 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
      NS
    </div>
    <span className="font-bold text-xl text-gray-800">Northsling</span>
  </Link>

  {/* Desktop Navigation (centered) */}
<nav className="hidden md:flex justify-center items-center bg-gray-100 rounded-full py-2 px-6 shadow-sm cursor-pointer">

    {navLinks.map((link, idx) => (
      <Link
        key={idx}
        to={link.path}
        onMouseEnter={() => navigate(link.path)}
        className="flex items-center  px-4 py-2 rounded-full text-xs font-semibold text-gray-600 hover:text-orange-600 hover:bg-white transition-all duration-200"
      >
        {link.label}
        {!link.noIcon && (
          <ChevronDown
            size={12}
            className="ml-1 text-gray-400 transition-colors duration-200"
          />
        )}
      </Link>
    ))}
  </nav>

  {/* CTA Button (right) */}
  <div className="hidden md:block">
    <button className="px-5 py-2 bg-orange-500 text-white text-sm rounded-full font-medium hover:bg-orange-600 transition">
      Book a Free Consultation
    </button>
  </div>

  {/* Mobile Menu Toggle */}
  <button
    onClick={() => setMobileOpen(!mobileOpen)}
    className="md:hidden text-orange-700 px-6"
  >
    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>


      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
          ></div>

          <div className="ml-auto relative h-full w-80 bg-white shadow-2xl border-l border-orange-100 animate-slideIn">
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

            {/* Mobile Nav Links */}
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="group relative flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 rounded-xl hover:bg-orange-50 transition-all duration-300"
                >
                  <span className="relative z-10 group-hover:text-orange-600 transition-colors duration-300">
                    {link.label}
                  </span>

                  {/* Mobile Icons too (optional) */}
                  {!link.noIcon && (
                    <ChevronDown
                      size={18}
                      className="text-gray-400 group-hover:text-orange-500 transition"
                    />
                  )}
                  <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 group-hover:w-8"></span>
                </Link>
              ))}

              <div className="my-4 border-t border-gray-200"></div>

              <button className="px-5 py-3 bg-orange-500 text-white rounded-full font-semibold text-base shadow-md hover:bg-orange-600 hover:shadow-lg transition-all duration-300">
                Book a Free Consultation
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
