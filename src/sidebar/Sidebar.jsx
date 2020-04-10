import React from "react";
import Frog from "../imgs/frog.svg";
import Snek from "../imgs/snek.svg";
import Plat from "../imgs/platypus.svg";

const SidebarButton = ({ image, changePage, id, page }) => {
	const swapPage = () => {
		changePage(id);
	};

	return (
		<div
			style={{
				borderBottom: "1px solid #333",
				width: 100,
				height: 100,
				background: page === id ? "#333" : null,
				userSelect: "none",
			}}
			onClick={swapPage}
		>
			<img
				src={image}
				alt=""
				style={{ width: 80, height: 80, margin: 10 }}
			/>
		</div>
	);
};

const Sidebar = ({ handlePageChange, page }) => {
	const changePage = (page) => {
		handlePageChange(page);
	};

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
			<SidebarButton
				id={"home"}
				image={Frog}
				changePage={changePage}
				page={page}
			/>
			<SidebarButton
				id={"about"}
				image={Snek}
				changePage={changePage}
				page={page}
			/>
			<SidebarButton
				id={"contact"}
				image={Plat}
				changePage={changePage}
				page={page}
			/>
		</div>
	);
};

export default Sidebar;
