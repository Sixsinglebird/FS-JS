import React, { useEffect, useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
// the component useState keeps track of the usename and password values
// it also defines three functions
//handle(Username + Password)Change and handle submit
//the first two functions  update the
//state of the componet when the user types in the inputs
//the submit function logs the username and passwords
//values to the console when the user submits the form

const Login = ({ setPassword, setUsername, username, password }) => {
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
    navigate("/main");
  };

  return (
    <div className="display">
      <div id="login">
        <h1>Login</h1>
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
      </div>
    </div>
  );
};

export default Login;
