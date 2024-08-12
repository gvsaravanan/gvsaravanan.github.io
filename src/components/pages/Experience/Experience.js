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
              <div style={{ marginTop: "-0.3rem" }}>
                <h5 className={style["job"]}>Software Engineer Intern</h5>
                <h6 className={style["dates"]}>May 2024 -- Aug 2024&nbsp;</h6>
              </div>
              <h6 className={style["company"]}>&nbsp;&nbsp;Radical AI</h6>
              <ul className={style["description"]}>
                <li>
                  Engaged in full-stack development, working with both UI
                  components and server-side logic of AI applications
                </li>
                <li>
                  Boosted user engagement by 50% by developing and implementing
                  new interactive features on the company platform website,
                  ensuring reliable, real-time communication for over 5,000
                  active users
                </li>
                <li>
                  Implemented a dynamic data visualization Activity Dashboard
                  enabling users to generate customized reports and insights of
                  their own interactions and queries
                </li>
                <li style={{ textDecoration: "underline" }}>
                  React, Python, Javascript, HTML, CSS, Node.js, OpenAI, Vercel,
                  Material UI
                </li>
              </ul>
            </div>

            <div className={style["exp"]}>
              <div style={{ marginTop: "-0.3rem" }}>
                <h5 className={style["job"]}>Software Engineer Intern</h5>
                <h6 className={style["dates"]}>Jun 2022 -- Aug 2023&nbsp;</h6>
              </div>
              <h6 className={style["company"]}>
                &nbsp;&nbsp;InMotion Software
              </h6>
              <ul className={style["description"]}>
                <li>
                  Developed an intricate sitemap blueprint of the company
                  website representing the website structure, navigation flow,
                  and inter-page relationships, allowing for more efficient
                  content management & website maintenance
                </li>
                <li>
                  Implemented enhanced user interfaces and streamlined
                  navigation, leading to a 20% increase in user engagement rates
                </li>
                <li>
                  Analyzed and debugged software with detailed bug reports and
                  solutions, which reduced bug resolution time by 40%
                </li>
                <li style={{ textDecoration: "underline" }}>
                  Stack: JavaScript, PHP, WordPress, HTML, CSS, Jira, Figma
                </li>
              </ul>
            </div>

            <div className={style["exp"]}>
              <div style={{ marginTop: "-0.3rem" }}>
                <h5 className={style["job"]}>Software Engineer Intern</h5>
                <h6 className={style["dates"]}>May 2021 -- Aug 2021&nbsp;</h6>
              </div>
              <h6 className={style["company"]}>&nbsp;&nbsp;Dev Launchers</h6>
              <ul className={style["description"]}>
                <li>
                  Architected Dev Launcher's new platform website, attracting
                  over 10,000 users within the first month
                </li>
                <li>
                  Actively participated in code reviews with other developers,
                  providing constructive feedback and implementing best
                  practices, which decreased bug reports by 50%
                </li>
                <li>
                  Translated design mockups into visually appealing and
                  user-friendly front-end components, enhancing user experience
                </li>
                <li style={{ textDecoration: "underline" }}>
                  Stack: React, JavaScript, HTML, CSS, Git, Figma
                </li>
              </ul>
            </div>
          </div>
        </h1>
      </div>
    </>
  );
}
