import React from "react";
import style from "./Experience.module.css";

export default function Experience() {
    return (
        <>
            <div className={style["experience"]}>
                <h1 style={{textAlign: "center"}}>
                    EXPERIENCE
                    <div className={style["exp-container"]}>
                        <div className={style["exp"]}>
                            <div>
                                <h5
                                    style={{
                                        textAlign: "left",
                                        display: "inline-block",
                                        width: "60%",
                                    }}
                                    className={style["job"]}
                                >
                                    Software Developer Intern
                                </h5>
                                <h6
                                    style={{
                                        textAlign: "right",
                                        display: "inline-block",
                                        width: "40%",
                                        fontStyle: "normal",
                                    }}
                                >
                                    July 2021 - August 2021&nbsp;
                                </h6>
                            </div>
                            <h6>
                                &nbsp;Dev Launchers
                                <a
                                    href="https://devlaunchers.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{color: "black", fontSize: "0.85rem", paddingLeft: "8px"}}
                                >
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            </h6>
                            <ul className={style["description"]}>
                                <li>
                                    Dev Launchers is a non-profit organization
                                    aimed at bridging opportunity gaps in the
                                    technology industry
                                </li>
                                <li>
                                    Collaborated with a team of senior
                                    developers to help maintain, design, and
                                    improve their website
                                </li>
                                <li>
                                    Shadowed a developer and learned how their 
                                    platform website functioned
                                </li>
                                <li>
                                    Created fully-functioning components that
                                    are now displayed on their website
                                </li>
                                <li>
                                    Programmed with ReactJS, JavaScript, HTML,
                                    and CSS
                                </li>
                            </ul>
                        </div>
                    </div>
                </h1>
            </div>
        </>
    );
}
