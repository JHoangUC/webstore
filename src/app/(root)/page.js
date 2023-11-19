import Homepage from "../components/Homepage";
import AboutSection from "../components/AboutSection";
import ProductPage from "../components/ProductPage";
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
export default function Home() {
	return (
		<main className="flex bg-[#bebebe] min-h-screen flex-col">
			<NavBar />

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
