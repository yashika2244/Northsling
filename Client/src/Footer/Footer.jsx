import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 text-gray-800 pt-24 pb-12">
      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-0 w-full h-1 "></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Column 1: Brand Info */}
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Northsling</h2>
          <p className="text-gray-700 mb-6">
            Northsling delivers cutting-edge technology solutions for businesses worldwide. We combine innovation, strategy, and creativity to help your business grow and lead in a tech-driven world.
          </p>
          <div className="flex space-x-4 mt-4">
            {[Linkedin, Facebook, Instagram, Youtube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:border-orange-400 hover:text-orange-500 transition shadow-sm hover:shadow-orange-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-gray-900 font-bold text-xl mb-6">Services</h3>
          <ul className="space-y-4 text-sm">
            {["Customer Experience", "Digital Engineering", "AI and Analytics", "Cloud & DevOps", "Cybersecurity", "Integrated Digital Marketing", "Managed Services","Products"].map((item, idx) => (
              <li key={idx} className="hover:text-orange-500 relative w-fit group cursor-pointer transition-colors duration-300">
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-gray-900 font-bold text-xl mb-6">Company</h3>
          <ul className="space-y-4 text-sm">
            {["About the Company", "Board of Directors", "Careers / Job Openings", "Awards", "Events & Talk", "Northsling.Foundations"].map((item, idx) => (
              <li key={idx} className="hover:text-orange-500 relative w-fit group cursor-pointer transition-colors duration-300">
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Policies */}
        <div>
          <h3 className="text-gray-900 font-bold text-xl mb-6">Press Kit</h3>
          <ul className="space-y-4 text-sm">
            {["Northsling. Profile", "Logo & Image Gallery"].map((item, idx) => (
              <li key={idx} className="hover:text-orange-500 relative w-fit group cursor-pointer transition-colors duration-300">
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Call-to-Action / Newsletter */}
      <div className="max-w-4xl mx-auto mt-16 bg-white rounded-3xl p-8 shadow-lg border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay in the Loop</h3>
          <p className="text-gray-700 text-sm">Subscribe to receive the latest updates, insights, and offers from Northsling.</p>
        </div>
        <div className="flex w-full md:w-auto flex-col md:flex-row gap-3 mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 flex-1"
          />
          <button className="px-6 py-3 bg-orange-400 hover:bg-yellow-400 text-white font-semibold rounded-full shadow-md transition hover:shadow-orange-300/40">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-16 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} <span className="text-orange-500 font-medium">Northsling</span>. All rights reserved.
      </div>
    </footer>
  );
}
