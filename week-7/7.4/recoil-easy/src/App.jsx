import "./App.css";
import { useRecoilValue, RecoilRoot } from "recoil";
import {
	jobsAtom,
	messageAtom,
	networkAtom,
	notificationAtom,
	totalNotificationCount,
} from "./store/atoms";

function App() {
	/*We don't want to do this using useState */
	return (
		<>
			<RecoilRoot>
				<NavBar></NavBar>
			</RecoilRoot>
		</>
	);
}

function NavBar() {
	const networkValue = useRecoilValue(networkAtom);
	const parsedNetworkValue = networkValue >= 99 ? "99+" : networkValue;
	const jobsValue = useRecoilValue(jobsAtom);
	const messageValue = useRecoilValue(messageAtom);
	const notificationsValue = useRecoilValue(notificationAtom);
	const totalNotification = useRecoilValue(totalNotificationCount);

	/*Let's say we want to put total notification count in front of Me. We could do this the sloppy way below:
	const totalNotifcationCount =
		networkValue + jobsValue + messageValue + notificationsValue;
	<button>Me ({totalNotifcationCount})</button>
	but better way to do it is using selectors since they are derived from other atoms. The problem is we are not
	memoizing the value which means if any of the atoms' value changes, we recalculate the sum. A simple memoization
	would also solve the problem but selectors does the same thing and I prefer everything related to states in a single file
	instead of spreadout state logic.*/
	return (
		<>
			<button>Home</button>
			<button>My network({parsedNetworkValue})</button>
			<button>Jobs {jobsValue}</button>
			<button>Messaging({messageValue})</button>
			<button>Notifications {notificationsValue}</button>
			<button>Me ({totalNotification})</button>
		</>
	);
}

export default App;
