import React, { useState, useEffect } from "react";

const PostHead = ({ user, date }) => {
  const fetchUser = async (id) => {
    let rsp = await fetch(`http://localhost:8000/users/${id}`);
    let data = await rsp.json();
    return data;
  };

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUserName = async () => {
      let userData = await fetchUser(user);
      setUserName(userData.userName);
    };
    getUserName();
  }, [user]);

  return (
    <div className="postHead display">
      <h3 className="user">{userName}</h3>
      <h4 className="date">{date}</h4>
    </div>
  );
};

export default PostHead;
