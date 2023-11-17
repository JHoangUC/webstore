import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
	return (
		<Link
			href={href}
			className="block py-2 pl-3 pr-4 text-[#ADB7BE] hover:bg-slate-800 sm:text-xl rounded md:p-0   "
		>
			{title}
		</Link>
	);
};

export default NavLink;
