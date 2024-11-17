import { useState } from "react";
import "./App.css";

// todo application
// todo
// {
//   todos: [{title: "todo1", description: "First todo", completed: false}]
// }
//
// In the real world, everything is majorly constructed using an array, if you go on linkedin, there's a high chance
// in the backend all the posts are stored as an array
//

function App() {
  const [todo, setTodo] = useState([
    {
      title: "brush teeth",
      description: "Have to brush my teeth",
      completed: false,
    },
    {
      title: "change bedsheet",
      description: "Have to change bedsheet",
      completed: false,
    },
  ]);

  function addTodos() {
    setTodo([
      ...todo,
      {
        title: "new_todo",
        description: "description of new todo",
      },
    ]);
  }

  return (
    <>
      <button onClick={addTodos}>Add a random todo</button>
      {todo.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
