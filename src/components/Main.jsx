import React from "react";
import Sidebar from "./Sidebar";
import PostDisplay from "./PostDisplay";

const Main = ({ users, posts }) => {
  return (
    <>
      <Sidebar users={users} />
      <PostDisplay posts={posts} />
    </>
  );
};

export default Main;
