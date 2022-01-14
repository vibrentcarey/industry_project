import React from 'react';
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa';
import { BiCodeBlock } from "react-icons/bi";

const PointsCard = () => {
  return (
    <div className='px-8 py-10 flex justify-between h-80 bg-gradient-to-b from-cardBlue to-cardTorquise rounded-2xl shadow-2xl my-10 mb-2 max-w-screen-sm w-full min-w-max'>
      <section className='h-full flex flex-col justify-between'>
        <div>
          <img className='m-1 h-8' src='./bread.svg' alt='bread' />
          <h1 className='text-white font-bold text-4xl'>Eggs & Flour</h1>
          <div className='flex'>
            <BiCodeBlock className='text-white m-2 ml-0 text-3xl hover:text-primaryYellow cursor-pointer' />
            <FaInstagram className='text-white m-2 text-3xl  hover:text-primaryYellow cursor-pointer' />
            <FaFacebook className='text-white m-2 text-3xl  hover:text-primaryYellow cursor-pointer' />
          </div>
        </div>
        <h2 className='text-white font-bold text-2xl'>#A7003829</h2>
      </section>
      <img className='h-40 m-10' src='./qr_code.svg' alt='bread' />
    </div>
  );
};

export default PointsCard;