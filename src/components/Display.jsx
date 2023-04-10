import React from "react";
import Nav from "./Nav";
import PostDisplay from "./PostDisplay";

const Display = ({ users }) => {
  return (
    <>
      <div className="display">
        <Nav users={users} />
        <PostDisplay />
      </div>
    </>
  );
};

export default Display;
