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
                            <p>Experience #1</p>
                        </div>
                        <div className={style["exp"]}>
                            <p>Experience #2</p>
                        </div>
                        <div className={style["exp"]}>
                            <p>Experience #3</p>
                        </div>
                    </div>
                </h1>
            </div>
        </>
    );
}
