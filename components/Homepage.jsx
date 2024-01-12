"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
	const [isHovering, setIsHovered] = useState(false);
	const onMouseEnter = () => setIsHovered(true);
	const onMouseLeave = () => setIsHovered(false);
	return (
		<section id="products" className="flex  flex-col bg-[white]">
			{/* // Featured products section */}
			<div className="  pt-12 flex flex-col items-center justify-center">
				<div className="md:w-3/5">
					<h2 className=" text-3xl/snug md:text-4xl/snug lg:text-5xl/snug font-light text-center border-b-2 border-black text-black">
						Featured Products
					</h2>
				</div>
				<p className="text-center font-light lg:text-3xl/loose md:text-2xl/loose text-xl/loose text-black">
					All Stickers are 3 in x 3 in
				</p>
				{/* <container className="relative">
					<div
						className="w-[400px] h-[350px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px]   relative "
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					>
						<Link href="/pikasoja">
							{isHovering ? (
								<Image
									objectFit="contain"
									fill={true}
									className="py-4 "
									src="/images/Pinecone.jpg"
									alt="hero"
								/>
							) : (
								<Image
									objectFit="contain"
									fill={true}
									className="py-4 "
									src="/images/flower.jpg"
									alt="hero"
								/>
							)}


							{/* Product Description */}
							{/* <p
								className="absolute font-bold text-white py-16 top-full md:left-1/4 left-32 -translate-y-full">
								{" "}
								{"<"}3 Soju
							</p>
							<p
								className="absolute font-bold text-white py-8 top-full md:left-1/4 left-32 -translate-y-full">
								$6.99
							</p>
						</Link>
					</div> */}
				{/* </container> */} 
			</div>
		</section>
	);
};

export default Homepage;
