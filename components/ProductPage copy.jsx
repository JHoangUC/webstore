"use client";
import React, { Component } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

const ProductPage = () => {
	return (
		<section id="google" className="min-h-screen bg-[#bebebe] text-black">
			{" "}
			<div className="grid grid-cols-1 sm:grid-cols-4 ">
				{/* Image Carousel */}
				<div className="max-w-min col-span-2 lg:place-self-end place-self-center mt-10">
				<Carousel className="">
					<div className="border-white border-4 rounded-md">
						<img src="/images/flower.jpg" alt="image1" />
						
					</div>
					<div className="border-white border-4 rounded-md">
						<img src="/images/Pinecone.jpg" alt="image2" />
						
					</div>
					<div className="border-white border-4 rounded-md">
						<img src="/images/alot.jpg" alt="image3" />
						
					</div>
				</Carousel>
				</div>

				{/* Product Heading */}
				<div id="fullPage" className="flex flex-col w-3/4 place-self-center ">
					<h1  className="text-4xl  text-left text-black">PikaSoja</h1>
					<h6 className="text-xl py-2 font-light text-left text-black">
						$6.99 + Free Shipping
					</h6>
					<p className="text-sm py-2 font-light text-left text-black">
					Drooling dreams of  raving electric cuteness.
					</p>
					{/* Line Divider */}
					<div className="py-2">
						<hr
							style={{
								background: "black",
								color: "black",
								height: "2px",
							}}
						/>
					</div>
					{/* Product Description */}
					<div>
						<table
							className=" text-sm font-light"
							style={{ height: "70px", width: "100%" }}
						>
							<tbody>
								<tr>
									<td>Size</td>
									<td>2 in x 1 in</td>
								</tr>
								<tr>
									<td>Weight</td>
									<td>.01 oz</td>
								</tr>
							</tbody>
						</table>
						<div className="py-2">
							<hr
								style={{
									background: "black",
									color: "black",
									height: "2px",
								}}
							/>
						</div>
					</div>
					{/* Add to Cart */}
					<div className="py-2">
						<a
							target="_blank"
							href="https://buy.stripe.com/fZe4hB4no6ejaNWfYY"
							rel="noopener noreferrer"
						>
							<button className="bg-black text-white px-6 py-3 font-medium rounded-md hover:bg-slate-600">
								Buy Now
							</button>
						</a>
					</div>

				</div>
			</div>
		</section>
	);
};

export default ProductPage;
