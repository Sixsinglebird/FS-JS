import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav" className="bottom-element">
      <ul>
        <button>
          <Link to="/Credits">Credits</Link>
        </button>

        <button>
          <Link to="/">Sign-Out</Link>
        </button>
      </ul>
    </div>
  );
};

export default Nav;
