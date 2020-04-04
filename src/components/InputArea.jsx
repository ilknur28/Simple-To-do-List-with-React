import React, {useState} from "react";

function InputArea(props) {

    const [inputText, setInputText] = useState("");

    function handleItem(event) {
      // Save the value of the input field to the State
      const newValue = event.target.value;
  
      setInputText(newValue);
    }



  return (
    <div className="form">
      <input autoFocus onChange={handleItem} type="text" value={inputText} />
      <button onClick={() => {props.onAdd(inputText);
      {setInputText(""); // Clears the input field}} 
    }}}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
