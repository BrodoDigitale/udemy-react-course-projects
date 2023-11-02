import { FC, ReactNode } from "react";
import { Item } from "../models/todo";
import { TodoItem } from "./TodoItem";
import classes from "./Todos.module.css";

type todosProps = {
  listItems: Item[];
  removeTodo: (id: string) => void;
};

export const Todos: FC<todosProps> = ({ listItems, removeTodo }) => {
  return (
    <ul className={classes.todos}>
      {listItems.map((item) => (
        <TodoItem item={item} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};
