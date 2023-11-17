import React from "react";
import Image from "next/image";


const ProductPage = () => {


	return (
		<section className=" min-h-screen flex-col bg-[#fafafa] text-black">
			{" "}
			<section className="px-8 py-8 flex">
				<Image
					className=""
					src={"/images/pikasoja.jpg"}
					width={300}
					height={400}
					alt="hero"
				/>
				{/* Product Heading */}
				<div className=" px-11 py-11">
					<h1 className="text-4xl font-bold text-left text-black">PikaSoja</h1>
					<h6 className="text-xl py-2 font-light text-left text-black">
						$7.00 + Free Shipping
					</h6>
					<p className="text-sm py-2 font-light text-left text-black">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
									<td>Description</td>
									<td>.01</td>
								</tr>
								<tr>
									<td>Weight</td>
									<td>.01</td>
								</tr>
							</tbody>
						</table>
						<div className="py-2">
							<hr
								style={{
									background: "bg-[#bebebe]",
									color: "bg-[#bebebe]",
									height: "2px",
								}}
							/>
						</div>
					</div>
					{/* Add to Cart */}
					<div className="py-2">
						<button className="bg-black text-white px-6 py-3 font-medium rounded-md">
							Buy Now
						</button>
					</div>
				</div>
			</section>
		</section>
	);
};

export default ProductPage;
