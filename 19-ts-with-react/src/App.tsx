import React, { useState } from 'react';
import './App.css';
import { Todos } from './components/Todos';
import { NewTodo } from './components/NewTodo';
import { Item } from './models/todo';

const initialTodos = [
  {id: "1", title: "learn React"},
  {id: "2", title: "learn Typescript"}
]
function App() {
  const [todos, setTodos] = useState<Item[]>(initialTodos);
  const onAddTodo = (text: string) => {
    const newTodo = {
      id: (todos.length + 1).toString(),
      title: text,
    }
    setTodos((prevTodos) => { 
      return [ newTodo, ...prevTodos]
    })
  }

  const onRemoveTodo = (id: string) =>  {
    setTodos(prevTodos => {
      return prevTodos.filter((item) => item.id !== id);
    });
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={onAddTodo}/>
      <Todos listItems={todos} removeTodo={onRemoveTodo}/>
    </div>
  );
}

export default App;
