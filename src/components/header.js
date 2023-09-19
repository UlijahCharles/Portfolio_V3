import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const forceUpdateHandler = () => {
    this.forceUpdate();
  };

  return (
    <header className="header">
      <div className="header-panel">
        <Link to="/" className="header-panel_logo" onClick={forceUpdateHandler}>
          UlijahCharles
        </Link>
      </div>
    </header>
  );
};

export default Header;
