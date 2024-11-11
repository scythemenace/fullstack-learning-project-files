import React from "react";
import background from "./assets/profile-background.jpg";
import profile from "./assets/man.jpg";
import "./App.css";

function App() {
	return (
		<>
			<ProfileCard></ProfileCard>
		</>
	);
}

function ProfileCard() {
	return (
		<div className="component">
			<figure className="big-image">
				<img src={background} alt="background-image" />
			</figure>
			<figure className="profile-pic">
				<img src={profile} alt="profile picture" />
			</figure>
			<section className="profile-info">
				<h2 className="profile-name">Andrew Schulz</h2>
				<p className="profile-bio">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae natus
					sed dolor nihil quam voluptas suscipit sequi, iusto quia quidem
					voluptates necessitatibus magnam et saepe tenetur earum sunt fugit
					impedit?
				</p>
			</section>
		</div>
	);
}

export default App;
