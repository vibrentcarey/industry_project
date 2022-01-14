import React from 'react';

const FreeCard = () => {
  return (
    <div className='h-80 bg-primaryBlue flex flex-col items-center p-8 rounded-xl w-full max-w-screen-sm shadow-xl m-1 mt-10'>
      <h1 className='text-white text-center text-3xl font-bold m-2'>FREE</h1>
      <p className='text-white w-8/12 text-center'>Just by signing up you have access to these options free of charge</p>
      {/* Images */}
      <div className='w-full flex justify-evenly px-8 m-6'>
        <div className='flex flex-col items-center'>
          <img className='shadow-lg fill-black p-4 bg-white rounded-md h-24' src='./point_card.svg' alt='points card' />
          <p className='text-white font-bold mt-1 text-sm'>Points Card</p>
        </div>
        <div className='flex flex-col items-center'>
          <img className='shadow-lg fill-black p-4 bg-white rounded-md h-24' src='./Coupon.svg' alt='coupon card' />
          <p className='text-white font-bold mt-1 text-sm '>Coupon Program</p>
        </div>
        <div className='flex flex-col items-center'>
          <img className='shadow-lg fill-black p-4 bg-white rounded-md h-24' src='./Loyalty.svg' alt='loyalty program' />
          <p className='text-white font-bold mt-1 text-sm'>Loyalty Program</p>
        </div>
      </div>

    </div>
  );
};

export default FreeCard;