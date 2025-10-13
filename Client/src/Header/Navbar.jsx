import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Services from "../pages/Services";
import Investers from "../pages/Investers";
import Industries from "../pages/Industries";
import Resources from "../pages/Resources";
import Company from "../pages/Company";
import ServicesPanel from "../pages/services/ProductsUI";
import IndustriesPanel from "../pages/industries/IndustrienPanel";
import CompanyPanel from "../pages/company/CompanyPanel";
import InvestorsPanel from "../pages/investers/InvestersPanel";
import ResourcesPanel from "../pages/career/ResoucesPanel";
import Success from "../pages/success/Success";


export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isServiceDetail =
    location.pathname.startsWith("/services/") &&
    location.pathname !== "/services";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let hoverTimeout;
  useEffect(() => {
    // Reset clicked index on pages where hover panel should not stay
    if (
      location.pathname === "/" ||
      location.pathname === "/success-stories" ||
      isServiceDetail
    ) {
      setClickedIndex(null);
    }

    const handleScroll = () => {
      // Transparent until scroll > 50 on home, success, or service detail pages
      if (
        location.pathname === "/" ||
        location.pathname === "/success-stories" ||
        isServiceDetail
      ) {
        setScrolled(window.scrollY > 50);
      } else {
        // Solid background on other pages
        setScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { label: "Services", path: "/services", content: <ServicesPanel /> },
    { label: "Industries", path: "/industries", content: <IndustriesPanel /> },
    { label: "Company", path: "/company", content: <CompanyPanel /> },
    { label: "Investors", path: "/investors", content: <InvestorsPanel /> },
    {
      label: "Success Stories",
      path: "/success-stories",
      noIcon: true,
      content: <Success />,
    },
    { label: "Resource", path: "/resources", content: <ResourcesPanel /> },
  ];

  const handleClick = (idx, path) => {
    setClickedIndex(idx);
    navigate(path);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <header
      className={`fixed top-1 left-4 right-4 z-50 rounded-full px-4 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-orange-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-14 w-14 flex items-center justify-center rounded-full font-bold bg-orange-500 text-white">
            NS
          </div>
          <span
            className={`font-bold text-xl transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Northsling
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex justify-center items-center rounded-full py-2 px-1 shadow-sm cursor-pointer transition-all duration-300 ${
            scrolled ? "" : "bg-transparent border border-orange-500/30"
          }`}
        >
          {navLinks.map((link, idx) => {
   const isActive = location.pathname.startsWith(link.path);
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => {
                  clearTimeout(hoverTimeout);
                  setHoveredIndex(idx);
                }}
                onMouseLeave={() => {
                  hoverTimeout = setTimeout(() => setHoveredIndex(null), 200);
                }}
                onClick={() => handleClick(idx, link.path)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer
  ${
    isActive
      ? "text-orange-600 bg-white/10 shadow-sm" // active tab
      : scrolled
      ? "text-gray-700 bg-transparent hover:shadow-sm  hover:text-orange-600"
      : "text-white  hover:bg-white hover:text-orange-600 hover:shadow-sm " // top of page hover
  }`}
              >
                {link.label}
                {!link.noIcon && (
                  <ChevronDown
                    size={12}
                    className={`ml-1 transition-colors duration-200 ${
                      isActive
                        ? "text-orange-600"
                        : scrolled
                        ? "text-gray-400 hover:text-gray-900"
                        : "text-white/70 hover:text-gray-900"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-5 py-3 rounded-full text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition">
            Book a Free Consultation
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden px-4 transition-colors ${
            scrolled ? "text-orange-700" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Hover Panel (Preview without route change) */}
      {hoveredIndex !== null && navLinks[hoveredIndex].content && (
        <div
          className={`absolute top-full -left-4 w-[calc(100%+2rem)] z-40 mt-2 transition-all duration-300
      ${
        hoveredIndex !== null
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2"
      }
    `}
          onMouseEnter={() => setHoveredIndex(hoveredIndex)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks[hoveredIndex].content}
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            onClick={handleClose}
            className={`absolute inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-300 ${
              closing ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`ml-auto relative h-full w-80 bg-white shadow-2xl border-l border-gray-200 rounded-l-2xl overflow-hidden transform transition-transform duration-300 ${
              closing ? "translate-x-full" : "translate-x-0"
            }`}
          >
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

            <nav className="flex flex-col p-6 space-y-3">
              {navLinks.map((link, idx) => {
  const isActive = idx === clickedIndex || location.pathname.startsWith(link.path);
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
