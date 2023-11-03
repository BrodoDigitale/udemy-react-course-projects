import { FC, useContext } from "react";
import { Item } from "../models/todo";
import classes from "./TodoItem.module.css";
import { TodosContext } from "../store/todos-context";

type TodoItemProps = {
  item: Item;
};
export const TodoItem: FC<TodoItemProps> = ({ item }) => {
const ctx = useContext(TodosContext);
  return (
    <li className={classes.item} key={item.id} onClick={ctx.removeTodo.bind(null, item.id)}>
      {item.title}
    </li>
  );
};
