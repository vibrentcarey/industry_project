import React from 'react';
import AvatarCard from '../components/AvatarCard';
import TopBar from '../components/TopBar';
import CTAButton from '../components/CTAButton';

const Profile = () => {
  return (
    <div className='px-10 h-screen w-screen flex flex-col items-center'>
      <TopBar />
      <AvatarCard title='Eggs and Flour' fname='Willy' lname='Solomons'/>
      <CTAButton add>Add Fidelity Program</CTAButton>
      <CTAButton primary>Upgrade</CTAButton>
    </div>
  );
};

export default Profile;