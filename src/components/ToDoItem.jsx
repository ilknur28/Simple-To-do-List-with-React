import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div onClick={() => {
        props.onChecked(props.id); 
   }}>
      <li>{props.itemText} </li>
    </div>
  );
}

export default ToDoItem;