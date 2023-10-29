import { FC, ReactNode } from "react"
import { Item } from "../models/todo"

type todosProps = {
    listItems: Item[],
    children?: ReactNode,
}

export const Todos: FC<todosProps> = ({listItems}) => {
    return(<ul>
        {listItems.map(item => {
            return <li key={item.id}>{item.title}</li>
        })}
    </ul>)

}