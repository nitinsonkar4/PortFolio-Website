import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo or Name */}
            <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
              MyPortfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Contact
              </a>
            </div>

            {/* Desktop Resume Button */}
            <div className="hidden md:block">
              <a
                href="/Nitin-Sonkar-FlowCV-Resume-20250724.pdf"
                download="Nitin_Sonkar_Resume.pdf"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Download Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <a
              href="#home"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 text-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 text-center"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 text-center"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="/Nitin-Sonkar2405.pdf"
              download="Nitin_Sonkar_Resume.pdf"
              className="block px-4 py-2 text-center bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
