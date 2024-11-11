import "./App.css";
import { useRecoilValue, RecoilRoot } from "recoil";
import { totalNotificationCount, updates } from "./store/atoms";

function App() {
	return (
		<>
			<RecoilRoot>
				<NavBar></NavBar>
			</RecoilRoot>
		</>
	);
}

function NavBar() {
	const updateVal = useRecoilValue(updates);
	const parsedNetworkValue =
		updateVal.network >= 99 ? "99+" : updateVal.network;
	const totalNotification = useRecoilValue(totalNotificationCount);

	return (
		<>
			<button>Home</button>
			<button>My network({parsedNetworkValue})</button>
			<button>Jobs {updateVal.jobs}</button>
			<button>Messaging({updateVal.messaging})</button>
			<button>Notifications {updateVal.notifications}</button>
			<button>Me ({totalNotification})</button>
		</>
	);
}

export default App;
