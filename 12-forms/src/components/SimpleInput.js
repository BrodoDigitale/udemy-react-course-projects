import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const inputHandler = (evt) => {
    setEnteredName(evt.target.value);
    
  }

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log(enteredName);
    setEnteredName("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={inputHandler} value={enteredName}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
