import React from "react";
import Posts from "./Posts";

const PostDisplay = ({ posts, user }) => {
  return (
    <div id="posts">
      <h1>Welcome {user}</h1>
      <Posts posts={posts} />
    </div>
  );
};

export default PostDisplay;
