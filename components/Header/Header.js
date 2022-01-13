import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-20 w-screen bg-red-500 flex justify-between items-center px-10">
      <Link href='/'><h1 className='hover:text-white cursor-pointer'>Logo</h1></Link>
      <nav className="flex gap-6">
        <Link href='/profile'><a className='hover:text-white'>Profile</a></Link>
        <Link href='/scan'><a className='hover:text-white'>Scan</a></Link>
      </nav>
    </header>
  );
};

export default Header;
