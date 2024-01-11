"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Khoi from "./../public/images/khoi.jpg"

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
		<section className="relative" id="aboutSection">
			<div
				id="about"
				className="pt-12 md:pt-16 bg-[white] md:flex md:flex-row sm:flex-col items-top items-center justify-center"
			>
				<div className="md:grid md:grid-cols-1">
					{/* Welcome Header */}
					<div className="py-2 px-8  text-black font-normal">
						<h1 className="text-3xl lg:text-7xl md:text-4xl text-center sm:tracking-wide text-black">
							Welcome to Khoi
						</h1>
						<p className=" lg:text-4xl md:text-xl text-md font-normal text-[#1a1b1f] text-opacity-60  border-b-2 border-black text-center">
							It's a one person show
						</p>
					</div>

					{/* TAB BUTTON */}
					
						<div
							className="p-2 flex flex-row sm:text-sm md:text-base lg:text-2xl
					text-black  items-center justify-center  "
						>
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
								Support{" "}
							</TabButton>
						</div>
						{/*Editing Tab Content Data
							TAB DATA*/}
						<div
							id="about-table-data"
							className=" lg:max-w-2xl md:max-w-md  text-black md:text-lg sm:text-sm  border-gray-300 border-4 bg-gray-200 
									rounded-xl p-4 m-4 drop-shadow-lg text-center"
						>
							{TAB_DATA.find((t) => t.id === tab).content}
						</div>
				</div>
					<div 
						className=" lg:px-80  drop-shadow-lg 
							sm:w-[400px] sm:h-[350px] md:w-[400px] md:h-[450px] lg:w-[500px] lg:h-[700px]   
							"
					>
						<Image
							className="object-scale-down"
							src={Khoi}
							layout='fill'

								
							alt="me"
							// style={{position: "relative", left:"50%"}}
						/>
					</div>
				
			</div>
		</section>
	);
};

export default AboutSection;
