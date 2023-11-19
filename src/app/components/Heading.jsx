
import React from 'react'
import Image from "next/image";

const Heading = () => {
  return (
    <section className="flex flex-col bg-[#fafafa]">

    <div id='project' className="flex flex-col items-center justify-center relative h-full sm:h-screen">
    <Image
        className="max-h-full drop-shadow-md"
        src="/images/hompage-background.jpg"
        width={0}
        height={0}
        sizes="100%"
        style={{ width:"100%", height: "100%" }}
        alt="hero"
    />

</div>  
</section>
)
}

export default Heading