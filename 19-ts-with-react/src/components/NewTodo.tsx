import { FormEvent, useRef, FC } from "react";
import classes from "./NewTodo.module.css";


export const NewTodo: FC<{onAddTodo: (newTodo: string) => void}>= ({onAddTodo}) => {
  const todoRefInput = useRef<HTMLInputElement>(null);
  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    const enteredText = todoRefInput.current!.value;
    if(enteredText.trim().length === 0) {
        return;
    }
    onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo">Todo</label>
      <input ref={todoRefInput} type="text" id="todo" />
      <button>Add todo</button>
    </form>
  );
};
