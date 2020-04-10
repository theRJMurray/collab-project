import React, { useState } from "react";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
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
				display: "flex",
			}}
		>
			{children}
		</div>
	);
};

const App = () => {
	const [page, setPage] = useState("home");

	const handlePageChange = (page) => {
		setPage(page);
	};

	return (
		<AppContainer>
			<Sidebar handlePageChange={handlePageChange} page={page} />
			<Content page={page} />
		</AppContainer>
	);
};

export default App;
