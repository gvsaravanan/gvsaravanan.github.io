import React from "react";
import style from "./Experience.module.css";

export default function Experience() {
    return (
        <>
            <div className={style["experience"]}>
                <h1>
                    EXPERIENCE
                    <div className={style["exp-container"]}>
                        <div className={style["exp"]}>
                            <div>
                                <h5 style={{textAlign: "left", display: "inline-block", width: "50%"}}>Software Developer Intern</h5>
                                <h6 style={{textAlign: "right", display: "inline-block", width: "50%", fontStyle: "normal"}}>July 2021 - August 2021&nbsp;</h6>
                            </div>
                            <h6>&nbsp;Dev Launchers</h6>
                            <ul>
                                <li>Dev Launchers is a non-profit organization aimed at bridging opportunity gaps in the technology industry</li>
                                <li>Collaborated with a team of senior developers to help maintain, design, and improve their platform website</li>
                                <li>Created fully-functioning components that are now displayed on their website</li>
                                <li>Programmed with ReactJS, JavaScript, HTML, CSS, and Git</li>
                            </ul>
                        </div>
                        <div className={style["exp"]}>
                            <div>
                                <h5 style={{textAlign: "left", display: "inline-block", width: "50%"}}>Job Title</h5>
                                <h6 style={{textAlign: "right", display: "inline-block", width: "50%", fontStyle: "normal"}}>Work Dates&nbsp;</h6>
                            </div>
                            <h6>&nbsp;Company</h6>
                            <ul>
                                <li>Description</li>
                            </ul>
                        </div>
                    </div>
                </h1>
            </div>
        </>
    );
}
