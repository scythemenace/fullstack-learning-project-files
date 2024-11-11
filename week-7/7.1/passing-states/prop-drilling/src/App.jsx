import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Count count={count} setCount={setCount}></Count>
		</>
	);
}

function Count(props) {
	/*Even though we aren't using setCount in the count function, we have to still pass it in the Count since the button
  which is the child, therefore we must pass it. This is what prop drilling is.

  Note:- Prop drilling has nothing to do with re-renders of the parents causing the chiild to re-render. That will happen anyway since
  we had defined count and setCount in the parent component, but prop drilling is not the right term for that. Prop drilling
  essentially refers to the syntactical uneasiness that when writing code since we are passing props down to components
  that don't even use it but it's necessary since their children or grandchildren might use it.*/
	return (
		<div>
			{props.count}
			<Button count={props.count} setCount={props.setCount}></Button>
		</div>
	);
}

function Button(props) {
	return (
		<div>
			<button
				onClick={() => {
					props.setCount(props.count + 1);
				}}
			>
				Increase
			</button>
			<button
				onClick={() => {
					props.setCount(props.count - 1);
				}}
			>
				Decrease
			</button>
		</div>
	);
}

export default App;
