import React from "react";
import LoyaltyCard from "../components/LoyaltyCard";
import PageWrapper from "../components/PageWrapper";
import PromoBadge from "../components/PromoBadge";
import TopBar from "../components/TopBar";

export default function programoptions() {
	return (
		<PageWrapper>
			<TopBar className="-mt-14"/>
			<div className="flex flex-wrap gap-4 justify-between">
				<LoyaltyCard
					title="Point Card System"
					message="Create a points base rewards system for your business"
				/>
				<LoyaltyCard
					title="Coupon Program"
					message="Create coupons for sales or clearance items"
				/>
				<LoyaltyCard
					title="Loyalty Program"
					message="Create a digital loyalty program for your customers"
				/>
				<LoyaltyCard
					title="Gift Cards"
					message="An easy and effective way to introduce digital gift cards"
				/>
				<LoyaltyCard
					title="Point Card System"
					message="Create a points base rewards system for your business"
					premium
					icon="./bi_currency-dollar.svg"
				/>
				<LoyaltyCard
					title="Point Card System"
					message="Create a points base rewards system for your business"
					premium
					icon="./fa-solid_users.svg"
				/>
				<LoyaltyCard
					title="Point Card System"
					message="Create a points base rewards system for your business"
					premium
					icon="./bx_bx-wifi.svg"
				/>
				<LoyaltyCard
					title="Point Card System"
					message="Create a points base rewards system for your business"
					premium
					icon="./healthicons_medical-advice.svg"
				/>
			</div>
		</PageWrapper>
	);
}
