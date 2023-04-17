import React, { useEffect } from "react";
import Posts from "./Posts";
import CreatePost from "./CreatePost";

const PostDisplay = ({ posts, user }) => {
  useEffect(() => console.log("use effect"));
  return (
    <div id="posts">
      <h1>Welcome {user}</h1>
      <CreatePost />
      <Posts posts={posts} />
    </div>
  );
};

export default PostDisplay;
