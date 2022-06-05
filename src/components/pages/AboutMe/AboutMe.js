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
                            <p>Fun facts about me</p>
                        </div>
                    </div>
                </h1>
            </div>
        </>
    );
}
