import React from "react";
import Sidebar from "./Sidebar";
import PostDisplay from "./PostDisplay";

const Main = ({ users, posts, user, nextId, setPosts }) => {
  return (
    <>
      <Sidebar users={users} user={user} />
      <PostDisplay
        posts={posts}
        user={user}
        nextId={nextId}
        setPosts={setPosts}
      />
    </>
  );
};

export default Main;
