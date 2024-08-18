import Homepage from "../components/index";
import AboutSection from "../components/AboutSection copy";
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import CartProvider from "./../../../context/CartContext";
function Home({ Component, pageProps }) {
	return (
		<main id="fullPage" className=" flex bg-[#bebebe] min-h-screen flex-col">
			<NavBar class="header" />

			<div>
				<Heading />
				<AboutSection />
				<Homepage />
				<Footer />
				<CartProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</CartProvider>
			</div>
		</main>
	);
}
export default Home