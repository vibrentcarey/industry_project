//@ts-nocheck
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import HighlightCard from "../components/HighlightCard";
import Stats from "../components/Stats";
import CTAButton from "../components/CTAButton";
import LoyaltyCard from "../components/LoyaltyCard";
import PremiumCard from "../components/PremiumCard";
import PromoBadge from "../components/PromoBadge";
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
			<PremiumCard>
        <h1>
          PREMIUM
        </h1>
				<div className="flex flex-wrap gap-2 justify-around">
					<PromoBadge icon="./bi_currency-dollar.svg" title="Monitor Revenue" />
					<PromoBadge icon="./fa-solid_users.svg" title="Track Loyal Users" />
					<PromoBadge
						icon="./bx_bx-wifi.svg"
						title="Increase Your Online Presence"
					/>
					<PromoBadge
						icon="./healthicons_medical-advice.svg"
						title="Personal Business Advisor"
					/>
					<PromoBadge
						icon="./fluent_arrow-trending-lines-20-filled.svg"
						title="Current Business Trends"
					/>
					<PromoBadge
						icon="./ep_data-analysis.svg"
						title="Market Analysis"
					/>
				</div>
			</PremiumCard>
		</PageWrapper>
	);
}
