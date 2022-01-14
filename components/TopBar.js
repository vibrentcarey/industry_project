import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
const TopBar = ({ ...props }) => {
	return (
		<div
			className={`w-full bg-primaryBlack flex justify-between items-center p-2 px-4 rounded-full shadow-xl -mt-14 ${props.className}`}
		>
			<button className="rounded-full  bg-white p-2">
				<MdArrowBackIosNew className="text-lg" />
			</button>
			<h2 className="text-white">Profile</h2>
			<a className="text-gray-500">skip</a>
		</div>
	);
};

export default TopBar;
