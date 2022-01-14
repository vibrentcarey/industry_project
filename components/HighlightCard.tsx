import React from "react";

interface Props {
	message: string;
	icon: string;
	count?: number;
	star?: boolean;
}

export default function HighlightCard({ message, icon, count, star }: Props) {
	return (
		<div className="border-2 rounded-lg h-20 w-2/6 border-primaryBlack p-2 flex flex-col justify-between">
			<div className="flex justify-between">
				{count && <p className="font-extrabold">{count}</p>}
				{star ? (
					<>
						<img className="h-4" src={icon} />
						<img className="h-4" src={icon} />
						<img className="h-4" src={icon} />
						<img className="h-4" src={icon} />
						<img className="h-4" src={icon} />
					</>
				) : (
					<img className="h-4" src={icon} />
				)}
			</div>
			<p className="text-sm font-bold">{message}</p>
		</div>
	);
}
