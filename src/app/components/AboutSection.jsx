"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>Node.js</li>
				<li>Express</li>
				<li>React</li>
				<li>Next.js</li>
				<li>MongoDb</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>University Of California, San Diego</li>
				<li>Palomar College, San Marcos</li>
			</ul>
		),
	},
	{
		title: "Experience",
		id: "experience",
		content: (
			<ul className="list-disc pl-2">
				<li>React Native Developer, Resilience Inc</li>
				<li>Software Engineer at Facebook</li>
			</ul>
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
		<container  class="bg-[#bebebe]  py-8 font-mont flex items-top justify-center">
			{/* Welcome Header */}
			<div id="about" className="py-8 px-8  text-black">
				<h2 className="text-4xl  text-left  tracking-wide text-black">
					Welcome to Khoi
				</h2>
				<p className="text-lg font-thin border-b-2 text-[#1a1b1f] text-opacity-60 border-black text-center">
					It's a one person show
				</p>
				
                <div className="flex flex-row text-black justify-center">
                <TabButton
					selectTab={() => handleTabChange("skills")}
					active={tab === "skills"}
				>
					Skills{" "}
				</TabButton>
				<TabButton
					selectTab={() => handleTabChange("education")}
					active={tab === "education"}
				>
					Education{" "}
				</TabButton>
				<TabButton
					selectTab={() => handleTabChange("experience")}
					active={tab === "experience"}
				>
					Experience{" "}
				</TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>

			</div>
            <div className="w-[400px] h-[550px] md:w-[100px] md:h-[300px] lg:w-[500px] lg:h-[400px] relative
			 ">
			<Image

				src={"/images/khoi.jpg"}
				objectFit="contain"
				fill={true}
				alt="hero"
			/>
            </div>
		</container>
	);
};

export default AboutSection;
