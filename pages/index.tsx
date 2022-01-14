//@ts-nocheck
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import HighlightCard from "../components/HighlightCard";
import Stats from "../components/Stats";
import CTAButton from "../components/CTAButton";
import LoyaltyCard from "../components/LoyaltyCard";
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
			<Stats />
			<CTAButton>Upgrade</CTAButton>
			<div className="flex justify-between flex-wrap gap-4">
				<LoyaltyCard
					title="Point Card System"
					message="Create a points base rewards system for your business"
				/>
				<LoyaltyCard
					title="Point Card System"
					message="Create a points base rewards system for your business"
				/>
				<LoyaltyCard
					title="Point Card System"
					message="Create a points base rewards system for your business"
				/>
				<LoyaltyCard
					title="Point Card System"
					message="Create a points base rewards system for your business"
				/>
			</div>
		</PageWrapper>
	);
}
