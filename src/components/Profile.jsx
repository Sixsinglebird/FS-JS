import React from "react";
import UserPosts from "./UserPosts";

const Profile = ({ user, users }) => {
  const fetchUser = (username) => {
    let tmpId = 0;
    let tmpEmail = "";
    users.map((user) => {
      if (username === user.userName) {
        tmpId = user.id;
        tmpEmail = user.email;
      }
      return {};
    });
    return { tmpEmail, tmpId };
  };

  let data = fetchUser(user);

  return (
    <div id="profile">
      <h1>{user}</h1>
      <h2>{data.tmpEmail}</h2>
      <UserPosts id={data.tmpId} />
    </div>
  );
};

export default Profile;
