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
		<section className="bg-white py-8 flex items-left justify-left">
			{/* Welcome Header */}
			<div className="py-8 px-8 text-black">
				<h2 className="text-4xl font-medium text-left   text-black">
					Welcome to Khoi
				</h2>
				<p className="font-light text-xl border-b-2 border-black text-black">
					It's a one person show
				</p>
                <div className="flex flex-row text-black">
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
            <div className="flex align-left relative">
			<Image
				className=""
				src={"/images/khoi.jpg"}
				width={400}
				height={500}
				alt="hero"
			/>
            </div>
		</section>
	);
};

export default AboutSection;
