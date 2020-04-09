import React from "react";

const Sidebar = ({ handlePageChange }) => {
	return (
		<div
			className="sidebar"
			style={{
				width: 100,
				height: "100%",
				background: "#EEE",
				borderRight: "1px solid #777",
			}}
		>
			<button onClick={handlePageChange}>Switch</button>
		</div>
	);
};

export default Sidebar;
