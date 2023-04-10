import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";

function App() {
  useEffect(() => {
    const getUsers = async () => {
      setUsers(await fetchUsers());
    };
    getUsers();
  }, []);

  // create hook
  const [users, setUsers] = useState([]);

  //  returns an array of users from json server
  const fetchUsers = async () => {
    let rsp = await fetch("http://localhost:8000/users");
    let data = await rsp.json();
    return data;
  };

  return (
    <>
      <Display users={users} />
    </>
  );
}

export default App;
