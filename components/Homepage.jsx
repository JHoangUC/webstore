"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
	const [isHovering, setIsHovered] = useState(false);
	const onMouseEnter = () => setIsHovered(true);
	const onMouseLeave = () => setIsHovered(false);
	return (
		<section id="products" className="flex  flex-col bg-[#f5f5f5]">
			{/* // Featured products section */}
			<div className="  lg:mt-28 md:mt-24 mt-12 flex flex-col items-center justify-center">
				<div className="md:w-3/5">
				{/* //text-[#4ac555] */}
				<h2 className=" text-4xl/snug  lg:text-5xl/snug font-light text-center border-b-2 border-black text-black "> 
						Featured Products
					</h2>
				</div>
				{/* //text-[#3844b3] */}
				<p className="text-center font-light lg:text-3xl/loose md:text-2xl/loose text-2xl/loose text-black"> 
					All Stickers are 3 in x 3 in
					
				</p>
				{/* //text-[#ff2b2b] */}
				<p className="text-center font-light lg:text-2xl/loose md:text-xl/loose text-xl/loose text-black">
					Free Shipping
				</p>
			</div>
		</section>
	);
};

export default Homepage;
