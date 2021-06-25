import React from "react";
import style from "./Home.module.css";

export default function Home() {
    return (
        <>
            <div className={style["home"]}>
                <h1>HOME</h1>
                <div className={style["btn-group"]}>
                    <button>Look at my experiences!</button>
                    <button>Check out my accomplishments!</button>
                    <button>View my projects!</button>
                    <button>Learn more about me!</button>
                </div>
            </div>
        </>
    );
}
