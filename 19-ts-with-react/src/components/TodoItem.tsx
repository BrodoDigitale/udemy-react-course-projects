import { FC } from "react";
import { Item } from "../models/todo";

type TodoItemProps = {
    item: Item,
}
export const TodoItem: FC<TodoItemProps> = ({ item }) => {
    return <li key={item.id}>{item.title}</li>;
}