import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDisplay from "./components/PostDisplay";
import Display from "./components/Display";

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
  //   <Routes>
  //   <Display users={users} posts={posts} />
  // </Routes>
  return (
    <Router>
      <Nav users={users} />
      {/* <PostDisplay posts={posts} /> */}
      <Routes>
        <Route path="/" element={<PostDisplay posts={posts} />} />
      </Routes>
    </Router>
  );
}

export default App;
