import { countAtom, evenOdd } from "../store/count";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import "./App.css";

function App() {
	return (
		<>
			<div>
				{/*Anything that uses recoil logic needs to be wrapped around a <RecoilRoot></RecoilRoot>*/}
				<RecoilRoot>
					<Count></Count>
				</RecoilRoot>
			</div>
		</>
	);
}

function Count() {
	return (
		<div>
			<CountRenderer></CountRenderer>
			<Button></Button>
		</div>
	);
}

/*
  only the count var: useRecoilValue
  only the state update: useSetRecoilState
  both: useRecoilState

  Choose the use function carefully based on what your component needs
  since it could lead to better performance
*/

function CountRenderer() {
	const count = useRecoilValue(countAtom);
	const isEven = useRecoilValue(evenOdd);
	return (
		<div>
			Count is {count} <br />
			{isEven}
		</div>
	);
}

function Button() {
	const setCount = useSetRecoilState(countAtom);
	return (
		<div>
			<button
				onClick={() => {
					setCount((count) => count + 1);
				}}
			>
				Increase
			</button>
			<button
				onClick={() => {
					setCount((count) => count - 1);
				}}
			>
				Decrease
			</button>
		</div>
	);
}

export default App;
