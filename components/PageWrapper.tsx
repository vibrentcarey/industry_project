import React from "react";
interface Props {
	children: React.ReactNode;
}

export default function PageWrapper({ children }: Props) {
	return (
		<main className="min-h-screen bg-backgroundGray rounded-2xl px-10 py-10 flex flex-col gap-4 pb-16">
			{children}
		</main>
	);
}
