import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
// the component useState keeps track of the usename and password values
// it also defines three functions
//handle(Username + Password)Change and handle submit
//the first two functions  update the
//state of the componet when the user types in the inputs
//values to the console when the user submits the form

const Login = ({
  setPassword,
  setUsername,
  username,
  password,
  users,
  setUsers,
  fetchUsers,
}) => {
  useEffect(() => {
    const getUsers = async () => setUsers(await fetchUsers());
    getUsers();
  }, []);

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
    if (username === "") {
      alert("username cannot be blank");
    } else {
      let a = true;
      users.map((user) => {
        if (user.userName === username) {
          verifyPassword(password, user.password);
          return (a = false);
        }
        return {};
      });
      if (a) {
        alert("no user found");
      }
    }
  };

  const handleSubmit = (event) => {
    verify(username, password);
    event.preventDefault();
    document.querySelector("#password").value = "";
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Top Blog</h1>
      </header>
      <div className="content-container">
        <div id="login">
          <h2>Login</h2>
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
          <div>
            Don't Have an Account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
