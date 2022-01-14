import React from "react";

export default function PromoBadge({ icon, title }) {
	return (
		<div className="w-[28%] flex flex-col gap-1 ">
			<img className="fill-black p-6 bg-white rounded-md h-24" src={icon} />
			<p className="text-center font-bold leading-5">{title}</p>
		</div>
	);
}
