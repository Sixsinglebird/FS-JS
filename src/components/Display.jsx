import React from "react";
import Nav from "./Nav";
import PostDisplay from "./PostDisplay";

const Display = ({ users, posts }) => {
  return (
    <>
      <div>
        <Nav users={users} />
        <PostDisplay posts={posts} />
      </div>
    </>
  );
};

export default Display;
