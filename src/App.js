import React from "react";
import "./main.css";

const AppContainer = ({ children }) => {
	return (
		<div
			className="app-container"
			style={{
				width: "100%",
				height: "100%",
				position: "absolute",
				top: 0,
				left: 0,
				display: "flex"
			}}
		>
			{children}
		</div>
	);
};

const Sidebar = ({ children }) => {
	return (
		<div
			className="sidebar"
			style={{
				width: 100,
				height: "100%",
				background: "#EEE",
				borderRight: "1px solid #777"
			}}
		>
			{children}
		</div>
	);
};

const Content = ({ children }) => {
	return (
		<div
			className="content"
			style={{ width: "100%", height: "100%", background: "#C0FFEE" }}
		>
			{children}
		</div>
	);
};

const App = () => {
	return (
		<AppContainer>
			<Sidebar />
			<Content />
		</AppContainer>
	);
};

export default App;
