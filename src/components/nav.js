import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list_item">
          <NavLink className={"nav-list_item_link"} to={"/about"}>
            About
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink className={"nav-list_item_link"} to={"/work"}>
            Work
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink className={"nav-list_item_link"} to={"/skills"}>
            Skills
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink className={"nav-list_item_link"} to={"/contact"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
