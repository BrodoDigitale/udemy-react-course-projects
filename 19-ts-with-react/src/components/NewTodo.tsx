import { FormEvent } from "react";

export const NewTodo = () => {
  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo</label>
      <input type="text" id="todo" />
      <button>Add todo</button>
    </form>
  );
};
