import React from "react";
import CreateButton from "./CreateButton";



export default function LoyaltyCard({ title, message, premium, icon }) {
	return premium ? (
		<div className="flex flex-col justify-between w-[47%] gap-4 shadow-xl rounded-lg p-4 ">
			<h1 className="text-xl font-extrabold">{title}</h1>
			<p className="text-xs">{message}</p>
			<div className="flex justify-between">
				<CreateButton />
				<img className="h-10" src={icon} />
			</div>
		</div>
	) : (
		<div className="flex flex-col justify-between w-[47%] gap-4 shadow-xl rounded-lg p-4 bg-white">
			<h1 className="text-xl font-extrabold">{title}</h1>
			<p className="text-xs">{message}</p>
			<CreateButton />
		</div>
	);
}
