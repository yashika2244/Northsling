import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setClickedIndex(null);
    }
  }, [location.pathname]);
  const navLinks = [
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Company", path: "/company" },
    { label: "Investors", path: "/investors" },
    { label: "Success Stories", path: "/success-stories", noIcon: true },
    { label: "Career", path: "/career" },
  ];
  const handleMouseEnter = (idx, path) => {
    setHoveredIndex(idx);
    navigate(path);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (clickedIndex !== null) {
      navigate(navLinks[clickedIndex].path);
    } else {
      navigate("/");
    }
  };

  const handleClick = (idx, path) => {
    setClickedIndex(idx);
    navigate(path);
  };
const handleClose = () => {
  setClosing(true); // start closing animation
  setTimeout(() => {
    setMobileOpen(false); // remove sidebar after animation
    setClosing(false); // reset state
  }, 300); // duration must match your transition (300ms)
};
  return (
    <header className="fixed top-1 left-4 right-4 z-50 bg-white shadow-sm border-b border-orange-100 rounded-full px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-14 w-14 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
            NS
          </div>
          <span className="font-bold text-xl text-gray-800">Northsling</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center  rounded-full py-2 px-1 shadow-sm cursor-pointer">
          {navLinks.map((link, idx) => {
            const isActive =
              hoveredIndex === idx ||
              (clickedIndex === idx && location.pathname === link.path);
            return (
              <div
                key={idx}
                onMouseEnter={() => handleMouseEnter(idx, link.path)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(idx, link.path)}
                className={`flex items-center px-4 py-2 rounded-full   text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-orange-600 bg-white shadow-sm"
                    : "text-gray-600 hover:text-orange-600 hover:bg-white hover:shadow-sm"
                }`}
              >
                {link.label}
                {!link.noIcon && (
                  <ChevronDown
                    size={12}
                    className={`ml-1 transition-colors duration-200 ${
                      isActive ? "text-orange-600" : "text-gray-400"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-5 py-3 bg-orange-500 text-white text-sm rounded-full font-medium hover:bg-orange-600 transition">
            Book a Free Consultation
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-orange-700 px-4"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
{mobileOpen && (
  <div className="fixed inset-0 z-50 flex">
    {/* Overlay */}
    <div
      onClick={handleClose}
      className={`absolute inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    ></div>

    {/* Sidebar */}
    <div
      className={`ml-auto relative h-full w-80 bg-white shadow-2xl border-l border-gray-200 rounded-l-2xl overflow-hidden transform transition-transform duration-300 ${
        closing ? "translate-x-full" : "translate-x-0"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div
          onClick={() => navigate("/")}
          className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-white font-bold text-xl shadow-md cursor-pointer"
        >
          NS
        </div>
        <button
          onClick={handleClose}
          className="p-2 rounded-full text-gray-500 hover:text-orange-600 transition-colors duration-300"
        >
          ✕
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-6 space-y-3">
        {navLinks.map((link, idx) => {
          const isActive = idx === clickedIndex || location.pathname === link.path;

          return (
            <Link
              key={idx}
              to={link.path}
              onClick={() => {
                setClickedIndex(idx);
                handleClose();
              }}
              className={`group relative flex items-center justify-between px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-orange-600 bg-orange-50 shadow-sm"
                  : "text-gray-700 hover:bg-orange-50 hover:shadow-sm"
              }`}
            >
              <span className="relative z-10 transition-colors duration-300">
                {link.label}
              </span>
              {!link.noIcon && (
                <ChevronDown
                  size={18}
                  className="text-gray-400 group-hover:text-orange-500 transition-colors duration-300"
                />
              )}
            </Link>
          );
        })}

        <div className="my-4 border-t border-gray-200"></div>

        <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-base shadow-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-xl transition-all duration-300">
          Book a Free Consultation
        </button>
      </nav>
    </div>
  </div>
)}


    </header>
  );
}
