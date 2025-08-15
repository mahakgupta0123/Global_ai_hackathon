import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "About", href: "/About" },
    { label: "Humans", href: "/humans" },
    { label: "Partners", href: "/partners" },
    { label: "Theme", href: "/tracks" },
     { label: "Rules", href: "/rules" },
    { label: "FAQs", href: "/faqs" },
  ];

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 z-30">
      <nav
        className=" border-3 border-red-300 rounded-4xl shadow-lg"
        style={{ backgroundColor: "#FFF5EE" }} 
      >
        <div className="flex justify-between items-center h-17 px-6 ">
          {/* Logo */}
          <a
            href="/About"
            aria-label="Back to homepage"
            className="flex items-center"
          >
            <img
              src="./public/logo.png"
              alt="glt-logo"
              className="h-15 w-15 object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? "text-red-400 font-bold"
                      : "text-gray-700 hover:text-red-400 font-medium transition-colors duration-200 px-3 py-3 rounded-lg hover:bg-gray-300";
                  }}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-red-200 rounded-b-2xl" style={{backgroundColor:"#FFF5EE"}}>
            <ul className="py-4 px-6 space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-red-500 font-medium transition-colors duration-200 px-3 py-3 rounded-lg hover:bg-gray-150"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
