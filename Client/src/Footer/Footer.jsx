import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300">
      {/* Decorative Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">OUR BRANDS</h3>
          <ul className="space-y-3 text-sm">
            {["EPAM Continuum", "Empathy Lab", "Test IO", "Reliable AI Lab"].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-cyan-400 relative w-fit group cursor-pointer"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">SOLUTIONS</h3>
          <p className="text-sm leading-relaxed">
            Explore our enterprise software, open source solutions and
            accelerators on{" "}
            <a href="#" className="text-cyan-400 hover:underline">
              EPAM SolutionsHub
            </a>
            .
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">POLICIES</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Investors",
              "Privacy Policy",
              "Cookie Policy",
              "Accessibility",
              "Code of Conduct",
            ].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-cyan-400 relative w-fit group cursor-pointer"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 (Subscribe + Social) */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">STAY CONNECTED</h3>
          <p className="text-sm mb-4">Subscribe for updates and news.</p>
          <div className="flex items-center mb-6">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-l-md bg-gray-800 text-sm border border-gray-700 focus:outline-none focus:border-cyan-400"
            />
            <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-r-md text-sm">
              Subscribe
            </button>
          </div>

          <div className="flex space-x-3">
            {[Linkedin, Facebook, Instagram, Youtube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition shadow-md hover:shadow-cyan-500/40"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-cyan-400">Northsling</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
