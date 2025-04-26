"use client";
import React from "react";
import Head from "next/head";

const Homepage = () => {
  return (
    <>
    <Head>
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "KhoiStickers",
          "url": "https://www.khoistickers.com",
          "logo": "https://www.khoistickers.com/logo.png",
          "sameAs": [
            "https://www.instagram.com/designsbykhoi",
            "https://www.tiktok.com/designsbykhoi"
          ]
        })
      }}
      />
      <link rel="canonical" href="https://www.khoistickers.com/" />

      <title>KhoiStickers | High-Quality Custom Stickers – Free Shipping!</title>
      <meta
        name="description"
        content="Shop 3x3 inch custom stickers at KhoiStickers. Buy 3, get 1 free! Free shipping on all orders. High-quality, waterproof, and fade-resistant stickers."
      />
      <meta property="og:title" content="KhoiStickers | Buy 3 Stickers, Get 1 Free!" />
      <meta
        property="og:description"
        content="Discover amazing custom stickers. Buy 3, get 1 free. Free shipping on all orders. Shop now at KhoiStickers!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.khoistickers.com/" />
      <meta property="og:image" content="https://www.khoistickers.com/your-featured-image.jpg" />
    </Head>

    <section id="products" className="flex flex-col bg-[#f5f5f5]">
      	{/* Promotional Banner */}
		<div className="relative bg-gradient-to-r from-sky-400 to-blue-500 text-white py-6 px-8  shadow-lg text-center">
			<h2 className="text-4xl font-extrabold mb-2">
				🎉 Special Offer: Buy 3, Get 1 Free! 🎁
			</h2>
			<p className="text-lg font-medium">
				Add <span className="font-bold">any 3 stickers</span> to your cart, and we&apos;ll include a <span className="underline">random sticker</span> for free!
			</p>
			<p className="mt-4 text-sm italic opacity-90">
				Offer valid for a limited time only. Don&apos;t miss out!
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
    </>
  );
};

export default Homepage;
