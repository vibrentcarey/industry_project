import React from "react";
import { ButtonType } from "./CTAButton";

interface Props {
	premium?: boolean;
}

export default function CreateButton({
	premium,
	...props
}: Props & ButtonType) {
	return premium ? (
		<button
			{...props}
			className="bg-primaryYellow text-black w-20  font-semibold rounded-full py-1 text-sm  px-2 gap-2 shadow-md flex items-center"
		>
			<img className="h-2" src="./crown.svg" />
			<span className="font-bold">Create</span>
		</button>
	) : (
		<button
			{...props}
			className="bg-primaryBlack text-white rounded-full w-20 px-2 py-1 text-sm shadow-md"
		>
			<span className="font-bold">Create</span>
		</button>
	);
}
