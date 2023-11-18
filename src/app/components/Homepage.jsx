"use client";
import React from "react";
import Image from "next/image";


const Homepage = () => {
	return (
		<section className="flex min-h-screen flex-col bg-[#fafafa]">
			{/* // Featured products section */}
			<div className=" text-xl/snug md:text-4xl/snug lg:text-5xl/snug bg-[#bebebe] py-8 flex flex-col items-center justify-center ">
				<h2 className="font-mont font text-center border-b border-black text-black w-6/12">
					Featured Products
				</h2>
				<p className="text-center font-mont lg:text-4xl/loose md:text-3xl/loose text-lg/loose text-black">PikaSoja</p>
				<div className="w-[400px] h-[350px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] relative ">
				<Image
					objectFit="contain"
					fill={true}
					className="py-4"
					src="/images/pikasoja.jpg"
					alt="hero"
				/>
				</div>
			</div>
		</section>
	);
};

export default Homepage;
