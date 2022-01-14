import React from "react";

export default function PageWrapper({ children }) {
	return (
		<main className="h-screen bg-backgroundGray rounded-2xl px-8 py-10">{children}</main>
	);
}
