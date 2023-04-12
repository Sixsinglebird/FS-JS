import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div id="posts">
      {posts.map((post) => (
        <Post
          user={post.id}
          content={post.content}
          date={post.date}
          key={post.postID}
        />
      ))}
    </div>
  );
};

export default Posts;
