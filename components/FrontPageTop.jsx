
import React from 'react'
import Image from "next/image";
import head from "./../public/images/hompage-background.jpg"

const FrontPageTop = () => {
  return (
    <section className="flex flex-col bg-[#fafafa]">

    <div id='project' className="max-h-screen items-center justify-center ">
    <Image
        className=" drop-shadow-md "
        src={head}
        

        
    />
        <div className="absolute lg:bottom-20 md:bottom-72 md:block sm:hidden transform -translate-y-1/2 w-full text-center">
          <a className="bg-black text-white py-3 px-6 rounded-md font-light text-lg"
         href='#about'>
            Explore
          </a>
        </div>
    </div>  
    </section>
)
}

export default FrontPageTop