import { useState, useEffect } from "react";
import "./App.css";
import { CardComponent } from "./components/CardComponent";

function App() {
	const [card, setCard] = useState([]);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [socials, setSocials] = useState([
		{ linkedin: "" },
		{ twitter: "" },
		{ github: "" },
	]);
	const [interests, setInterests] = useState([]);

	useEffect(() => {
		cardDetails();
	}, []);

	const cardDetails = async () => {
		const unparsedData = await fetch("http://localhost:3000/getCards");
		const parsedData = await unparsedData.json();
		setCard(parsedData);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const handleSocialMediaChange = (index, platform, value) => {
		const newSocials = [...socials];
		newSocials[index] = { [platform]: value };
		setSocials(newSocials);
	};

	const handleInterestsChange = (e) => {
		const interestArray = e.target.value.split(" ");
		setInterests(interestArray);
	};

	const handleCreateCard = () => {
		fetch("http://localhost:3000/addCard", {
			method: "POST",
			body: JSON.stringify({
				name: name,
				description: description,
				socialmedia: socials,
				interests: interests,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(async (res) => {
			const json = await res.json();
			setName("");
			setDescription("");
			setSocials([{ linkedin: "" }, { twitter: "" }, { github: "" }]);
			setInterests([]);
		});
	};

	return (
		<>
			<div>
				<label>Name: </label>
				<input type="text" value={name} onChange={handleNameChange} />
			</div>
			<div>
				<label>Description: </label>
				<textarea value={description} onChange={handleDescriptionChange} />
			</div>
			<div>
				<label>LinkedIn: </label>
				<input
					type="text"
					value={socials[0].linkedin}
					onChange={(e) =>
						handleSocialMediaChange(0, "linkedin", e.target.value)
					}
				/>
				<label>Twitter: </label>
				<input
					type="text"
					value={socials[1].twitter}
					onChange={(e) =>
						handleSocialMediaChange(1, "twitter", e.target.value)
					}
				/>
				<label>GitHub: </label>
				<input
					type="text"
					value={socials[2].github}
					onChange={(e) => handleSocialMediaChange(2, "github", e.target.value)}
				/>
			</div>
			<div>
				<label>Interests: </label>
				<input
					type="text"
					value={interests.join(" ")}
					onChange={handleInterestsChange}
				/>
			</div>
			<button onClick={handleCreateCard}>Create a card</button>
			<div>
				{card.map((cardItem) => (
					<CardComponent
						key={cardItem._id}
						name={cardItem.name}
						description={cardItem.description}
						socialmedia={cardItem.socialmedia}
						interests={cardItem.interests}
					/>
				))}
			</div>
		</>
	);
}

export default App;
