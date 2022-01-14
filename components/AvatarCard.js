import React, { useState } from 'react';

const AvatarCard = ({ fname, lname, title,  }) => {
  const [form, setForm] = useState({
    fullName: 'Willy Solomons',
    companyName: 'Eggs and Flour',
    about: 'Enter a little something about your business to tell customers about yourself',
    email: 'eggsandflour@gmail.com',
    phone: '604 975 8463',
    address: '2173 W 41 Avenue, Vancouver, BC'
  })
  return (
    <div className='w-full bg-backgroundGray p-6 rounded-md mt-20 flex flex-col items-center shadow-lg'>
      <span className='self-end text-xs mx-1 text-primaryBlue'>edit</span>
      {/* Profile Info */}
      <article className='w-1/2 flex flex-col items-center'>
        <img className='' src='./profile-image.png' />
        <div className='py-1 shadow-md mt-2 mb-1 bg-primaryBlue rounded-full w-full'>
          <p className='text-center text-white font-bold'>{`${fname} `}
            <span className='text-white font-light'>{lname}</span>
          </p>
        </div>
        <div className='w-7/12 bg-white rounded-full px'>
          <p className='text-xs text-center text-primaryBlue '>Free account</p>
        </div>
        {/* Business Info */}
      </article>
      <h1 className='m-2 text-xl font-bold'>{title}</h1>
      <p className='text-sm w-11/12 font-light'>{form.about}</p>

      {/* Form */}
      <form className='flex flex-col w-full mt-4'>
      {/* Name */}
        <label className='text-sm font-light'>Your Name</label>
        <input className='mt-1 border-b-2 border-black bg-backgroundGray' value={form.fullName}/>
        {/* Company */}
        <label className='text-sm font-light mt-4'>Company Name</label>
        <input className='mt-1 border-b-2 border-black bg-backgroundGray' value={form.companyName}/>
        {/* Description */}
        <label className='text-sm font-light mt-4'>About</label>
        <textarea className='mt-1 border-2 rounded-md h-28 p-2 text-sm border-black bg-backgroundGray' value={form.fullName}/>
        {/* Email */}
        <label className='text-sm font-light mt-4'>Email</label>
        <input className='mt-1 border-b-2 border-black bg-backgroundGray' value={form.email}/>
        {/* Phone */}
        <label className='text-sm font-light mt-4'>Phone</label>
        <input className='mt-1 border-b-2 border-black bg-backgroundGray' value={form.phone}/>
      </form>
    </div>
  );
};

export default AvatarCard;