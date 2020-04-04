import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div>
      <li onClick={() => {
           props.onChecked(props.id); 
      }}>
      {props.itemText} </li>
    </div>
  );
}

export default ToDoItem;
