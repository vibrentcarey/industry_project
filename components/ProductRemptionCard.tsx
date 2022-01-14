import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface Props {
	name: string;
	image: string;
	points: number;
}

export default function ProductRemptionCard({ name, image, points }: Props) {
	//This is an anti-pattern, For demo purposes only
	const [count, setCount] = useState(points);

	return (
		<div className="w-full rounded-lg shadow-lg  p-4 flex justify-between bg-white">
			<div className="flex gap-2">
				<img src={image} className="w-20 rounded-lg" />
				<div>
					<h2 className="text-lg font-bold">{name}</h2>
					<p>Point Card System</p>
				</div>
			</div>
			<div className="flex flex-col justify-between">
				<button className="bg-primaryBlack text-white px-4 rounded-full flex items-center gap-2 p-1">
					<FaPlus className="text-sm" />
					<span>Add</span>
				</button>
				<div className="border-2 flex">
					<button
						onClick={() => setCount((c) => c - 10)}
						className="bg-primaryBlack text-white rounded-full relative right-2 p-1"
					>
						<FaMinus />
					</button>
					<div>
						<p className="text-gray-600">{count} pts</p>
					</div>
					<button
						onClick={() => setCount((c) => c + 10)}
						className="bg-primaryBlack text-white rounded-full relative left-2 p-1"
					>
						<FaPlus />
					</button>
				</div>
			</div>
		</div>
	);
}
