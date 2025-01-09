import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-amber-400">
          ArchiWeb
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <a href="#hero" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
          <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#footer" className="text-gray-600 hover:text-gray-800">Contact</a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-50 shadow-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#hero"
          className="block px-6 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
        >
          Home
        </a>
        <a
          href="#projects"
          className="block px-6 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
        >
          Projects
        </a>
        <a
          href="#about"
          className="block px-6 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
        >
          About
        </a>
        <a
          href="#footer"
          className="block px-6 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
