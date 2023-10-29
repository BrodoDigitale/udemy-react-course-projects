import { FC, ReactNode } from "react"

type Item = {
    title: string;
}
type todosProps = {
    listItems: Item[],
    children?: ReactNode,
}

export const Todos: FC<todosProps> = ({listItems}) => {
    return(<ul>
        {listItems.map(item => {
            return <li key={item.title}>{item.title}</li>
        })}
    </ul>)

}