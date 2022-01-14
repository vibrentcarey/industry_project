import React from 'react';
import CTAButton from '../components/CTAButton';
import PointsCard from '../components/PointsCard';
import TopBar from '../components/TopBar';

const Pointscard = () => {
  return (
    <div className='px-10 flex flex-col items-center'>
      <TopBar />
      <PointsCard />
      <CTAButton primary>Save</CTAButton>
    </div>
  );
};

export default Pointscard;