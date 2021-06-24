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
                    <Link to="/" className="navbar-name">
                        Gautham Saravanan
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                &nbsp;HOME&nbsp;
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/experiences"
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                &nbsp;EXPERIENCES&nbsp;
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/accomplishments"
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                &nbsp;ACCOMPLISHMENTS&nbsp;
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/projects"
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                &nbsp;PROJECTS&nbsp;
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about-me"
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                &nbsp;ABOUT ME&nbsp;
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
