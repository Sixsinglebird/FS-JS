import React from "react";

const PostHead = ({ user, date }) => {
  return (
    <div className="postHead display">
      <h3 className="user">{user}</h3>
      <h4 className="date">{date}</h4>
    </div>
  );
};

export default PostHead;
