import React, { useState } from "react";

const CreatePost = ({ user, nextId, setPosts, posts }) => {
  let [post, setPost] = useState("");

  // set constants and hooks 4 post
  let date = new Date();
  var month = date.getMonth();
  var day = date.getDay();
  var year = date.getFullYear();
  let postId = nextId(posts);
  let postDate = `${year}/${month}/${day}`;

  const handleContentChange = (event) => {
    setPost(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(`http://localhost:8000/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: postId,
        user: user,
        content: post,
        date: postDate,
        key: `${postId}${user}${postDate}`,
      }),
    });
    await setPosts([
      ...posts,
      {
        id: postId,
        user: user,
        content: post,
        date: postDate,
        key: `${postId}${user}${postDate}`,
      },
    ]);
    document.querySelector("#content").value = "";
  };

  return (
    <div className="display content-container" style={{ marginLeft: "auto" }}>
      <form onSubmit={handleSubmit}>
        <input
          id="content"
          type="text"
          placeholder="How was your day?"
          onChange={handleContentChange}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
