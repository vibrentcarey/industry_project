import React from "react";

interface Props {
	children: React.ReactNode;
}

export default function PageWrapper({ children }: Props) {
	return (
		<main className="h-screen bg-backgroundGray rounded-2xl px-8 py-10 flex flex-col gap-4">
			{children}
		</main>
	);
}
