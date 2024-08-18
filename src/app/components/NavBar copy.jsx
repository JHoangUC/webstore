"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useCart } from "./../../../context/CartContext";
import {
	ShoppingBagIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
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
	{
		title: "Cart",
		path: "/contact",
	},
];

const Navbar = ({ setCartSliderIsOpen }) => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	//stripe cart
	const { items } = useCart();
	const [open, setOpen] = useState(false);

	// onClick outside of menu to close
	const hamburgMenu = useRef(null);
	const closeOpenMenus = (e) => {
		if (
			hamburgMenu.current &&
			navbarOpen &&
			!hamburgMenu.current.contains(e.target)
		) {
			setNavbarOpen(false);
		}
	};
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
							className=" items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white "
						>
							<Bars3Icon className="h-5 w-5 " />
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
					{/* ///////////////// */}
					<div className="flex items-center gap-4">
						<MagnifyingGlassIcon
							onClick={() => setOpen((open) => !open)}
							className="mt-1 h-5 w-5 cursor-pointer text-sky-700 group-hover:text-sky-800"
						/>
						<div className="ml-4 flow-root lg:ml-8">
							<div
								className="group p-2 flex items-center cursor-pointer"
								onClick={() => setCartSliderIsOpen((open) => !open)}
							>
								<ShoppingBagIcon
									className="flex-shrink-0 h-5 w-5 text-sky-700 group-hover:text-sky-800"
									aria-hidden="true"
								/>
								<span className="ml-2 text-sm font-medium text-sky-700 group-hover:text-sky-800">
									( {items.length} )
								</span>
								<span className="sr-only">items in cart, view bag</span>
							</div>
						</div>
					</div>
					{/* ///////////////// */}
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
