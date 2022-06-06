import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import ProfilePic from "../../../images/profilephoto.jpg";

export default function Home() {
    return (
        <>
            <div className={style["home"]}>
                <h1 className={style["title"]}>
                    <span className={style["about"]}>
                        <img
                            src={ProfilePic}
                            alt="GS logo"
                            className={style["profile-photo"]}
                        />
                        <p className={style["info"]}>
                            I'm a motivated computer science student in high
                            school who is interested in business, investing, and
                            technology!
                        </p>
                    </span>
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
                        <a
                            className={style["social-icon"]}
                            href="mailto:gautham.v.saravanan@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </h1>

                <div className={style["btn-group"]}>
                    <button>
                        <Link
                            to="/experience"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            View my experience!
                        </Link>
                    </button>
                    <button>
                        <Link
                            to="/projects"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            Check out my projects!
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
