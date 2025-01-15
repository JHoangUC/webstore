import React, { useTransition, useState, useEffect } from "react";
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
        I&apos;m just a university student with a desire to succeed in life 🚀<br /><br />
        Check out my socials @DesignsByKhoi
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
  const [tab, setTab] = useState('skills');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayTab, setDisplayTab] = useState('skills');

  const handleTabChange = id => {
    if (id !== tab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setTab(id);
        setDisplayTab(id);
        setIsTransitioning(false);
      }, 300); // Timeout duration should match the transition duration in CSS
    }
  };

  return (

    <section className="relative " id="aboutSection">
      <div
        id="about"
        className=" md:py-8 py-12 sm:pt-0 bg-[#f5f5f5] md:flex md:flex-row sm:flex-col  items-center justify-center"
      >

        <div className="md:grid z-10 md:grid-cols-1">
          
          <div className="py-10">

            <div className="py-2 px-8 text-black font-normal">
              <h1 className="text-4xl lg:text-7xl md:text-5xl text-center sm:tracking-wide text-black">
                Welcome to Khoi
              </h1>
              <p className="lg:text-4xl md:text-xl text-xl font-normal text-black text-opacity-60 border-b-2 border-black text-center">
                It&apos;s a one person show
              </p>
            </div>

            


            <div  className="p-2 flex flex-row  sm:text-sm md:text-base lg:text-2xl text-black items-center justify-center">
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
          </div>

          <div
            id="about-table-data"
            className={`text-black lg:max-w-2xl md:max-w-md md:text-lg sm:text-sm lg:text-2xl border-gray-300 border-4 bg-gray-200 
                        rounded-xl p-4 m-4 drop-shadow-lg text-center
                        ${isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'} 
                         transition-transform duration-300 ease-in-out`}
						style={{ height: '170px', overflowY: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Jersey 10' }}
						>
            {TAB_DATA.find((t) => t.id === displayTab).content}
          </div>
        </div>

       
         <div
        className="relative sm:w-[300px] sm:h-[300px]   md:w-[400px] md:h-[450px] lg:w-[500px] lg:h-[700px] lg:p-2 drop-shadow-lg p-4"
      >
        <Image
          className="object-contain  rounded-xl "
          src={Khoi}
          alt="me"
        />
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
