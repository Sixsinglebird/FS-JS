import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav" className="bottom-element">
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Sign-Out</li>
      </ul>
    </div>
  );
};

export default Nav;
