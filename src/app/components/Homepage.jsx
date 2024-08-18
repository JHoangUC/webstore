"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import Card from "./Card";
require("dotenv").config();
const Homepage = ({ prices: { data = [], has_more } }) => {
	// const [isHovering, setIsHovered] = useState(false);
	// const onMouseEnter = () => setIsHovered(true);
	// const onMouseLeave = () => setIsHovered(false);
	//stripe
	const [products, setProducts] = useState(data);
	const [hasMore, setHasMore] = useState(has_more);

	const lastProductId = products[products.length - 1]?.id;

	const loadMore = async () => {
		if (!hasMore || !lastProductId) return;

		try {
			const { prices } = await fetch(
				`/api/stripe/prices?starting_after=${lastProductId}`
			).then((res) => res.json());
			if (prices.data) {
				setProducts((products) => [...products, ...prices.data]);
				setHasMore(prices.has_more);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section id="products" className="flex  flex-col bg-[#bebebe]">
			{/* // Featured products section */}
			<div className="  bg-[#bebebe] py-8 flex flex-col items-center justify-center">
				<div className="md:w-3/5">
					<h2 className=" text-3xl/snug md:text-4xl/snug lg:text-5xl/snug font-light text-center border-b-2 border-black text-black">
						Featured Products
					</h2>
				</div>
				<div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
					{products.map((price) => (
						<Card key={price.id} price={price} />
					))}
				</div>
				<button
					onClick={loadMore}
					disabled={!hasMore}
					className="mt-10 w-full bg-sky-100 rounded-md py-2 px-8 text-sm font-medium
		   text-sky-900 hover:bg-sky-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-sky-100"
				>
					Load more
				</button>
				<div>
				{/* <p className="text-center font-light lg:text-4xl/loose md:text-3xl/loose text-xl/loose text-black">
					PikaSoja
				</p>
				<container className="relative">
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
							)} */}
				{/* <Image 
								objectFit="contain"
								fill={true}
								className="py-4 "
								src="/images/flower.jpg"
								alt="hero"
							/> */}

				{/* Product Description */}
				{/* <p className="absolute font-bold text-white py-16 top-full md:left-1/4 left-32 -translate-y-full">
								{" "}
								{"<"}3 Soju
							</p>
							<p className="absolute font-bold text-white py-8 top-full md:left-1/4 left-32 -translate-y-full">
								$6.99
							</p>
						</Link>
					</div>
				</container> */}
				</div>
			</div>
		</section>
	);
};

export async function getServerSideProps() {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

	const prices = await stripe.prices.list({
		active: true,
		limit: 2,
		expand: ["data.product"],
	});

	return {
		props: {
			prices,
		},
	};
}

export default Homepage;
