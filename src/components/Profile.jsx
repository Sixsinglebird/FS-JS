import React from "react";

const Profile = ({ user, users }) => {
  const fetchUser = (username) => {
    let tmpId = 0;
    let tmpEmail = "";
    users.map((user) => {
      if (username === user.userName) {
        tmpId = user.id;
        tmpEmail = user.email;
      }
    });
    return { tmpEmail, tmpId };
  };

  const fetchUserPosts = (id) => {};

  let data = fetchUser(user);
  console.log(data);

  return (
    <div>
      <h1>{user}</h1>
      <h2>{data.tmpEmail}</h2>
    </div>
  );
};

export default Profile;
