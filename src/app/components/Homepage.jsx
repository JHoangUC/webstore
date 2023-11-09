"use client";
import React from "react";
import Image from "next/image";
const Homepage = () => {
	return (
		<section className="flex min-h-screen flex-col bg-[#fafafa]">
			<h1 className="text-4xl font-bold text-center bg-black">Store 🛒</h1>
			<div className="flex flex-col items-center justify-center relative">
				<Image
					src="/images/hompage-background.jpg"
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: "100%", height: "auto" }}
					alt="hero"
				/>
				<button className="absolute bottom-5 bg-black text-white px-6 py-3 font-medium rounded-md">
					Explore
				</button>
			</div>
			{/* // Featured products section */}

			<div className="bg-[#bebebe] py-8 flex flex-col items-center justify-center">
				<h2 className="text-4xl font-medium text-center border-b-2 border-black text-black">
					Featured Products
				</h2>
				<p className="text-center font-normal text-3xl text-black">PikaSoja</p>
				<Image
					className="py-4"
					src="/images/pikasoja.jpg"
					width={300}
					height={400}
					alt="hero"
				/>
			</div>

		</section>
	);
};

export default Homepage;
