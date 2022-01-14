import React from "react";

export default function CTAButton({ children, ...props }) {
	return (
		<button
			{...props}
			className="bg-primaryYellow py-2 rounded-lg shadow-xl font-bold text-lg"
		>
			{children}
		</button>
	);
}
