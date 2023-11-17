import Homepage from "../components/Homepage";
import AboutSection from "../components/AboutSection";
import ProductPage from "../components/ProductPage";
import NavBar from "../components/NavBar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<NavBar />

			<div class="">
				{/* <ProductPage/> */}
				<Homepage />
				{/* <AboutSection/> */}
			</div>
		</main>
	);
}
