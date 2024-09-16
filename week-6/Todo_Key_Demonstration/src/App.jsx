import { useState } from "react";
import "./App.css";
import { Todo } from "./Components/Todo";
let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to the gym today",
    },
    {
      id: 2,
      title: "eat food",
      description: "eat food today",
    },
    {
      id: 3,
      title: "go to class",
      description: "go to class today",
    },
  ]);

  function addTodos() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodos}>Click here to add todo</button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          ></Todo>
        );
      })}
    </div>
  );
}

export default App;
