
import React from 'react'
import Image from "next/image";
import head from "./../public/images/Final 1.png"

const FrontPageTop = () => {
  return (
    <section className="pt-24 flex flex-col bg-[#f5f5f5] items-center justify-center ">
      <div className=''>
    <div id='project' className=" z-0   md:w-[900px]  lg:w-[1500px] "
    >
    <Image
        className=" drop-shadow-md object-scale-down  "
        src={head}
        
        
        

        
    />
        {/* <div className="absolute lg:bottom-20 md:bottom-72 md:block sm:hidden transform -translate-y-1/2 w-full text-center">
          <a className="bg-black text-white py-3 px-6 rounded-md font-light text-lg"
         href='#about'>
            Explore
          </a>
        </div> */}
    </div>  
    
    </div>
    </section>
)
}

export default FrontPageTop