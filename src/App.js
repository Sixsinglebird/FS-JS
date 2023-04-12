import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import { Routes, Route } from "react-router-dom";

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

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Display users={users} posts={posts} />}>
          <Route index element={<></>} />
          <Route path="blogs" element={<></>} />
          <Route path="contact" element={<></>} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes> */}
      <Display users={users} posts={posts} />
    </>
  );
}

export default App;
