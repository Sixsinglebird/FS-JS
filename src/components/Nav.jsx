import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav" className="bottom-element">
      <ul>
        <li>
          <Link to="/main">Home</Link>
        </li>
        <li>
          <Link to="/profile">edit profile</Link>
        </li>
        <li>
          <Link to="/">Sign-Out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
