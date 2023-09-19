import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";

const Nav = () => {
  const forceUpdateHandler = () => {
    this.forceUpdate();
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list_item">
          <NavLink
            className={"nav-list_item_link"}
            to={"/about"}
            onClick={forceUpdateHandler}
          >
            About
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink
            className={"nav-list_item_link"}
            to={"/work"}
            onClick={forceUpdateHandler}
          >
            Work
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink
            className={"nav-list_item_link"}
            to={"/skills"}
            onClick={forceUpdateHandler}
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink
            className={"nav-list_item_link"}
            to={"/contact"}
            onClick={forceUpdateHandler}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
