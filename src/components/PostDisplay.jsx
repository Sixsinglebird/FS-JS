import React from "react";
import Posts from "./Posts";
import CreatePost from "./CreatePost";

const PostDisplay = ({ posts, user }) => {
  return (
    <div id="posts">
      <header style={{ display: "flex", width: "100%" }}>
        <h1>Welcome {user}</h1>
        <CreatePost user={user} />
      </header>
      <Posts posts={posts} />
    </div>
  );
};

export default PostDisplay;
