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
                <h5 className={style["project-name"]}>Getaway Guide</h5>
              </div>
              <ul className={style["description"]}>
                <li>
                  Pioneered a personalized travel planning chatbot using
                  OpenAI’s GPT-4o API that provides users with customized travel
                  recommendations and real-time information regarding their
                  vacation plans
                </li>
                <li>
                  Architected an intuitive interface enabling users to
                  seamlessly interact with the chatbot, simulating real
                  conversations
                </li>
                <li>
                  Enhanced the chatbot’s response accuracy and relevance through
                  continuous refinement of the user’s specific inputs
                </li>
                <li>
                  Unable to publicly provide link to project because it violates
                  OpenAI’s policy of sharing my API key
                </li>
                <li style={{ textDecoration: "underline" }}>
                  Stack: Java, Graphics, ImageIO, Color
                </li>
              </ul>
            </div>

            <div className={style["proj"]}>
              <div style={{ marginTop: "-0.3rem" }}>
                <h5 className={style["project-name"]}>GroceryTrack</h5>
                <h6 className={style["link-container"]}>
                  <a
                    href="https://github.com/gvsaravanan/Grocery-Track"
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
                  Engineered a full-stack application that allows store managers
                  to track inventory, customer purchases, and store performance
                  in real-time, improving management efficiency for online
                  orders by 40%
                </li>
                <li>
                  Built dynamic dashboards that streamlined data tracking for
                  store managers, significantly improving decision-making
                </li>
                <li>
                  Optimized database queries with a robust back-end, ensuring
                  data consistency and security for store-related transactions
                </li>
                <li style={{ textDecoration: "underline" }}>
                  Stack: JavaScript, Python, HTML, CSS, Bootstrap, Flask, SQL,
                  mySQL
                </li>
              </ul>
            </div>

            <div className={style["proj"]}>
              <div style={{ marginTop: "-0.3rem" }}>
                <h5 className={style["project-name"]}>House Price Predictor</h5>
                <h6 className={style["link-container"]}>
                  <a
                    href="https://github.com/gvsaravanan/House-Price-Predictor"
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
                  Developed a house price prediction model using a Random Forest
                  Classifier machine learning algorithm, achieving an accuracy
                  score of 90% in predicting whether adjusted house prices will
                  increase or decrease in the next quarter
                </li>
                <li>
                  Conducted data cleaning and preprocessing on datasets from
                  Zillow and Federal Reserve Economic Data (FRED)
                </li>
                <li>
                  Engineered rolling averages and forward-filling techniques to
                  analyze trends in economic indicators and house prices
                </li>
                <li style={{ textDecoration: "underline" }}>
                  Stack: Python, Pandas, NumPy, Scikit-learn, Matplotlib,
                  Jupyter Notebook, Zillow, Federal Reserve Economic Data
                </li>
              </ul>
            </div>

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
                  Developed 28+ individual projects demonstrating proficiency in
                  implementing efficient/optimized solutions
                </li>
                <li>
                  Adapted Thomas Schelling’s agent-based Segregation Model,
                  simulating segregation patterns in unique neighborhoods
                </li>
                <li>
                  Utilized Java Graphics to enhance, modify, and draw images
                  including different versions of the Mandelbrot set (fractal
                  geometric images) as well as a realistic fire animation
                </li>
                <li style={{ textDecoration: "underline" }}>
                  Stack: Java, Graphics, ImageIO, Color
                </li>
              </ul>
            </div>

            <div className={style["proj"]}>
              <div style={{ marginTop: "-0.3rem" }}>
                <h5 className={style["project-name"]}>Personal Website</h5>
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
                  Showcased my skills, projects, and achievements with custom
                  front-end components & interactive elements
                </li>
                <li>
                  Increased portfolio visibility by 50%, with over 300 unique
                  visitors each month
                </li>
                <li>
                  Showcased my skills, projects, and achievements with custom
                  front-end components & interactive elements
                </li>
                <li style={{ textDecoration: "underline" }}>
                  Stack: React, JavaScript, HTML, CSS, Git, GitHub Pages, Google
                  Analytics
                </li>
              </ul>
            </div>

            <div className={style["proj"]}>
              <div style={{ marginTop: "-0.3rem" }}>
                <h5 className={style["project-name"]}>Snake Game</h5>
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
                <li>Developed a mobile app to play the iconic snake game</li>
                <li>
                  Implemented game mechanics, including snake movement, food
                  generation, score tracking, & collision detection
                </li>
                <li>
                  Utilized Expo CLI to build the app, allowing users to easily
                  access and test the game with a server on the Expo Go app
                </li>
                <li style={{ textDecoration: "underline" }}>
                  Stack: JavaScript, React Native, TypeScript, HTML, Git, Expo
                  CLI
                </li>
              </ul>
            </div>

            <div className={style["proj"]}>
              <div style={{ marginTop: "-0.3rem" }}>
                <h5 className={style["project-name"]}>ChemBox</h5>
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
                  Competed in the JumpStart EdTech Hackathon with 3 teammates
                  and won the 1st place $350 prize among 180+ competitors in the
                  Best High School category
                </li>
                <li>
                  Chembox is a prototype of a mobile app that allows students to
                  use Augmented Reality to do experiments, dissections,
                  projects, and more from the comfort of their homes
                </li>
                <li>
                  Developed a comprehensive and detailed proposal intended to
                  help transform how students learn in the COVID-19 education
                  environment
                </li>
              </ul>
            </div>

            <div className={style["proj"]}>
              <div style={{ marginTop: "-0.3rem" }}>
                <h5 className={style["project-name"]}>GPA Calculator</h5>
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
                  Implemented a user-friendly GPA Calculator interface allowing
                  students to input semester/cycle grades for each class
                </li>
                <li>
                  Integrated the GPA Calculator into a Chrome Web Extension,
                  providing convenience & accessibility for students
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
