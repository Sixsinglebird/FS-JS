import React from "react";
import User from "./User";

const Users = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <User key={user.userName} userName={user.userName} />
      ))}
    </>
  );
};

export default Users;
