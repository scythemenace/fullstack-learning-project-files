import { useState } from "react";
import "./App.css";

/*
according to react you can't just define any variable as state and say it's a state
let state = {
  count: 0,
};
*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count * 100} setCount={setCount}></CustomButton>
    </div>
  );
}

// The function below can take state variables as inputs
// We can create children components and the app function has only one job ideally, to render all the childern components
const CustomButton = (props) => {
  /*
   So basically this function takes whatever "props" it gets as an input and render that
   It's not just getting state as the input, it's also getting the state updater as the input
  */
  const onClickHandler = () => {
    props.setCount(props.count + 1);
  };

  return <button onClick={onClickHandler}>Counter {props.count}</button>;
  /*
    Originally when react was written it was just a basic slightly easier way to create DOM functionality. Earlier it used to be
    return React.createElement(
    'button',
    {onClick: onButtonClick},
    `Counter ${props.count}`

    All of the above code gets transpiled into what we've written above:-
    return <button onClick={onClickHandler}>Counter {props.count}</button>;

    Transpilation is fundamentally different from compilation, in transpilation a source code gets converted into another
    source code. It's basically a syntactic sugar for the DOM code 
   */
};

export default App;
