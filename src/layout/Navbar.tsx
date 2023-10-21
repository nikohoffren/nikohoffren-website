import { useState, useContext, useRef } from "react";
import LanguageSelector from "../common/components/LanguageSelector";
import { LanguageContext } from "../common/components/LanguageContext";
import { FiMenu, FiX } from "react-icons/fi";
import React from "react";
import CustomLink from "../common/components/CustomLink";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SectionRefContext } from "../common/components/SectionRefContext";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const skillsSectionRef = useContext(SectionRefContext);
  const navigate = useNavigate();

  const navigateAndScrollToSection = (
    path: string,
    ref: React.RefObject<HTMLElement> | null
  ) => {
    navigate(path);
    setTimeout(() => {
      scrollToSection(ref);
    }, 0);
  };
  const scrollToSection = (ref: React.RefObject<HTMLElement> | null) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const bgClass =
    theme === "dark" ? "header-bg-color-dark" : "header-bg-color-light";
  const textClass = "text-white";

  return (
    <>
      <nav
        className={`grid grid-cols-2 p-4 ${bgClass} ${textClass} fixed w-full z-50 top-0`}
      >
        <div className="flex space-x-6">
          <CustomLink to="/" className="font-bold text-lg ml-4">
            <img
              src="NHlogoTransparent.png"
              alt=""
              className="h-8 w-auto hover:bg-gray-800 hover:scale-110"
            />
          </CustomLink>
        </div>

        <div className="hidden sm:block">
          <ul className="flex space-x-6 justify-end pr-4">
            <li className="hover:scale-110 p-1">
              <button
                onClick={() =>
                  navigateAndScrollToSection("/", skillsSectionRef)
                }
              >
                {language === "en" ? "SKILLS" : "TAIDOT"}
              </button>
            </li>
            <li className="hover:scale-110 p-1">
              <CustomLink to="/projects">
                {language === "en" ? "PROJECTS" : "PROJEKTIT"}
              </CustomLink>
            </li>
            <li className="hover:scale-110 p-1">
              <CustomLink to="/contact">
                {language === "en" ? "CONTACT" : "OTA YHTEYTTÄ"}
              </CustomLink>
            </li>
            <li className="p-1">
              <LanguageSelector setLanguage={setLanguage} />
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="bg-gray-700 hover:scale-110 text-white font-bold py-1 px-4 rounded"
              >
                {theme === "light" ? (
                  <img src="/sun.png" alt="Sun png image" className="h-6 w-6" />
                ) : (
                  <img
                    src="/moon.png"
                    alt="Moonpng image"
                    className="h-6 w-6"
                  />
                )}
              </button>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleSideNav}>
            {isOpen ? (
              <FiX className="h-6 w-6 text-white" />
            ) : (
              <FiMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        <div
          className={`fixed z-30 inset-0 transform transition-transform duration-200 ease-in-out
    ${
      isOpen
        ? "bg-gray-900 opacity-90 translate-x-0"
        : "opacity-0 translate-x-full"
    }
    pt-20`}
        >
          <ul className="flex flex-col space-y-4 p-6">
            <li onClick={toggleSideNav} className="hover:scale-110 p-1">
              <button
                onClick={() =>
                  navigateAndScrollToSection("/", skillsSectionRef)
                }
              >
                {language === "en" ? "SKILLS" : "TAIDOT"}
              </button>
            </li>
            <li onClick={toggleSideNav} className="hover:scale-110 p-1">
              <CustomLink to="/projects">
                {" "}
                {language === "en" ? "PROJECTS" : "PROJEKTIT"}
              </CustomLink>
            </li>
            <li onClick={toggleSideNav} className="hover:scale-110 p-1">
              <CustomLink to="/contact">
                {" "}
                {language === "en" ? "CONTACT" : "OTA YHTEYTTÄ"}
              </CustomLink>
            </li>
            <li className="p-1">
              <LanguageSelector setLanguage={setLanguage} />
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="bg-gray-700 hover:scale-110 text-white font-bold py-1 px-4 rounded"
              >
                {theme === "light" ? (
                  <img
                    src="/sun.png"
                    alt="Sun png image"
                    className="h-6 w-6"
                    onClick={toggleSideNav}
                  />
                ) : (
                  <img
                    src="/moon.png"
                    alt="Moonpng image"
                    className="h-6 w-6"
                    onClick={toggleSideNav}
                  />
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
