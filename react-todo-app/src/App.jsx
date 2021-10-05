import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "todo 1", completed: true },
    { id: 2, text: "todo 2", completed: false },
    { id: 3, text: "todo 3", completed: true },
  ]);
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.text} <input type="checkbox" checked={todo.completed} />
        </p>
      ))}
    </div>
  );
};

export default App;
