import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="h-24 w-screen bg-white px-8">
			<nav className="h-full flex justify-between items-center mt-4 ">
				<img src="./hamburger.svg" />
				<Link href="/">
					<img className="cursor-pointer h-12" src="./logo.svg" />
				</Link>
				<Link href="/profile">
					<img className="h-12 cursor-pointer" src="./profile-image.png" />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
