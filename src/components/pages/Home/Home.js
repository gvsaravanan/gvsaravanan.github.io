import React from "react";
import "../../.././App.css";
import style from "./Home.module.css";

export default function Home() {
    return (
        <>
            <h1 className={style["home"]}>
                {" "}
                HOME
                <div className={style["btn-group"]}>
                    <button>Click here!</button>
                    <button>Click here!</button>
                    <button>Click here!</button>
                    <button>Click here!</button>
                </div>
            </h1>
        </>
    );
}
