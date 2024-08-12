import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import ProfilePic from "../../../images/profilephoto3.jpg";

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
                        <h2 className={style["name"]}>
                            Gautham Saravanan
                            <hr></hr>
                            <p className={style["info"]}>
                                Hey there! My name is Gautham and I am a student
                                at The University of Texas at Austin pursuing a
                                degree in Computer Science & Mathematics!
                            </p>
                        </h2>
                    </span>
                    <div className={style["social-icons"]}>
                        <button className={style["btn"]}>
                            <a
                                className={style["social-icon"]}
                                href="https://www.linkedin.com/in/gautham-saravanan/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </button>
                        <button className={style["btn"]}>
                            <a
                                className={style["social-icon"]}
                                href="https://github.com/gvsaravanan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="fab fa-github"></i>
                            </a>
                        </button>
                        <button className={style["btn"]}>
                            <a
                                className={style["social-icon"]}
                                href="https://instagram.com/gautham.saravanan/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="fab fa-instagram"></i>
                            </a>
                        </button>
                        <button className={style["btn"]}>
                            <a
                                className={style["social-icon"]}
                                href="mailto:gautham.v.saravanan@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="fas fa-envelope"></i>
                            </a>
                        </button>
                    </div>

                    <div>
                        <div className={style["links"]}>
                            <button className={style["link"]}>
                                <Link
                                    to="/experience"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                >
                                    View my experience!
                                </Link>
                            </button>
                            <button className={style["link"]}>
                                <Link
                                    to="/projects"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                >
                                    Check out my projects!
                                </Link>
                            </button>
                        </div>
                    </div>
                </h1>
            </div>
        </>
    );
}
