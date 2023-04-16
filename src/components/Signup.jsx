import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({ nextId, users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(`http://localhost:8000/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: nextId(users),
        userName: username,
        email: email,
        password: password,
      }),
    });
  };

  return (
    <div className="display">
      <div className="center">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="enter username..."
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="enter password..."
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="enter email..."
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          Already have an account? <Link to="/">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
