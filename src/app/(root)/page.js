import Homepage from "../components/Homepage";
import AboutSection from "../components/AboutSection copy";
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<main id="fullPage" className=" flex bg-[#bebebe] min-h-screen flex-col">
			<NavBar class="header"/>

			<div>
				{/* <ProductPage/> */}
				<Heading/>
				<AboutSection/>
				<Homepage />
				<Footer/>
				
			</div>
		</main>
	);
}
