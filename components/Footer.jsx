import React from "react";
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=" bg-[#69729b] footer  z-10 border-t-gray-400 border-l-transparent border-r-transparent text-white">
      <div className=" container flex justify-between p-2 md:p-6">
        <Link href='/'><span>Designs by Khoi</span></Link>
        <p className="text-white-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer
