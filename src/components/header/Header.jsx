import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header  navbar   is-primary is-fixed-top">
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/allUsers">
          Users
        </Link>
      </div>
    </div>
  );
};

export default Header;
