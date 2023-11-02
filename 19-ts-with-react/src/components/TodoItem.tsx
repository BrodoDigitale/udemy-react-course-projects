import { FC } from "react";
import { Item } from "../models/todo";
import classes from "./TodoItem.module.css"

type TodoItemProps = {
    item: Item,
}
export const TodoItem: FC<TodoItemProps> = ({ item }) => {
    return <li className={classes.item} key={item.id}>{item.title}</li>;
}