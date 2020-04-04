import React, { useState } from "react";

function ToDoItem(props) {
  function finishedTask() {}

  return (
    <div>
      <li onClick={finishedTask}>{props.itemText} </li>
    </div>
  );
}

export default ToDoItem;
