import { FC } from "react";
import { Item } from "../models/todo";
import classes from "./TodoItem.module.css";

type TodoItemProps = {
  item: Item;
  removeTodo: (id: string) => void;
};
export const TodoItem: FC<TodoItemProps> = ({ item, removeTodo }) => {
  return (
    <li className={classes.item} key={item.id} onClick={removeTodo.bind(null, item.id)}>
      {item.title}
    </li>
  );
};
