import React from 'react';
import AvatarCard from '../components/AvatarCard';
import TopBar from '../components/TopBar';
import CTAButton from '../components/CTAButton';

const Profile = () => {
  return (
    <div className='px-10 h-screen w-screen flex flex-col items-center'>
      <TopBar />
      <AvatarCard title='Eggs and Flour' fname='Willy' lname='Solomons'/>
      <a className='w-full' href='/redemption'>
      <CTAButton add>Add Fidelity Program</CTAButton>
      </a>
      <CTAButton primary>
				<img className="mx-2" src='./crown2.svg' alt='crown'/>
        
        Upgrade</CTAButton>
        
    </div>
  );
};

export default Profile;