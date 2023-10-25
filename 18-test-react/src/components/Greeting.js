import { useState } from "react";
import { Wrapper } from "./Wrapper";


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
      <Wrapper>
        <h2>Hello world</h2>
        <p>Good to see yo!</p>
        <button onClick={handleTextChange}>{text}</button>
      </Wrapper>
    </div>
  );
};
