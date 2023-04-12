import React from "react";
import PostHead from "./PostHead";

const Post = ({ user, date, content }) => {
  return (
    <div className="post">
      <PostHead user={user} date={date} />
      <blockquote>{content}</blockquote>
      <hr />
    </div>
  );
};

export default Post;
