"use client";
import Link from "next/link";
import React, { useState , useRef } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import "../css/main.css";

const navLinks = [
	{
		title: "About",
		path: "/#about",
	},
	{
		title: "Products",
		path: "/#products",
	},
	{
		title: "Contact",
		path: "/contact",
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	// onClick outside of menu to close
	const hamburgMenu = useRef(null)
	const closeOpenMenus = (e)=>{
		if(hamburgMenu.current && navbarOpen && !hamburgMenu.current.contains(e.target)){
			setNavbarOpen(false)
		}
	}
	// useEffect(() => {
	// 	if(navbarOpen){
			
	// 	document.addEventListener('mousedown',closeOpenMenus)
	// 	}

	// }, [])
	// Listen for click outside of menu | Tracking Mouse

	return (
		<nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
			<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
				<Link
					href={"/"}
					className="text-2xl md:text-3xl lg:text-5xl text-white font-semibold"
				>
					Designs By Khoi
				</Link>
				{/* Hamburger Menu Bars3Icon*/}
				{/* ref - pointer to function */}
				<div ref={hamburgMenu} className="mobile-menu block md:hidden">
					{/* when Navbar is not open */}
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white hover:cursor-pointer"
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						// Close Icon XMarkIcon
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};

export default Navbar;
