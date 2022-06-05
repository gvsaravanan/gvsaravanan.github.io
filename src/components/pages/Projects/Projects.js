import React from "react";
import style from "./Projects.module.css";

export default function Projects() {
    return (
        <>
            <div className={style["projects"]}>
                <h1>
                    PROJECTS
                    <div className={style["proj-container"]}>
                        <div className={style["proj"]}>
                            <p>Project #1</p>
                        </div>
                        <div className={style["proj"]}>
                            <p>Project #2</p>
                        </div>
                        <div className={style["proj"]}>
                            <p>Project #3</p>
                        </div>
                    </div>
                </h1>
            </div>
        </>
    );
}
