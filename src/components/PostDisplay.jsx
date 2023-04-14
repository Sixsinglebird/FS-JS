import React from "react";
import Posts from "./Posts";

const PostDisplay = ({ posts, user }) => {
  return (
    <div>
      <h1>{user}</h1>
      <Posts posts={posts} />
    </div>
  );
};

export default PostDisplay;
