import React, { useState } from "react";
import ReactDOM from "react-dom";

const Textt=()=> {
    const [text, setText] = useState("");
    const name = "baba";
    function handleTextChange(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleTextChange} />
            <p>show here:{text}</p>
           <h1>Hello, {name}! how are you</h1>;
        </div>
    );
}
export default Textt;

