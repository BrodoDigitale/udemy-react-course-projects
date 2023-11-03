import React, { useState } from "react";
import { Item } from "../models/todo";
import { FC } from "react";

type TodoContext = {
  items: Item[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContext>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: FC = (props) => {
  const [todos, setTodos] = useState<Item[]>([]);
  
  const onAddTodo = (text: string) => {
    const newTodo = {
      id: (todos.length + 1).toString(),
      title: text,
    };
    setTodos((prevTodos) => {
      return [newTodo, ...prevTodos];
    });
  };

  const onRemoveTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id);
    });
  };

  const contextValue: TodoContext = {
    items: todos,
    addTodo: onAddTodo,
    removeTodo: onRemoveTodo,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
