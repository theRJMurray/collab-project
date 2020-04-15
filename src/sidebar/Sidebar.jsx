import React from "react";
import Explore from '../imgs/explore.svg'
import Snek from "../imgs/snek.svg";
import Plat from "../imgs/platypus.svg";

const SidebarButton = ({ image, changePage, id, page }) => {
	const swapPage = () => changePage(id)

	return (
		<div
			style={{
				width: 72,
				height: 72,
				background: page === id ? "lightgrey" : null,
				userSelect: "none"
			}}
			onClick={swapPage}
		>
			<div style={{display: 'flex', flexDirection: 'column', paddingTop: 18, margin: '0px auto', alignItems: 'center'}}>
				<img
					src={image}
					alt=""
					style={{ width: 24, height: 24, paddingBottom: 5 }}
				/>
				<span style={{fontSize: 12}}>{id}</span>
			</div>
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
				width: 72,
				height: "100%",
				background: "#EEE",
				borderRight: "1px solid #777",
			}}
		>
			<SidebarButton
				id={"Explore"}
				image={Explore}
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
