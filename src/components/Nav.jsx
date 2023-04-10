import React from "react";
import Users from "./Users";

const Nav = ({ users }) => {
  return (
    <div id="navigation">
      <h1 id="logo">SomeBlog</h1>
      <Users users={users} />
    </div>
  );
};

export default Nav;
