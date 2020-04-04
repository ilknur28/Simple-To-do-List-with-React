import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Header from "./Header";

function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    // Add new item to an Array and clear the Input field

    setItems((prevItems) => {
      return [...prevItems, inputText]; //Add the new item to
    });

      
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
    <Header />

    <InputArea 
      onAdd={addItem}
    />  

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
