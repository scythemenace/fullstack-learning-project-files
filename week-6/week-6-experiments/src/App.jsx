import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  
  const [random, setRandom] = useState(0);
  const setRandomNum = () => {
    const number = Math.random();
    setRandom(number);
  };
  return (
    <>
      <button onClick={setRandomNum}>Click me to change number</button>
      <br />
      <br />
      <Header num={random}></Header>
      <Header num={"Hello"}></Header>
      <Header num={"Bye"}></Header>
    </>
  );
}

export default App;
