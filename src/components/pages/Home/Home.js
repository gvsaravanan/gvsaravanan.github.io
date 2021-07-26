import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Logo1Trans from "../../../images/gs_logo2_transparent-150x150.png";

export default function Home() {
    return (
        <>
            <div className={style["home"]}>
                <h1 className={style["title"]}>
                    <span className={style["about"]}>
                        <img
                            src={Logo1Trans}
                            alt="GS logo"
                            className="GSLogo"
                        />
                        <p className={style["info"]}>
                            I'm a Junior at Cedar Park High School and I'm a
                            motivated computer science student interested in
                            programming, finance, business, and technology!
                        </p>
                        
                    </span>
                    <a className={style["email"]} href="mailto:name@email.com">
                        gautham.v.saravanan@gmail.com
                    </a>
                    <div className={style["social-icons"]}>
                        <a
                            className={style["social-icon"]}
                            href="https://www.linkedin.com/in/gautham-saravanan/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a
                            className={style["social-icon"]}
                            href="https://github.com/gvsaravanan"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="fab fa-github"></i>
                        </a>
                        <a
                            className={style["social-icon"]}
                            href="https://instagram.com/gautham.saravanan/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </h1>

                <div className={style["btn-group"]}>
                    <button>
                        <Link
                            to="/experience"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            Check out my experience!
                        </Link>
                    </button>
                    <button>
                        <Link
                            to="/projects"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            View my projects!
                        </Link>
                    </button>
                    <button>
                        <Link
                            to="/about-me"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            Learn more about me!
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}
