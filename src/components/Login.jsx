import React from "react";
import { useNavigate } from "react-router-dom";
// the component useState keeps track of the usename and password values
// it also defines three functions
//handle(Username + Password)Change and handle submit
//the first two functions  update the
//state of the componet when the user types in the inputs
//the submit function logs the username and passwords
//values to the console when the user submits the form

const Login = ({ setPassword, setUsername, username, password, users }) => {
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const verifyPassword = async (password, stored) => {
    password === stored ? navigate("/main") : alert("incorrect credentials");
  };

  const verify = async (username, password) => {
    users.map((user) => {
      if (user.userName === username) {
        verifyPassword(password, user.password);
      }
    });
  };

  const handleSubmit = (event) => {
    verify(username, password);
    event.preventDefault();
    document.querySelector("#password").value = "";
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
                id="userName"
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
                id="password"
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
