import React from 'react';
import PageWrapper from '../components/PageWrapper';
import PremiumCard from '../components/PremiumCard';
import CTAButton from '../components/CTAButton'
import FreeCard from '../components/FreeCard';
import TopBar from '../components/TopBar';

const Tiers = () => {
  return (
    <PageWrapper>
      <div className='flex flex-col items-center'>
      <TopBar />
      <FreeCard/>
        <CTAButton add>Create Your Program Now</CTAButton>
        <PremiumCard />
        <CTAButton primary>Upgrade</CTAButton>
      </div>
    </PageWrapper>
  );
};

export default Tiers;