import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ItemList from "./ItemList";
import CreateNewItem from "./CreateNewItem";
import DeleteLastItem from "./DeleteLastItem";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <CreateNewItem onAddItem={handleAddItem}/>
      <DeleteLastItem items={items} onDeleteLastItem = {handleDeleteLastItem}/>
      <ItemList items={items}/>
    </div>
  );
};

export default App;
