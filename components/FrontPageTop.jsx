
import React from 'react'
import Image from "next/image";
import head from "./../public/images/Final 1.png"

const FrontPageTop = () => {
  return (
    <section className="pt-24 flex flex-col bg-[#f5f5f5] items-center justify-center ">
      <div className=''>
    <div id='project' className="   z-0  sm:w-[400px] sm:h-[350px] md:w-[400px] md:h-[450px] lg:w-[1500px] lg:h-auto"
    >
    <Image
        className=" drop-shadow-md object-scale-down relative "
        src={head}
        fill
        sizes="(max-width: 768px) 20vw, 200px "
        

        
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