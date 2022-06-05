import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../images/gs_logo1_transparent-60x60.png";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-name">
                        <p className="name">
                            <img
                                src={Logo1}
                                alt="logo"
                                style={{
                                    marginRight: "10px",
                                    width: "3rem",
                                    height: "3rem",
                                }}
                            />
                            Gautham Saravanan
                        </p>
                    </div>
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
                        <li className="nav-item  navbar-link">
                            <Link
                                to="/about-me"
                                className="nav-link"
                                id="aboutMe"
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
