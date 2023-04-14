import React from "react";
import Sidebar from "./Sidebar";
import PostDisplay from "./PostDisplay";

const Main = ({ users, posts, user }) => {
  return (
    <>
      <Sidebar users={users} user={user} />
      <PostDisplay posts={posts} user={user} />
    </>
  );
};

export default Main;
