import { FC } from "react";
import { Item } from "../models/todo";
import classes from "./TodoItem.module.css"

type TodoItemProps = {
    item: Item,
    removeTodo: (id: string) => void;
}
export const TodoItem: FC<TodoItemProps> = ({ item, removeTodo }) => {

    const removeItem = () => {
        removeTodo(item.id)
    }
    return <li className={classes.item} key={item.id} onClick={removeItem}>{item.title}</li>;
}