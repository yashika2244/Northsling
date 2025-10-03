import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Services", sub: ["AI Solutions", "Web Development", "Cloud Services"] },
    { label: "Industries", sub: ["Healthcare", "Finance", "Retail"] },
    { label: "Company", sub: ["About Us", "Careers", "Leadership"] },
    { label: "Investors", sub: ["Reports", "Shareholders", "Announcements"] },
    { label: "Success Stories", sub: [] },
    { label: "Resources", sub: ["Blogs", "Case Studies", "Whitepapers"] },
  ];

  return (
    <header className="sticky top-1 z-50 bg-white shadow-sm border-b border-orange-100 rounded-full mx-4 ">
      <div className="max-w-7xl  flex items-center justify-between px-6 py-2 ">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-14 w-14 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
            NS
          </div>
          <span className="font-bold text-xl text-gray-800">Northsling</span>
        </div>

        {/* Desktop Navigation */}
       <nav className="hidden md:flex items-center space-x-6 bg-gray-50 rounded-full py-4 px-10 shadow-sm">
  {navLinks.map((link, idx) => (
    <div
      key={idx}
      className="relative group"
      onMouseEnter={() => setActiveMenu(link.label)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button className="flex items-center text-sm font-semibold text-gray-600 hover:text-orange-600 transition-colors duration-200">
        <span>{link.label}</span>
        {link.sub.length > 0 && (
          <ChevronDown
            size={12}
            className="ml-1 transition-transform duration-200 group-hover:rotate-180"
          />
        )}
      </button>

      {/* Dropdown */}
      {link.sub.length > 0 && activeMenu === link.label && (
        <div className="absolute left-0 mt-2 w-52 bg-white shadow-xl rounded-xl py-2 border border-gray-100 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          {link.sub.map((item, subIdx) => (
            <a
              key={subIdx}
              href="#"
              className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 rounded-lg"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>


        {/* CTA Button (Desktop) */}
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
      className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 animate-fadeIn"
    ></div>

    {/* Sliding Sidebar */}
    <div
      className={`ml-auto relative h-full w-90 bg-white shadow-2xl border-l border-orange-100  animate-slideIn`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 ">
        <div className="h-14 w-14 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
          NS
        </div>
        <button
          onClick={() => setMobileOpen(false)}
          className="p-2 rounded-full  text-gray-600 hover:text-orange-600 transition"
        >
          ✕
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2 p-4">
        {navLinks.map((link, idx) => (
          <div key={idx} className="flex flex-col">
            <button
              onClick={() =>
                setActiveMenu(activeMenu === link.label ? null : link.label)
              }
              className="flex justify-between items-center px-2 py-2 text-gray-700 font-medium hover:text-orange-600 transition"
            >
              {link.label}
              {link.sub.length > 0 && <ChevronDown size={16} />}
            </button>

            {/* Submenu */}
            {link.sub.length > 0 && activeMenu === link.label && (
              <div className="ml-4 mt-1 flex flex-col space-y-1 animate-slideDown">
                {link.sub.map((item, subIdx) => (
                  <a
                    key={subIdx}
                    href="#"
                    className="px-2 py-1 text-gray-600 hover:text-orange-600 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
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
