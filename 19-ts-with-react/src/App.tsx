import React from 'react';
import './App.css';
import { Todos } from './components/Todos';

const todos = [
  {id: "1", title: "learn React"},
  {id: "2", title: "learn Typescript"}
]
function App() {
  return (
    <div className="App">
      <Todos listItems={todos}/>
    </div>
  );
}

export default App;
