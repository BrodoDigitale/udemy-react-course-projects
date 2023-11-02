import { FormEvent, useRef } from "react";

export const NewTodo = () => {
  const todoRefInput = useRef<HTMLInputElement>(null);
  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    const enteredText = todoRefInput.current!.value;
    if(enteredText.trim().length === 0) {
        return;
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo</label>
      <input ref={todoRefInput} type="text" id="todo" />
      <button>Add todo</button>
    </form>
  );
};
