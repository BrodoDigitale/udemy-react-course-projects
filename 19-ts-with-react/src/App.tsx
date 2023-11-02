import React from 'react';
import './App.css';
import { Todos } from './components/Todos';
import { NewTodo } from './components/NewTodo';

const todos = [
  {id: "1", title: "learn React"},
  {id: "2", title: "learn Typescript"}
]
function App() {
  const addTodoHandler = (text: string) => {
    todos.push( {
      id: todos[todos.length - 1].id + 1,
      title: text, 
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos listItems={todos}/>
    </div>
  );
}

export default App;
