import React from "react";

export default function PageWrapper({ children }) {
	return (
		<main className="min-h-screen bg-backgroundGray rounded-2xl px-10 py-10 flex flex-col gap-4 pb-16">{children}</main>
	);
}
