import React from "react";

const Profile = ({ user, users }) => {
  const fetchUser = async (username) => {
    users.map((user) => {
      if (username === user.userName) {
        return user.id;
      }
      return {};
    });
  };
  console.log(fetchUser(user));

  return <div>{user}</div>;
};

export default Profile;
