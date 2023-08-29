import React from "react";
import { Link } from "react-router-dom";
import GitHubLogo from "../assets/github-icon.png";
import LinkedInLogo from "../assets/linkedin-icon.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social">
        <li>
          <Link
            to={"https://github.com/UlijahCharles"}
            className="social__link"
          >
            <img src={GitHubLogo} alt="Github Logo"></img>
          </Link>
        </li>
        <li>
          <Link
            to={"https://www.linkedin.com/in/ulijahcharles/"}
            className="social__link"
          >
            <img src={LinkedInLogo} alt="LinkedIn Logo"></img>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
