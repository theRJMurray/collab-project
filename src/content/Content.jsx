import React from "react";
import Explore from './Explore'
import Inventory from '../components/Inventory'

const Contact = () => {
	return <div style={{ background: "#FED", height: "100%" }}>Contact</div>;
};

const About = () => {
	return <div style={{ background: "#EAF", height: "100%" }}>About</div>;
};

const Content = ({ page }) => {
	let pages = {
		Explore: Explore,
		contact: Contact,
		about: About,
	};
	let CurrentContent = pages[page];

	return (
		<div
			className="content"
			style={{ width: "100%", height: "100%", background: "#C0FFEE" }}
		>
			<CurrentContent />
			<Inventory />
		</div>
	);
};

export default Content;
