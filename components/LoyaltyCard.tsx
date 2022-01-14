import React from "react";
import CreateButton from "./CreateButton";

interface Props {
	title: string;
	message: string;
	premium: boolean;
}

export default function LoyaltyCard({ title, message, premium }: Props) {
	return premium ? (
		<div className="flex flex-col justify-between w-[47%] gap-4 shadow-xl rounded-lg p-4 bg-[#FFFDF4]">
			<h1 className="text-xl font-extrabold">{title}</h1>
			<p className="text-xs">{message}</p>

			<CreateButton premium />
		</div>
	) : (
		<div className="flex flex-col justify-between w-[47%] gap-4 shadow-xl rounded-lg p-4 bg-white">
			<h1 className="text-xl font-extrabold">{title}</h1>
			<p className="text-xs">{message}</p>
			<CreateButton />
		</div>
	);
}
