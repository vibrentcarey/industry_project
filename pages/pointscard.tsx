import React from "react";
import CTAButton from "../components/CTAButton";
import PointsCard from "../components/PointsCard";
import TopBar from "../components/TopBar";
import PageWrapper from "../components/PageWrapper";

const Pointscard = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center">
        <TopBar />
        <PointsCard />
        <a className='w-full' href="/">
          <CTAButton primary>Save</CTAButton>
        </a>
      </div>
    </PageWrapper>
  );
};

export default Pointscard;
