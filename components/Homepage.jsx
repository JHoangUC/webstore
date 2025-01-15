"use client";
import React from "react";

const Homepage = () => {
  return (
    <section id="products" className="flex flex-col bg-[#f5f5f5]">
      {/* Promotional Banner */}
	  <div className="relative bg-gradient-to-r from-sky-400 to-blue-500 text-white py-6 px-8  shadow-lg text-center">

  <h2 className="text-4xl font-extrabold mb-2">
    🎉 Special Offer: Buy 3, Get 1 Free! 🎁
  </h2>
  <p className="text-lg font-medium">
    Add <span className="font-bold">any 3 stickers</span> to your cart, and we'll include a <span className="underline">random sticker</span> for free!
  </p>
  <p className="mt-4 text-sm italic opacity-90">
    Offer valid for a limited time only. Don't miss out!
  </p>
</div>





      {/* Featured Products Section */}
      <div className="lg:mt-28 md:mt-24 mt-12 flex flex-col items-center justify-center">
        <div className="md:w-3/5">
          <h2 className="text-4xl/snug lg:text-5xl/snug font-light text-center border-b-2 border-black text-black">
            Featured Products
          </h2>
        </div>
        <p className="text-center font-light lg:text-3xl/loose md:text-2xl/loose text-2xl/loose text-black">
          All Stickers are 3 in x 3 in
        </p>
        <p className="text-center font-light lg:text-2xl/loose md:text-xl/loose text-xl/loose text-black">
          Free Shipping
        </p>
      </div>


    </section>
  );
};

export default Homepage;
