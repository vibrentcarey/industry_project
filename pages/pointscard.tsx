import React from 'react';
import CTAButton from '../components/CTAButton';
import PointsCard from '../components/PointsCard';
import TopBar from '../components/TopBar';
import PageWrapper from '../components/PageWrapper'

const Pointscard = () => {
  return (
    <PageWrapper>
    <div className='flex flex-col items-center'>
      <TopBar />
      <PointsCard />
      <CTAButton primary>Save</CTAButton>
    </div>
    </PageWrapper>
  );
};

export default Pointscard;