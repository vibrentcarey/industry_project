import React from "react";
import CTAButton from "../components/CTAButton";
import PageWrapper from "../components/PageWrapper";
import ProductRemptionCard from "../components/ProductRemptionCard";
import TopBar from "../components/TopBar";

interface Props {
	name: string;
	points: number;
}

export default function Redemption({}: Props) {
	return (
		<PageWrapper>
			<TopBar />
			<div className="flex flex-col gap-4">
				<ProductRemptionCard name="Cupcake" image="./Cupcake.png" points={10} />
				<ProductRemptionCard name="High Fibre Bread" image="./Cookie.png" points={20} />
				<ProductRemptionCard name="Cake" image="./Cake.png" points={30} />
                <CTAButton primary add >Add Item</CTAButton>
			</div>
		</PageWrapper>
	);
}
