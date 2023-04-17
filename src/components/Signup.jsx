import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add logic to create a new user with the entered username and password
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Top Blog</h1>
      </header>
      <div className="display">
        <div id="signup">
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Username&nbsp;
                <input
                  type="text"
                  placeholder="enter username..."
                  value={username}
                  onChange={handleUsernameChange}
                />
              </label>
            </div>
            <div>
              <label>
                Password&nbsp;
                <input
                  type="password"
                  placeholder="enter password..."
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="login-box">
            Already have an account? <Link to="/">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
