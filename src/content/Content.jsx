import React from "react";

const Contact = () => {
	return <div style={{ background: "#FED", height: "100%" }}>Contact</div>;
};

const HomePage = () => {
	return <div>Homepage</div>;
};

const About = () => {
	return <div style={{ background: "#EAF", height: "100%" }}>About</div>;
};

const Content = ({ page }) => {
	let pages = {
		home: HomePage,
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
		</div>
	);
};

export default Content;
