import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Login from './Login';



const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <div className="display">
      <div id="signup">
        <h1>Sign up</h1>
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
        <div>
          Already have an account? <Link to="/Login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
