import { FC, ReactNode } from "react"
import { Item } from "../models/todo"
import { TodoItem } from "./TodoItem"

type todosProps = {
    listItems: Item[],
    children?: ReactNode,
}

export const Todos: FC<todosProps> = ({listItems}) => {
    return(<ul>
        {listItems.map(item => <TodoItem item={item}/>)}
    </ul>)

}