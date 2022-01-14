import { useRouter } from "next/router";
import React, { useLayoutEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
const TopBar = ({ ...props }) => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  useLayoutEffect(() => {
    switch (router.pathname) {
      case "/profile":
        setTitle("Profile");
        break;
      case "/redemption":
        setTitle("Point Card System");
        break;
      case "/pointscard":
        setTitle("Points Card");
        break;
      case "/tiers":
        setTitle("Services");
				break;
    }
  }, []);

  return (
    <div
      className={`w-full bg-primaryBlack flex justify-between items-center p-2 px-4 rounded-full shadow-xl  ${props.className}`}
    >
      <Link href="/">
        <a className="rounded-full  bg-white p-2">
          <MdArrowBackIosNew className="text-lg" />
        </a>
      </Link>
      <h2 className="text-white">{title}</h2>
      <a className="text-gray-500">skip</a>
    </div>
  );
};

export default TopBar;
