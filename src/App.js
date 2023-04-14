import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from './components/Signup';
import { Link } from 'react-router-dom';



function App() {
  useEffect(() => {
    const getUsers = async () => {
      setUsers(await fetchUsers());
    };
    const getPosts = async () => {
      setPosts(await fetchPosts());
    };
    // must call programs to run them lmaoooo
    getUsers();
    getPosts();
  }, []);

  // create hooks
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // returns an array of posts from json server
  const fetchPosts = async () => {
    let rsp = await fetch("http://localhost:8000/posts");
    let data = await rsp.json();
    return data;
  };

  //  returns an array of users from json server
  const fetchUsers = async () => {
    let rsp = await fetch("http://localhost:8000/users");
    let data = await rsp.json();
    return data;
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setUsername={setUsername}
              setPassword={setPassword}
              username={username}
              password={password}
              users={users}
            />
          }
        />
        <Route
          path="/main"
          element={<Main users={users} posts={posts} user={username} />}
        />
        <Route
          path="/profile"
          element={<Profile id={username} users={users} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            <Login
              setUsername={setUsername}
              setPassword={setPassword}
              username={username}
              password={password}
              users={users}
            />
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
