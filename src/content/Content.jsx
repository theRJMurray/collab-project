import React from "react";

const NextPage = () => {
	return <div style={{ background: "#FED", height: "100%" }}>Nextpage</div>;
};

const HomePage = () => {
	return <div>Homepage</div>;
};

const Content = ({ page }) => {
	let pages = {
		home: HomePage,
		next: NextPage,
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
