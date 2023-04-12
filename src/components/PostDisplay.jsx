import React from "react";
import Posts from "./Posts";

const PostDisplay = ({ posts }) => {
  return (
    <>
      <Posts posts={posts} />
    </>
  );
};

export default PostDisplay;
