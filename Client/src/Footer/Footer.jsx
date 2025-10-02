import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: About Northsling */}
        <div>
          <h3 className="text-white font-bold text-xl mb-6">ABOUT NORTHSLING</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Northsling is committed to delivering innovative solutions and empowering businesses worldwide. Explore our products, research, and initiatives.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-white font-bold text-xl mb-6">SERVICES</h3>
          <ul className="space-y-3 text-sm">
            {["Enterprise Solutions", "Open-Source Tools", "AI Innovations", "Consulting"].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-cyan-400 relative w-fit group cursor-pointer transition-colors duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Policies */}
        <div>
          <h3 className="text-white font-bold text-xl mb-6">POLICIES</h3>
          <ul className="space-y-3 text-sm">
            {["Privacy Policy", "Cookie Policy", "Accessibility", "Code of Conduct", "Terms of Service"].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-cyan-400 relative w-fit group cursor-pointer transition-colors duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Stay Updated */}
        <div>
          <h3 className="text-white font-bold text-xl mb-6">STAY UPDATED</h3>
          <p className="text-sm mb-4 text-gray-400">
            Subscribe for news, updates, and insights from Northsling.
          </p>
          <div className="flex items-center mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
            />
            <button className="px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-r-lg text-sm transition-all">
              Subscribe
            </button>
          </div>

          <div className="flex space-x-4">
            {[Linkedin, Facebook, Instagram, Youtube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition shadow-lg hover:shadow-cyan-500/50"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-cyan-400 font-medium">Northsling</span>. All rights reserved.
      </div>
    </footer>
  );
}
