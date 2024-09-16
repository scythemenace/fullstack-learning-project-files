import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function Todo(props) {
  console.log(props.id);
  const [todo, setTodos] = useState({});
  const imported = () => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + props.id)
      .then((response) => {
        setTodos(response.data.todo);
      });
  };

  useEffect(imported, [props.id]);
  /*To make sure that whenever id gets changed Todo gets re-rendered
   we're going to be adding it as the dependency, without it, whenever react
   created the component for the first time, but doesn't change it*/

  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
}
