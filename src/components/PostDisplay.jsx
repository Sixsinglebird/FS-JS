import React from "react";
import Posts from "./Posts";
import CreatePost from "./CreatePost";

const PostDisplay = ({ posts, user, setPosts, nextId }) => {
  return (
    <div id="posts">
      <h1>Welcome {user}</h1>
      <CreatePost
        user={user}
        setPosts={setPosts}
        posts={posts}
        nextId={nextId}
      />
      <Posts posts={posts} user={user} />
    </div>
  );
};

export default PostDisplay;
