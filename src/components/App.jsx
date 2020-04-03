import React, {useState} from "react";

function App() {

  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleItem(event) {  // Save the value of the input field to the State
    const newValue = event.target.value;

    setItem(newValue);
  }

  function addItem() { // Add new item to an Array and clear the Input field
    

    setItems((prevItems) => {
        return [...prevItems, item] //Add the new item to
    });

    setItem(""); // Clears the input field
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">

        <input autoFocus onChange={handleItem} type="text" name="item" value={item} />
        <button onClick={addItem}><span>Add</span></button>


      </div>
      <div>
        <ul>
       { items.map((toDoItem) => <li>{toDoItem} </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
