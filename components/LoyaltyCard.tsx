import React from "react";
import CreateButton from "./CreateButton";

interface Props {
	title: string;
	message: string;
	premium: boolean;
}

export default function LoyaltyCard({ title, message, premium }: Props) {
	return premium ? (
		<div className="h-40 flex flex-col justify-between w-[48%] gap-4 shadow-xl rounded-lg p-4 bg-[#FFFDF4]">
			<h1 className="text-2xl font-extrabold">{title}</h1>
			<p className="text-sm">{message}</p>

			<CreateButton premium />
		</div>
	) : (
		<div className="h-48 flex flex-col justify-between w-[48%] gap-4 shadow-xl rounded-lg p-4 bg-white">
			<h1 className="text-2xl font-extrabold">{title}</h1>
			<p className="text-sm">{message}</p>
			<a href="/redemption">
			<CreateButton />
			</a>
		</div>
	);
}
