import { useState } from "react";
import { Todo } from "./components/Todo";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setCurrent(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setCurrent(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setCurrent(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setCurrent(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          setCurrent(5);
        }}
      >
        5
      </button>
      <Todo id={current}></Todo>
    </div>
  );
}

export default App;
