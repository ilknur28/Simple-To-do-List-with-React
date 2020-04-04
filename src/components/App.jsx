import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleItem(event) {
    // Save the value of the input field to the State
    const newValue = event.target.value;

    setInputText(newValue);
  }

  function addItem() {
    // Add new item to an Array and clear the Input field

    setItems((prevItems) => {
      return [...prevItems, inputText]; //Add the new item to
    });

    setInputText(""); // Clears the input field
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) =>{
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input autoFocus onChange={handleItem} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              itemText={toDoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
