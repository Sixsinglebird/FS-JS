import React from "react";
import Users from "./Users";
import Nav from "./Nav";

const Sidebar = ({ users }) => {
  return (
    <div id="sidebar">
      <h1 id="logo">Top-Blog</h1>
      <br />
      <Users users={users} />
      <Nav />
    </div>
  );
};

export default Sidebar;
