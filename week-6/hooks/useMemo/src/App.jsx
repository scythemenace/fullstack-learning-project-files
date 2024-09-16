import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const findSum = (val) => {
    let temp = 0;
    for (let i = 0; i <= val; i++) {
      temp += i;
    }

    return temp;
  };

  let temp = useMemo(() => findSum(input), [input]);

  /*
  We could totally do something like this and it's better than the raw code, but this is still inefficient if you
  compare it to how useMemo works. In the useEffect case, we have to render twice since the first render occurs if input
  changes which forces
  useEffect(() => findSum(input), [input]);
  */

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setTimeout(() => setInput(e.target.value), 1000);
        }}
      />{" "}
      <br /> <br />
      <h4>Sum is {temp}</h4> <br />
      <button onClick={() => setCount(count + 1)}>Counter ({count})</button>
    </>
  );
}

export default App;
