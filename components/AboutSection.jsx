"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Khoi from "./../public/images/khoi.jpg"

const TAB_DATA = [
  {
    title: 'About Me',
    id: 'skills',
    content: (
      <p>
        I&apos;m John 😊 the one-person show behind Designs By Khoi 🎈  <br /> but
        I&apos;m just a university student with a desire to succeed in life 🚀
      </p>
    )
  },
  {
    title: 'Why Stickers?',
    id: 'education',
    content: (
      <p>
        As a kid, I started making graphics using clip art 🎨 and even sold
        tropical fish from home 🎁 Now, I&apos;ve
        added programming to the mix <br/> So, 
		this store is really just a collection of those things I&apos;ve enjoyed doing and learning along the way! 🌟
      </p>
    )
  },
  {
    title: 'Support',
    id: 'experience',
    content: (
      <p>
        🚀This store marks my first step towards independence 🚀<br/> 🌍 every purchase directly supports an
        independent artist and developers like me 🌍<br/> 🌟 Your support keeps the dream
        alive and the stickers flowing 🌟 
      </p>
    )
  }
]
const AboutSection = () => {
	const [tab, setTab] = useState('skills')
	const [isPending, startTransition] = useTransition()
	//startTransition
	const handleTabChange = id => {
	  startTransition(() => {
		setTab(id)
	  })
	}
	return (
	  <section className='relative' id='aboutSection'>
		<div
		  id='about'
		  className='pt-12 md:pt-16 bg-[white] md:flex md:flex-row sm:flex-col items-top items-center justify-center'
		>
		  <div className='md:grid md:grid-cols-1'>
			{/* Welcome Header */}
			<div className='py-2 px-8  text-black font-normal'>
			  <h1 className='text-3xl lg:text-7xl md:text-4xl text-center sm:tracking-wide text-red-500'>
				Welcome to Khoi
			  </h1>
			  <p className=' lg:text-4xl md:text-xl text-md font-normal text-[#726127] text-opacity-60  border-b-2 border-black text-center'>
				It&apos;s a one person show
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
							className=' text-blue-700 lg:max-w-2xl md:max-w-md  md:text-lg sm:text-sm  border-gray-300 border-4 bg-gray-200 
									rounded-xl p-4 m-4 drop-shadow-lg text-center'
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
							layout="fill"

								
							alt="me"
							// style={{position: "relative", left:"50%"}}
						/>
					</div>
				
			</div>
		</section>
	);
};

export default AboutSection;
