import React from "react";

export type ButtonType = React.HTMLAttributes<HTMLButtonElement>;

interface Props {
	add?: boolean;
	yellow: boolean;
	children: React.ReactNode;
	primary: boolean;
}

export default function CTAButton({
	add,
	yellow = false,
	primary = false,
	children,
	...props
}: Props & ButtonType) {
	return (
		<button
			{...props}
			className={`${
				primary && "bg-primaryBlack text-white border-2 border-black"
			} ${yellow && "bg-primaryYellow"} ${
				add && "border-2 border-black"
			} py-2 rounded-lg shadow-xl font-bold text-lg w-full mt-4 max-w-screen-sm`}
		>
			{children}
		</button>
	);
}
