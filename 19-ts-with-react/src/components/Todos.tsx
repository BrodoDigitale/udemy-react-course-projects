import { FC, useContext } from "react";
import { TodoItem } from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";


export const Todos: FC = () => {

 const ctx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <TodoItem item={item}/>
      ))}
    </ul>
  );
};
