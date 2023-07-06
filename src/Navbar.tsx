import { useState, useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "./LanguageContext";
import { FiMenu, FiX } from "react-icons/fi";

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

interface NavbarProps {
    theme: string;
    toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
    const { language, setLanguage } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    const bgClass = theme === "dark" ? "bg-gray-800" : "bg-gray-600";
    const textClass = "text-white";

    return (
        <>
            <nav className={`p-4 ${bgClass} ${textClass}`}>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-6">
                        <CustomLink to="/" className="font-bold text-lg">
                            <img
                                src="NHlogoTransparent.png"
                                alt=""
                                className="h-8 w-auto hover:bg-gray-800"
                            />
                        </CustomLink>
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
            ? "opacity-75 translate-x-0 bg-gray-900"
            : "sm:translate-x-0 sm:opacity-100 opacity-0 -translate-x-full"
    }
    sm:static sm:block pt-20 sm:pt-0`}
                    >
                        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:space-y-0 p-6 sm:p-0">
                            <li
                                onClick={toggleSideNav}
                                className="hover:bg-gray-700 p-1"
                            >
                                <CustomLink to="/skills">
                                    {language === "en" ? "SKILLS" : "TAIDOT"}
                                </CustomLink>
                            </li>
                            <li
                                onClick={toggleSideNav}
                                className="hover:bg-gray-700 p-1"
                            >
                                <CustomLink to="/projects">
                                    {" "}
                                    {language === "en"
                                        ? "PROJECTS"
                                        : "PROJEKTIT"}
                                </CustomLink>
                            </li>
                            <li
                                onClick={toggleSideNav}
                                className="hover:bg-gray-700 p-1"
                            >
                                <CustomLink to="/contact">
                                    {" "}
                                    {language === "en"
                                        ? "CONTACT"
                                        : "OTA YHTEYTTÄ"}
                                </CustomLink>
                            </li>
                            <li className="p-1">
                                <LanguageSelector setLanguage={setLanguage} />
                            </li>
                            <li>
                                <button
                                    onClick={toggleTheme}
                                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded"
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
                </div>
            </nav>
        </>
    );
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    const activeClass = isActive ? "border-b-2 border-blue-500 pb-1" : "";

    return (
        <Link to={to} className={`block ${activeClass}`} {...props}>
            {children}
        </Link>
    );
}
