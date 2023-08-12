import React from "react";
import style from "./Projects.module.css";

export default function Projects() {
    return (
        <>
            <div className={style["projects"]}>
                <h1 style={{ textAlign: "center" }}>
                    PROJECTS
                    <div className={style["proj-container"]}>
                        <div className={style["proj"]}>
                            <div style={{ marginTop: "-0.3rem" }}>
                                <h5 className={style["project-name"]}>
                                    Java Data Structures & Algorithms Projects
                                </h5>
                                <h6 className={style["link-container"]}>
                                    <a
                                        href="https://github.com/gvsaravanan/Java-Data-Structures-and-Algorithms"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={style["link"]}
                                    >
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </h6>
                            </div>
                            <ul className={style["description"]}>
                                <li>
                                    Developed 28+ individual projects
                                    demonstrating proficiency in implementing
                                    efficient/optimized solutions
                                </li>
                                <li>
                                    Adapted Thomas Schelling’s agent-based
                                    Segregation Model, simulating segregation
                                    patterns in unique neighborhoods
                                </li>
                                <li>
                                    Utilized Java Graphics to enhance, modify,
                                    and draw images including different versions
                                    of the Mandelbrot set (fractal geometric
                                    images) as well as a realistic fire
                                    animation
                                </li>
                                <li style={{ textDecoration: "underline" }}>
                                    Stack: Java, Graphics, ImageIO, Color
                                </li>
                            </ul>
                        </div>

                        <div className={style["proj"]}>
                            <div style={{ marginTop: "-0.3rem" }}>
                                <h5 className={style["project-name"]}>
                                    Personal Website
                                </h5>
                                <h6 className={style["link-container"]}>
                                    <a
                                        href="https://github.com/gvsaravanan/gvsaravanan.github.io"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={style["link"]}
                                    >
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </h6>
                            </div>
                            <ul className={style["description"]}>
                                <li>
                                    Showcased my skills, projects, and
                                    achievements with custom front-end
                                    components & interactive elements
                                </li>
                                <li>
                                    Implemented Google Analytics to track
                                    website traffic, user behavior, user
                                    engagement, and the navigation flow
                                </li>
                                <li>
                                    Developed portfolio website using GitHub
                                    Pages as the source domain
                                </li>
                                <li style={{ textDecoration: "underline" }}>
                                    Stack: JavaScript, React, HTML, CSS, Git,
                                    GitHub Pages, Google Analytics
                                </li>
                            </ul>
                        </div>

                        <div className={style["proj"]}>
                            <div style={{ marginTop: "-0.3rem" }}>
                                <h5 className={style["project-name"]}>
                                    Snake Game
                                </h5>
                                <h6 className={style["link-container"]}>
                                    <a
                                        href="https://github.com/gvsaravanan/Snake_Game"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={style["link"]}
                                    >
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </h6>
                            </div>
                            <ul className={style["description"]}>
                                <li>
                                    Developed a mobile app to play the iconic
                                    snake game
                                </li>
                                <li>
                                    Implemented game mechanics, including snake
                                    movement, food generation, score tracking, &
                                    collision detection
                                </li>
                                <li>
                                    Utilized Expo CLI to build the app, allowing
                                    users to easily access and test the game
                                    with a server on the Expo Go app
                                </li>
                                <li style={{ textDecoration: "underline" }}>
                                    Stack: JavaScript, React Native, TypeScript,
                                    HTML, Git, Expo CLI
                                </li>
                            </ul>
                        </div>

                        <div className={style["proj"]}>
                            <div style={{ marginTop: "-0.3rem" }}>
                                <h5 className={style["project-name"]}>
                                    ChemBox
                                </h5>
                                <h6 className={style["link-container"]}>
                                    <a
                                        href="https://devpost.com/software/chembox-2qp0n8"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={style["link"]}
                                    >
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </h6>
                            </div>
                            <ul className={style["description"]}>
                                <li>
                                    Competed in the JumpStart EdTech Hackathon
                                    with 3 teammates and won the 1st place $350
                                    prize among 180+ competitors in the Best
                                    High School category
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
                            <div style={{ marginTop: "-0.3rem" }}>
                                <h5 className={style["project-name"]}>
                                    GPA Calculator
                                </h5>
                                <h6 className={style["link-container"]}>
                                    <a
                                        href="https://github.com/gvsaravanan/GPA_Calculator"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={style["link"]}
                                    >
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                </h6>
                            </div>
                            <ul className={style["description"]}>
                                <li>
                                    Implemented a user-friendly GPA Calculator
                                    interface allowing students to input
                                    semester/cycle grades for each class
                                </li>
                                <li>
                                    Integrated the GPA Calculator into a Chrome
                                    Web Extension, providing convenience &
                                    accessibility for students
                                </li>
                                <li style={{ textDecoration: "underline" }}>
                                    Stack: JavaScript, HTML, CSS, Git
                                </li>
                            </ul>
                        </div>
                    </div>
                </h1>
            </div>
        </>
    );
}
