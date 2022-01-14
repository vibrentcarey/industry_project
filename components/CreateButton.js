import React from "react";

export default function CreateButton({ ...props }) {
	return (
		<button {...props} className="bg-primaryBlack text-white rounded-full w-1/2 p-1 shadow-md">
			Create
		</button>
	);
}
