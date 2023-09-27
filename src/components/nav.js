import React, { useState, memo, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../css/nav.css";

const Nav = memo(() => {
  const ForceUpdateHandler = (e) => {
    this.forceUpdate();
  };

  return (
    <nav className="nav" key={Math.random()}>
      <ul className="nav-list">
        <li className="nav-list_item">
          <NavLink
            className={"nav-list_item_link"}
            to={"/about"}
            onClick={ForceUpdateHandler}
          >
            About
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink
            className={"nav-list_item_link"}
            to={"/work"}
            onClick={ForceUpdateHandler}
          >
            Work
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink
            className={"nav-list_item_link"}
            to={"/skills"}
            onClick={ForceUpdateHandler}
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-list_item">
          <NavLink
            className={"nav-list_item_link"}
            to={"/contact"}
            onClick={ForceUpdateHandler}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
});

export default Nav;
