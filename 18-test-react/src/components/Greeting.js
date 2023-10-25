import { useState } from "react";



export const Greeting = () => {
    const [text, setText] = useState("Button");


   const handleTextChange = () => {
        if(text === "Button") {
            setText("Text changed")
        } else {
            setText("Button")
        }
    }

  return (
    <div>
      <h2>Hello world</h2>
      <p>Good to see yo!</p>
      <button onClick={handleTextChange}>{text}</button>
    </div>
  );
};
