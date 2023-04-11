import React from "react";
import PostHead from "./PostHead";

const Post = ({ user, date, content }) => {
  const fetchUser = async (id) =>
    await fetch(`http://localhost:8000/users/${id}`)
      .then((rsp) => rsp.json())
      .then(console.log);

  fetchUser(user);

  return (
    <div className="post">
      <PostHead user={user} date={date} />
      <blockquote>{content}</blockquote>
    </div>
  );
};

export default Post;
