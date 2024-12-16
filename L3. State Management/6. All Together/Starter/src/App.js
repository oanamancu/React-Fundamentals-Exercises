import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";

const App = () => {
  const [users, setUsers] = useState ([
    {
      username: 'a_username',
      firstName: 'a_firstName',
      lastName: 'a_lastName',
      gamesCount: 5
    },
    {
      username: 'b_username',
      firstName: 'b_firstName',
      lastName: 'b_lastName',
      gamesCount: 0
    }
  ])

  const createUser = (user) => {
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <UserList users={users}/>
      <AddUser users={users} onAddUser={createUser}/>
    </div>
  );
};

export default App;
