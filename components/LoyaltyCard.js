import React from "react";
import CreateButton from "./CreateButton";

export default function LoyaltyCard({ title, message }) {
	return (
		<div className="flex flex-col justify-between w-[47%] gap-4 shadow-xl rounded-lg p-4">
			<h1 className="text-xl font-extrabold">{title}</h1>
			<p>{message}</p>
			<CreateButton />
		</div>
	);
}
