import React from "react";
import PageWrapper from "../components/PageWrapper";
import TopBar from "../components/TopBar";
import { FaPlus, FaMinus } from "react-icons/fa";

interface Props {
	name: string;
	points: number;
}

export default function Redemption({ name, points = 10 }: Props) {
	return (
		<PageWrapper>
			<TopBar />
			<div className="flex">
				<div className="w-full rounded-lg shadow-lg  p-4 flex justify-between">
					<div className="flex gap-2">
						<img src="./Cupcake.png" className="w-20 rounded-lg" />
						<div>
							<h2 className="text-lg font-bold">Cupcakes</h2>
							<p>Point Card System</p>
						</div>
					</div>
					<div className="flex flex-col justify-between">
						<button className="bg-primaryBlack text-white px-4 rounded-full">
							Add
						</button>
						<div className="border-2 flex">
							<button className="bg-primaryBlack text-white rounded-full relative right-2 p-1">
								<FaPlus />
							</button>
							<div>
								<p className="text-black">{points}</p>
							</div>
							<button className="bg-primaryBlack text-white rounded-full relative left-2 p-1">
								<FaMinus />
							</button>
						</div>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
}
