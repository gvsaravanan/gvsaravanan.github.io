import React from "react";
import style from "./Projects.module.css";

export default function Projects() {
    return (
        <>
            <div className={style["projects"]}>
                <h1 style={{textAlign: "center"}}>
                    PROJECTS
                    <div className={style["proj-container"]}>
                        <div className={style["proj"]}>
                            <div>
                                <h5
                                    style={{
                                        textAlign: "left",
                                        display: "inline-block",
                                        width: "60%",
                                    }}
                                    className={style["pr"]}
                                >
                                    Personal Website
                                    <a
                                        href="https://gvsaravanan.github.io"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            color: "black",
                                            fontSize: "1rem",
                                            paddingLeft: "8px",
                                        }}
                                    >
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </h5>
                                <h6
                                    style={{
                                        textAlign: "right",
                                        display: "inline-block",
                                        width: "40%",
                                        fontStyle: "normal",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    <i class="fab fa-react"></i>&nbsp;
                                    <i class="fab fa-js-square"></i>&nbsp;
                                    <i class="fab fa-html5"></i>&nbsp;
                                    <i class="fab fa-css3-alt"></i>&nbsp;
                                </h6>
                            </div>
                            <ul className={style["description"]}>
                                <li>
                                    Developed my own personal website with
                                    GitHub Pages as the domain
                                </li>
                                <li>
                                    Implemented with Google Analytics to track
                                    user insights and interactions
                                </li>
                                <li>
                                    Displays information about my experience,
                                    projects, and hobbies allowing users to
                                    learn more about me
                                </li>
                                <li>
                                    Programmed in ReactJS, JavaScript, HTML, and
                                    CSS
                                </li>
                            </ul>
                        </div>
                        
                        <div className={style["proj"]}>
                            <div>
                                <h5
                                    style={{
                                        textAlign: "left",
                                        display: "inline-block",
                                        width: "50%",
                                    }}
                                    className={style["pr"]}
                                >
                                    Snake Game
                                    <a
                                        href="https://github.com/gvsaravanan/Snake_Game"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            color: "black",
                                            fontSize: "1rem",
                                            paddingLeft: "8px",
                                        }}
                                    >
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </h5>
                                <h6
                                    style={{
                                        textAlign: "right",
                                        display: "inline-block",
                                        width: "50%",
                                        fontStyle: "normal",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    <i class="fab fa-react"></i>&nbsp;
                                    <i class="fab fa-js-square"></i>&nbsp;
                                    <i class="fab fa-html5"></i>&nbsp;
                                    <i class="fab fa-css3-alt"></i>&nbsp;
                                </h6>
                            </div>
                            <ul className={style["description"]}>
                                <li>
                                    Fully-functioning app that lets you play the
                                    iconic snake game from any of your devices
                                    (Andriod or iOS softwares)
                                </li>
                                <li>
                                    Displays control buttons on-screen to easily
                                    control the snake's movement and stores user
                                    data of current game score and highest game
                                    score
                                </li>
                                <li>
                                    Implemented using Expo CLI and can be run on
                                    the Expo Go app by creating a server
                                </li>
                                <li>
                                    Programmed in ReactNative, TypeScript,
                                    JavaScript, HTML, and CSS
                                </li>
                            </ul>
                        </div>

                        <div className={style["proj"]}>
                            <div>
                                <h5
                                    style={{
                                        textAlign: "left",
                                        display: "inline-block",
                                        width: "50%",
                                    }}
                                    className={style["pr"]}
                                >
                                    ChemBox
                                    <a
                                        href="https://devpost.com/software/chembox-2qp0n8"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            color: "black",
                                            fontSize: "1rem",
                                            paddingLeft: "8px",
                                        }}
                                    >
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </h5>
                                <h6
                                    style={{
                                        textAlign: "right",
                                        display: "inline-block",
                                        width: "50%",
                                        fontStyle: "normal",
                                        fontSize: "1.2rem",
                                        fontWeight: "600",
                                        marginTop: "0px",
                                    }}
                                >
                                    1st Place&nbsp;
                                </h6>
                            </div>
                            <ul className={style["description"]}>
                                <li>
                                    Competed in the JumpStart EdTech Hackathon
                                    with 3 other people and won the 1st place
                                    $350 prize among 180+ competitors in the
                                    Best High School category
                                </li>
                                <li>
                                    Chembox is a prototype of a mobile app that
                                    allows students to use Augmented Reality to
                                    do experiments, dissections, projects, and
                                    more from the comfort of their homes
                                </li>
                                <li>
                                    Developed a comprehensive and detailed
                                    proposal intended to help transform how
                                    students learn in the COVID-19 education
                                    environment
                                </li>
                            </ul>
                        </div>

                        <div className={style["proj"]}>
                            <div>
                                <h5
                                    style={{
                                        textAlign: "left",
                                        display: "inline-block",
                                        width: "50%",
                                    }}
                                    className={style["pr"]}
                                >
                                    GPA Calculator
                                    <a
                                        href="https://github.com/gvsaravanan/GPA_Calculator"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            color: "black",
                                            fontSize: "1rem",
                                            paddingLeft: "8px",
                                        }}
                                    >
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </h5>
                                <h6
                                    style={{
                                        textAlign: "right",
                                        display: "inline-block",
                                        width: "50%",
                                        fontStyle: "normal",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    <i class="fab fa-js-square"></i>&nbsp;
                                    <i class="fab fa-html5"></i>&nbsp;
                                    <i class="fab fa-css3-alt"></i>&nbsp;
                                </h6>
                            </div>
                            <ul className={style["description"]}>
                                <li>
                                    Developed a fully-functioning Chrome Web
                                    Extension that calculates students’ weighted
                                    GPA
                                </li>
                                <li>
                                    Allows students to input their semester or
                                    cycle grades for each class and calculates
                                    their GPA
                                </li>
                                <li>Programmed in JavaScript, HTML, and CSS</li>
                            </ul>
                        </div>
                    </div>
                </h1>
            </div>
        </>
    );
}
