import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";

const App = () => {
  const [query, setQuery] = useState('');

  const updateQuery = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input type="text" value = {query} onChange={updateQuery} placeholder="Say Something" />
        <p className="echo">Echo:</p>
        <p>{query}</p>
      </div>
    </div>
  );
};

export default App;
