import { useContext, useState } from "react";
import { CountContext } from "./context";
import "./App.css";
/*Context API works better syntactically than prop drilling since it gives you a way to kinda "teleport" from one state to another.
Instead of passing the props to unwanted states who are parents to the component that needs them, we can straight pass it to the relevant
component.*/

/* In order to make sure we don't pass count as a prop here since Count doesn't even use it directly, in order to teleport directly
we need to create initialize a context for it using the context API. We have already done it, in the context.jsx file. What we need
to do now is to just wrap the Count component inside a Context provider, which basically provides the context value later on and
wrap all the components that want to use that teleported value.
We provide the value as the prop we want to pass down to the teleported component*/
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<CountContext.Provider value={count}>
				<Count setCount={setCount}></Count>
			</CountContext.Provider>
		</>
	);
}
function Count(props) {
	return (
		<div>
			<CountRenderer></CountRenderer>
			<Button setCount={props.setCount}></Button>
		</div>
	);
}

function CountRenderer() {
	// In order to use the value from the context, we declare it using the useContext hook by passing in the variable in the context
	const count = useContext(CountContext);
	return <div>{count}</div>;
}

function Button(props) {
	const count = useContext(CountContext);
	return (
		<div>
			<button
				onClick={() => {
					props.setCount(count + 1);
				}}
			>
				Increase
			</button>
			<button
				onClick={() => {
					props.setCount(count - 1);
				}}
			>
				Decrease
			</button>
		</div>
	);
}

export default App;
