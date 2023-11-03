import { FormEvent, useRef, FC, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";


export const NewTodo: FC= () => {
  const todoRefInput = useRef<HTMLInputElement>(null);
  const ctx = useContext(TodosContext);
  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    const enteredText = todoRefInput.current!.value;
    if(enteredText.trim().length === 0) {
        return;
    }
    ctx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo">Todo</label>
      <input ref={todoRefInput} type="text" id="todo" />
      <button>Add todo</button>
    </form>
  );
};
