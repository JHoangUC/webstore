"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
	return (
		<section className="flex  flex-col bg-[#bebebe]">
			{/* // Featured products section */}
			<div className="  bg-[#bebebe] py-8 flex flex-col items-center justify-center">
				<div className="md:w-3/5">
					<h2 className=" text-3xl/snug md:text-4xl/snug lg:text-5xl/snug font-light text-center border-b-2 border-black text-black">
						Featured Product
					</h2>
				</div>
				<p className="text-center font-light lg:text-4xl/loose md:text-3xl/loose text-xl/loose text-black">
					PikaSoja
				</p>
				<container className="relative">

					<div className="w-[400px] h-[350px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] relative ">
						<Link href="/pikasoja">
							<Image
								objectFit="contain"
								fill={true}
								className="py-4"
								src="/images/pikasoja.jpg"
								alt="PikaSoja"
							/>
						
				{/* Product Description */}
						<p className="absolute font-normal text-gray-200 py-16 
						 top-full md:left-1/4 left-32 -translate-y-full
						"> {'<'}3 Soju</p>
						<p className="absolute font-light text-gray-200 py-8 
						 top-full md:left-1/4 left-32 -translate-y-full
						">$7.00</p>
						</Link>
					</div>
				</container>
			</div>
		</section>
	);
};

export default Homepage;
