import React from "react";
import style from "../css/skills.module.css";

const Skills = () => {
  return (
    <React.Fragment>
      <h2>Skills</h2>
      <p>
        Skills can be taught, personality is inherent. I prefer to keep
        learning, continue challenging myself, and do interesting things that
        matter.
      </p>
      <ul className={style["skills-list"]}>
        <li className={style["skills-list__item"]}>HTML</li>
        <li className={style["skills-list__item"]}>CSS</li>
        <li className={style["skills-list__item"]}>Javascript</li>
        <li className={style["skills-list__item"]}>React</li>
        <li className={style["skills-list__item"]}>Redux</li>
        <li className={style["skills-list__item"]}>Typescript</li>
        <li className={style["skills-list__item"]}>Bootstrap</li>
        <li className={style["skills-list__item"]}>SASS</li>
        <li className={style["skills-list__item"]}>Node.js</li>
        <li className={style["skills-list__item"]}>Next.js</li>
        <li className={style["skills-list__item"]}>Adobe Photoshop</li>
        <li className={style["skills-list__item"]}>GIT</li>
        <li className={style["skills-list__item"]}>Responsive Design</li>
        <li className={style["skills-list__item"]}>Accessibility</li>
        <li className={style["skills-list__item"]}>Performance Optimization</li>
        <li className={style["skills-list__item"]}>NPM</li>
      </ul>
    </React.Fragment>
  );
};

export default Skills;
