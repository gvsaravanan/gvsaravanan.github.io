import React from "react";
import style from "./AboutMe.module.css";

export default function AboutMe() {
    return (
        <>
            <div className={style["aboutMe"]}>
                <h1>
                    ABOUT ME
                    <div className={style["abt-container"]}>
                        <div className={style["abt"]}>
                            <h5 style={{fontSize: "1.5rem"}}>
                                Hobbies
                            </h5>
                            <ul className={style["description"]}>
                                <li>
                                    I like playing basketball, football, and sand volleyball with friends in my free time
                                </li>
                                <li>
                                    I am an avid fan of the NFL and NBA, specifically the Green Bay Packers and Boston Celtics
                                </li>
                                <li>
                                    I enjoy watching movies and TV shows with my family, especially the Marvel movies and shows
                                </li>
                                <li>
                                    I love playing and winning strategy boardgames such as Ticket to Ride and Risk
                                </li>
                                <li>
                                    I have fun programming and creating new projects that challenge me to work harder
                                </li>
                                <li>
                                    I enjoy meeting and talking with new people that share my interests
                                </li>
                            </ul>
                        </div>

                        <div className={style["abt"]}>
                            <h5 style={{fontSize: "1.4rem"}}>
                                Extracurriculars
                            </h5>
                            <ul className={style["description"]}>
                                <li>
                                    I am one of the VPs for my school's DECA chapter and am a 3x District, 3x State, and 2x International Qualifier and Finalist
                                </li>
                                <li>
                                    I am an officer and member for National Honor Society, Mu Alpha Theta Math Honor Society, and Science Honor Society 
                                </li>
                                <li>
                                    I am the President/CEO for my school's Investment Club where we discuss stock market news
                                </li>
                                <li>
                                    Competed in UIL Computer Science at District, Region, and State competitions where my team and I placed 3rd team overall at the 2021 UIL State meet
                                </li>
                                <li>
                                    I have volunteered at various nonprofit organizations and I'm currently a math tutor for elementary students
                                </li>
                            </ul>
                        </div>
                    </div>
                </h1>
            </div>
        </>
    );
}
