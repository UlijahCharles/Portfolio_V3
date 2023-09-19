import React from "react";
import "../css/button.css";
import resume from "../assets/UlijahCharles-resume.pdf";

const Button = (props) => {
  return (
    <button className={props.class}>
      {props.downloadable ? (
        <a href={resume} download>
          {props.title}
          <sup> (pdf 98kb)</sup>
        </a>
      ) : (
        <a href={props.url}>{props.title}</a>
      )}
    </button>
  );
};

export default Button;
