import React from "react";
import PromoBadge from "./PromoBadge";
export default function PremiumCard() {
	return (
		<section className="bg-primaryYellow p-10 flex gap-4 rounded-lg flex-col justify-between items-center">
			{" "}
			<div className="flex gap-2">
				<img src="./crown.svg" />
				<h1 className="text-xl font-extrabold">PREMIUM</h1>
			</div>
			<p className="font-bold text-center">
				Upgrade today and have access to our wide array of premium resources
				Underdog offers. Take your small business to the next level!
			</p>
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
				<PromoBadge icon="./ep_data-analysis.svg" title="Market Analysis" />
			</div>
		</section>
	);
}
