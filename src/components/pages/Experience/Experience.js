import React from "react";
import style from "./Experience.module.css";

export default function Experience() {
    return (
        <>
            <div className={style["experience"]}>
                <h1 style={{ textAlign: "center" }}>
                    EXPERIENCE
                    <div className={style["exp-container"]}>
                        <div className={style["exp"]}>
                            <div style={{marginTop: "-0.3rem"}}>
                                <h5 className={style["job"]}>
                                    Software QA Engineer Intern
                                </h5>
                                <h6 className={style["dates"]}>
                                    Jun 2022 -- Aug 2023&nbsp;
                                </h6>
                            </div>
                            <h6 className={style["company"]}>
                                &nbsp;&nbsp;InMotion Software
                            </h6>
                            <ul className={style["description"]}>
                                <li>
                                    Worked with senior software engineers to
                                    analyze & debug software issues by providing
                                    detailed bug reports & solutions
                                </li>
                                <li>
                                    Collaborated with developers & designers to
                                    implement an enhanced user experience & more
                                    streamlined navigation
                                </li>
                                <li>
                                    Developed an intricate sitemap blueprint of
                                    the company website representing the website
                                    structure, navigation flow, and inter-page
                                    relationships, allowing for more efficient
                                    content management & website maintenance
                                </li>
                                <li style={{ textDecoration: "underline" }}>
                                    Stack: JavaScript, PHP, HTML, CSS,
                                    WordPress, Jira, Figma, Microsoft Office
                                </li>
                            </ul>
                        </div>

                        <div className={style["exp"]}>
                            <div style={{marginTop: "-0.3rem"}}>
                                <h5 className={style["job"]}>
                                    Software Engineer Intern
                                </h5>
                                <h6 className={style["dates"]}>
                                    Jul 2021 -- Aug 2021&nbsp;
                                </h6>
                            </div>
                            <h6 className={style["company"]}>
                                &nbsp;&nbsp;Dev Launchers
                            </h6>
                            <ul className={style["description"]}>
                                <li>
                                    Collaborated with a team of senior
                                    developers to design and develop Dev
                                    Launcher's platform website
                                </li>
                                <li>
                                    Collaborated with a team of senior
                                    developers to help maintain, design, and
                                    improve their website
                                </li>
                                <li>
                                    Shadowed team members to acquire new skills
                                    & gain hands-on experience in handling
                                    technical issues effectively
                                </li>
                                <li>
                                    Actively participated in code reviews to
                                    give constructive feedback to others,
                                    fostering code quality and consistency
                                </li>
                                <li>
                                    Translated design mockups into visually
                                    appealing & user-friendly front-end
                                    components
                                </li>
                                <li style={{ textDecoration: "underline" }}>
                                    Stack: JavaScript, HTML, CSS, React, Git,
                                    Figma
                                </li>
                            </ul>
                        </div>
                    </div>
                        
                    
                </h1>
            </div>
        </>
    );
}
