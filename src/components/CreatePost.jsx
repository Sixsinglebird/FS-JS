import React from "react";

const CreatePost = ({ user }) => {
  return (
    <div className="content-container">
      <form onSubmit={() => console.log("submit")}>
        <div>
          <label>Create Post</label>
          <br />
          <input id="userName" type="text" placeholder="How was your day?" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
