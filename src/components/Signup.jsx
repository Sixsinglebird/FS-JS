import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// plz update
const Signup = ({ nextId, users }) => {
  const navigate = useNavigate();
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
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <h1>Top Blog</h1>
      </header>
      <div className="center  content-container">
        <div id="signup">
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username&nbsp;</label>
              <input
                type="text"
                placeholder="enter username..."
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label>Password&nbsp;</label>
              <input
                type="password"
                placeholder="enter password..."
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <label>Email&nbsp;</label>
              <input
                type="email"
                placeholder="enter email..."
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="login-box">
            Already have an account? <Link to="/">Log in</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
