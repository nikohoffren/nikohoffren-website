import { useState, useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "./LanguageContext";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className={`${!isOpen ? "nav-links" : "nav-links-2"}`}>
          <i className="fa fa-times" onClick={toggleSideNav}></i>
          <ul>
            <CustomLink to="/" className="site-title" onClick={toggleSideNav}>
              <img src="NHlogoTransparent.png" alt=""></img>
            </CustomLink>
            <li onClick={toggleSideNav}>
              <CustomLink to="/music">
                {language === "en" ? "MUSIC" : "MUSIIKKI"}
              </CustomLink>
            </li>
            <li onClick={toggleSideNav}>
              <CustomLink to="/videos">
                {language === "en" ? "VIDEOS" : "VIDEOT"}
              </CustomLink>
            </li>
            <li onClick={toggleSideNav}>
              <CustomLink to="/gear">
                {language === "en" ? "GEAR" : "SOITTIMET"}
              </CustomLink>
            </li>
            <li onClick={toggleSideNav}>
              <CustomLink to="/portfolio">PORTFOLIO</CustomLink>
            </li>
            <li>
              <LanguageSelector setLanguage={setLanguage} />
            </li>
          </ul>
        </div>
        <i className="fa fa-bars right" onClick={toggleSideNav}></i>
      </nav>
    </>
  );
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} className={isActive ? "active" : ""} {...props}>
      {children}
    </Link>
  );
}
