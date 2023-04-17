import React from "react";

const UserPosts = ({ id }) => {
  const fetchUserPosts = async (id) => {
    let rsp = await fetch("http://localhost:8000/posts");
    let data = await rsp.json();
    return data;
  };

  return <div>UserPosts</div>;
};

export default UserPosts;
