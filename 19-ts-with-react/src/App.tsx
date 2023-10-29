import React from 'react';
import './App.css';
import { Todos } from './components/Todos';

const todos = [
  {title: "learn React"},
  {title: "learn Typescript"}
]
function App() {
  return (
    <div className="App">
      <Todos listItems={todos}/>
    </div>
  );
}

export default App;
