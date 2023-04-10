import React from "react";
import Nav from "./Nav";
import PostDisplay from "./PostDisplay";

const Display = () => {
  return (
    <>
      <div className="display">
        <Nav />
        <PostDisplay />
      </div>
    </>
  );
};

export default Display;
