import React from "react";




export default function CTAButton({ add, yellow, children, primary, ...props }) {
	return (
		<button
			{...props}
			className={`${primary && 'bg-primaryBlack text-white'} ${yellow &&'bg-primaryYellow'} ${add && 'border-2 border-black'} py-2 rounded-lg shadow-xl font-bold text-lg w-full mt-4`}
		>
			{children}
		</button>
	);
}
