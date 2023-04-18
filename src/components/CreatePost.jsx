import React, { useState } from "react";

const CreatePost = ({ user }) => {
  let [post, setPost] = useState("");

  let date = new Date();
  var month = date.getMonth();
  var day = date.getDay();
  var year = date.getFullYear();

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
        id: 2,
        user: user,
        content: post,
        date: `${year}/${month}/${day}`,
      }),
    });
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
