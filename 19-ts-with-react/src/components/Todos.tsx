import { FC, ReactNode } from "react"
import { Item } from "../models/todo"
import { TodoItem } from "./TodoItem"
import classes from "./Todos.module.css"

type todosProps = {
    listItems: Item[],
    children?: ReactNode,
}

export const Todos: FC<todosProps> = ({listItems}) => {
    return(<ul className={classes.todos}>
        {listItems.map(item => <TodoItem item={item}/>)}
    </ul>)

}