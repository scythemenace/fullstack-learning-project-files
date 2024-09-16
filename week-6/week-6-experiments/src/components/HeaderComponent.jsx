import { useState } from "react";
import { Header } from "./Header";

export function HeaderComponent() {
  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    const randomNum = Math.random();
    setNumber(randomNum);
  };

  return (
    <>
      <button onClick={changeNumber}>Click me to change the number</button>
      <br />
      <br />
      <Header title={number}></Header>
    </>
  );
}
