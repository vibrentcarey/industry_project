//@ts-nocheck
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import HighlightCard from "../components/HighlightCard";
import Stats from "../components/Stats";
import CTAButton from "../components/CTAButton";
import LoyaltyCard from "../components/LoyaltyCard";
import PremiumCard from "../components/PremiumCard";
import PromoBadge from "../components/PromoBadge";
import Link from "next/link";
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
      <div className="w-full relative">
        <p className="absolute top-12 left-12 font-bold z-10">Point Card</p>
        <p className="absolute top-12 right-14  z-10">#C83940</p>
        <img className="opacity-20" src="./Chart 3.svg" />
      </div>
      <Link href="/tiers" passHref>
        <CTAButton className="-mt-8" yellow>
          Upgrade
        </CTAButton>
      </Link>
      <div className="flex justify-between flex-wrap gap-4">
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
      </div>
      <PremiumCard />
      <CTAButton add primary>
				<img className="mx-2" src='./crown2.svg' alt='crown'/>
        Upgrade
      </CTAButton>
    </PageWrapper>
  );
}
