import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item  navbar-link">
                            <Link
                                to="/"
                                className="nav-link"
                                id="home"
                                onClick={closeMobileMenu}
                            >
                                &nbsp;HOME&nbsp;
                            </Link>
                        </li>
                        <li className="nav-item  navbar-link">
                            <Link
                                to="/experience"
                                className="nav-link"
                                id="experience"
                                onClick={closeMobileMenu}
                            >
                                &nbsp;EXPERIENCE&nbsp;
                            </Link>
                        </li>
                        <li className="nav-item  navbar-link">
                            <Link
                                to="/projects"
                                className="nav-link"
                                id="projects"
                                onClick={closeMobileMenu}
                            >
                                &nbsp;PROJECTS&nbsp;
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
