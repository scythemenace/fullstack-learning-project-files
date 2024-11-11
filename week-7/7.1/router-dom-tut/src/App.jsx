import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Landing } from "./components/Landing";
const Dashboard = lazy(() => import("./components/Dashboard")); //Brings bundles in batches based on need
import "./App.css";

function App() {
	return (
		<>
			{/* 
      Not the best way to do routing as it doesn't leverage the fact
      that we don't need to re-fetch all files if we change routes
      <button
				onClick={() => {
					window.location.href = "/";
				}}
			>
				Landing Page
			</button>
			<button
				onClick={() => {
					window.location.href = "/dashboard";
				}}
			>
				Dashboard
			</button> */}
			{/*The better way is to use the useNavigate() hook provided by
      the react-router-dom. It makes sure it doesn't do a hard reload
      of the page. It is simply changing the route and keeping the 
      same client bundle.*/}
			{/*You cannot use useNavigate() inside a component that is not
      a Browser Router, therefore we create a new component
      <AppConstant> and render it using that inside of Browser
      Router */}

			<BrowserRouter>
				<AppBar />
				<Routes>
					<Route
						path="/dashboard"
						element={
							<Suspense fallback={"...loading"}>
								<Dashboard />
							</Suspense>
						}
					/>
					<Route
						path="/"
						element={
							<Suspense fallback={"...loading"}>
								<Landing />
							</Suspense>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

function AppBar() {
	const navigate = useNavigate();
	return (
		<div>
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				Landing
			</button>
			<button
				onClick={() => {
					navigate("/dashboard");
				}}
			>
				Dashboard
			</button>
			<br />
			<br />
		</div>
	);
}

export default App;
