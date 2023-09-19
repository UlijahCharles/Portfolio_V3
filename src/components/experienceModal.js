import React from "react";
import { createPortal } from "react-dom";
import style from "../css/experienceModal.module.css";

const ExperienceModal = (props) => {
  return createPortal(
    <React.Fragment>
      <div
        className={style[`background-overlay`]}
        onClick={props.onClose}
      ></div>
      <div className={style[`modal-experience`]}>
        <h2 className={style[`modal-experience-header`]}>Experience</h2>
        <ul className={style[`modal-experience-list`]}>
          <li className={style[`modal-experience-list__item`]}>
            <p className={style[`modal-experience-company`]}>
              Thor Equities, New York
            </p>
            <p className={style[`modal-experience-length`]}>
              Front-end Engineer/ IT Intern ~ 4 months
            </p>
          </li>
          <li className={style[`modal-experience-list__item`]}>
            <p className={style[`modal-experience-company`]}>
              Freelance, New York (remote)
            </p>
            <p className={style[`modal-experience-length`]}>
              Front-end Engineer ~ 3 years
            </p>
          </li>
        </ul>
      </div>
    </React.Fragment>,
    document.getElementById("modal")
  );
};

export default ExperienceModal;
