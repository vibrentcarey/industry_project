//@ts-nocheck
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import HighlightCard from "../components/HighlightCard";
export default function Home() {
	return (
		<PageWrapper>
			<div className="flex justify-between gap-2">
				<HighlightCard
					icon="./star.svg"
					message="Overall Customer Rating"
					star
				/>
				<HighlightCard
					icon="./fa-solid_users.svg"
					message="Overall Customer Rating"
					count="107"
				/>
				<HighlightCard
					icon="./bell.svg"
					message="Active Loyalty Programs"
					count="5"
				/>
			</div>
		</PageWrapper>
	);
}
