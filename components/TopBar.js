import React from "react";

const TopBar = ({ ...props }) => {
	return (
		<div
			className={`w-full bg-primaryBlack flex justify-around py-2 rounded-full shadow-xl ${props.className}`}
		>
			<h2 className="text-white">Profile</h2>
		</div>
	);
};

export default TopBar;
