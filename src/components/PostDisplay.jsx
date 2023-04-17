import React from "react";
import Posts from "./Posts";
import CreatePost from "./CreatePost";

const PostDisplay = ({ posts, user }) => {
  return (
    <div id="posts">
      <h1>Welcome {user}</h1>
      <CreatePost user={user} />
      <Posts posts={posts} />
    </div>
  );
};

export default PostDisplay;
