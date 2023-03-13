import { useState } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSideNav = () => {
        setIsOpen(!isOpen)
    }

    return <>
        <nav className="nav">
            <div className={`${!isOpen ? 'nav-links' : 'nav-links-2'}`}>
                <i class="fa fa-times" onClick={toggleSideNav}></i>
                <ul>
                    <Link to="/" className="site-title" onClick={toggleSideNav}><img src="NHlogoTransparent.png" alt=""></img></Link>
                    <CustomLink to="/music" onClick={toggleSideNav}>MUSIC</CustomLink>
                    <CustomLink to="/videos" onClick={toggleSideNav}>VIDEOS</CustomLink>
                    <CustomLink to="/gear" onClick={toggleSideNav}>GEAR</CustomLink>
                    <CustomLink to="/portfolio" onClick={toggleSideNav}>PORTFOLIO</CustomLink>
                </ul>
            </div>
                <i class="fa fa-bars right" onClick={toggleSideNav}></i>
        </nav>
    </>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}





