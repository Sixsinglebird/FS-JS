import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div id="posts">
      {posts.map((post) => (
        <Post user={post.userID} content={post.content} date={post.date} />
      ))}
      <hr />
    </div>
  );
};

export default Posts;
