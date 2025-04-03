import React, { useContext, useState } from "react";
import { LanguageContext } from "../common/components/LanguageContext";
import { Link } from "react-router-dom";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20"
      style={{
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
      }}
    >
      <nav
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
        }}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="bg-gray-900 rounded-lg p-1">
                <img
                  src="/NHlogoTransparent.png"
                  alt="Logo"
                  className="h-8 w-auto transition-transform duration-300 hover:scale-110"
                  style={{
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                  }}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              to="/#skills"
              className="nav-link font-medium text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200"
            >
              {language === "en" ? "Skills" : "Taidot"}
            </Link>
            <Link
              to="/projects"
              className="nav-link font-medium text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200"
            >
              {language === "en" ? "Projects" : "Projektit"}
            </Link>
            <Link
              to="/contact"
              className="nav-link font-medium text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200"
            >
              {language === "en" ? "Contact" : "Ota Yhteyttä"}
            </Link>

            {/* Language Selector */}
            <select
              id="language-selector"
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg px-3 py-1.5 text-sm font-medium border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{
                transform: "translateZ(0)",
                WebkitTransform: "translateZ(0)",
              }}
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">EN</option>
              <option value="fi">FI</option>
            </select>

            {/* Theme Toggle */}
            <button
              className="toggle-theme p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              style={{
                transform: "translateZ(0)",
                WebkitTransform: "translateZ(0)",
              }}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <img
                  src="/sun.png"
                  alt="Sun icon"
                  className="h-5 w-5 theme-icon brightness-75 contrast-200"
                />
              ) : (
                <img
                  src="/moon.png"
                  alt="Moon icon"
                  className="h-5 w-5 theme-icon"
                />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              id="mobile-menu-button"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              style={{
                transform: "translateZ(0)",
                WebkitTransform: "translateZ(0)",
              }}
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[9998] transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        } bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg sm:hidden`}
        style={{
          WebkitBackdropFilter: "blur(12px)",
          backdropFilter: "blur(12px)",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
      >
        {/* Mobile menu button - now positioned absolutely */}
        <div className="absolute top-4 right-4">
          <button
            id="mobile-menu-button"
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            style={{
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
            }}
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="pt-20 pb-6 px-4">
          <div className="flex flex-col space-y-6">
            {/* Logo in mobile menu */}
            <div className="flex justify-center mb-4">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="bg-gray-900 rounded-lg p-1">
                  <img
                    src="/NHlogoTransparent.png"
                    alt="Logo"
                    className="h-10 w-auto transition-transform duration-300 hover:scale-110"
                    style={{
                      transform: "translateZ(0)",
                      WebkitTransform: "translateZ(0)",
                    }}
                  />
                </div>
              </Link>
            </div>

            <div className="bg-gray-100/90 dark:bg-gray-800/90 rounded-xl p-6 space-y-6">
              <Link
                to="/#skills"
                className="nav-link text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === "en" ? "SKILLS" : "TAIDOT"}
              </Link>
              <Link
                to="/projects"
                className="nav-link text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === "en" ? "PROJECTS" : "PROJEKTIT"}
              </Link>
              <Link
                to="/contact"
                className="nav-link text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === "en" ? "CONTACT" : "OTA YHTEYTTÄ"}
              </Link>

              {/* Mobile Language Selector */}
              <div className="flex justify-start">
                <select
                  id="mobile-language-selector"
                  className="w-32 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg px-3 py-2 text-base font-medium border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option value="en">EN</option>
                  <option value="fi">FI</option>
                </select>
              </div>

              {/* Mobile Theme Toggle */}
              <div className="flex justify-start">
                <button
                  className="toggle-theme p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  onClick={toggleTheme}
                >
                  {theme === "light" ? (
                    <img
                      src="/sun.png"
                      alt="Sun icon"
                      className="h-6 w-6 theme-icon brightness-75 contrast-200"
                    />
                  ) : (
                    <img
                      src="/moon.png"
                      alt="Moon icon"
                      className="h-6 w-6 theme-icon"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
