"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
	{
		title: "About Me",
		id: "skills",
		content: (
			<p>
				I'm John, the one-person show behind Khoi. I'm on a mission to share my
				passion for design and tech with you through these amazing stickers.
			</p>
		),
	},
	{
		title: "Why Stickers?",
		id: "education",
		content: (
			<p>
				Stickers aren't just paper and adhesive to me; they're tiny canvases of
				self-expression. I pour my heart and soul into each design, hoping to
				bring a little bit of joy, inspiration, and color to your life.
			</p>
		),
	},
	{
		title: "Support",
		id: "experience",
		content: (
			<p>
				This store is a labor of love, and every purchase directly supports an
				independent artist and developer like me. Your support keeps the dream
				alive and the stickers flowing!
			</p>
		),
	},
];
const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();
	//startTransition
	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};
	return (
		<div class="bg-[#bebebe]  pt-8 flex flex-col items-top items-center justify-center">
			{/* Welcome Header */}
			<div id="about" className="py-2 px-8 w-full sm:w-3/4 text-black">
				<h1 className="text-3xl sm:text-5xl font-light  text-center tracking-wide text-black">
					Welcome to Khoi
				</h1>
				<p className="sm:text-lg text-md font-normal border-b-2 text-[#1a1b1f] text-opacity-60 border-black text-center">
					It's a one person show
				</p>
			</div>

			{/* TAB BUTTON */}
				<div className=" p-2 flex flex-row text-sm sm:text-xl
				 text-black items-center justify-center  ">
					<TabButton
						selectTab={() => handleTabChange("skills")}
						active={tab === "skills"}
					>
						About Me{" "}
					</TabButton>
					<TabButton
						selectTab={() => handleTabChange("education")}
						active={tab === "education"}
					>
						Why Stickers?{" "}
					</TabButton>
					<TabButton
						selectTab={() => handleTabChange("experience")}
						active={tab === "experience"}
					>
						Support me{" "}
					</TabButton>
				</div>
			

			{/* Editing Tab Content Data */}
			<div className=" text-black text-lg  border-gray-300 border-4 bg-gray-200 
			rounded-xl p-4 m-4 drop-shadow-lg max-w-screen-lg text-center">
				{TAB_DATA.find((t) => t.id === tab).content}
			</div>

			<div
				className=" drop-shadow-lg
			   w-[400px] h-[550px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] relative
			 "
			>
				<Image
					src={"/images/khoi.jpg"}
					objectFit="contain"
					fill={true}
					alt="hero"
				/>
			</div>
		</div>
	);
};

export default AboutSection;
