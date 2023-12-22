"use client";
import React, { useState } from "react";
import InstagramIcon from "../../../public/instagram.svg";
import LinkedinIcon from "../../../public/meta.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
	return (
		<section
			id="contact"
			className=" grid lg:grid-cols-2 md:grid-cols-1   my-12 md:my-12 lg:py-24 lg:px-72 md:px-32 w-full "
		>
			<div className="z-10">
				<h5 className="text-xl font-bold text-black my-2">
					Let&apos;s Connect
				</h5>
				<p className="text-black mb-4 max-w-md hover:cursor-default">
					{" "}
					I&apos;m currently looking for new opportunities, my inbox is always
					open. Whether you have a question or just want to say hi, I&apos;ll
					try my best to get back to you!
				</p>
				<div className="socials flex flex-row gap-2 ">
					<Link href="https://github.com/JHoangUC" target="_blank">
						<Image src={InstagramIcon} alt="Github Icon" />
					</Link>
					<Link href="https://www.linkedin.com/in/john-hoang-848a031a1/"  target="_blank">
						<Image src={LinkedinIcon} alt="Linkedin Icon" />
					</Link>
				</div>
			</div>
			<div>
				

					<form className="flex flex-col" action="https://api.web3forms.com/submit" method="POST">
						<input type="hidden" name="apikey" value="6d440886-061e-4018-8df1-f1ad2e9a7c0d"/>
						<div className="mb-6 md:mt-9">
							<label
								htmlFor="email"
								className=" text-black block mb-2 text-sm font-medium"
							>
								Email:
							</label>
							<input
								name="email"
								type="email"
								id="email"
								required
								className="bg-white border placeholder-[#9CA2A9] rounded-lg text-black text-sm  block w-full p-2.5"
								placeholder=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="subject"
								className="text-black block text-sm mb-2 font-medium"
							>
								Subject
							</label>
							<input
								name="subject"
								type="text"
								id="subject"
								required
								className="bg-white border placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
								placeholder=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								className="text-black block text-sm mb-2 font-medium"
							>
								Message
							</label>
							<span   class="input" role="textbox"contenteditable>
							<textarea
								name="message"
								id="message"
								rows="10"
								className="bg-white border placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
								placeholder=""
							/>
							</span>
						</div>
						<button
							type="submit"
							className="bg-gray-400 hover:bg-gray-600  text-black font-medium py-2.5 px-5 rounded-lg w-full"
						>
							Send Message
						</button>
						
					</form>
				
			</div>
		</section>
	);
};

export default EmailSection;
