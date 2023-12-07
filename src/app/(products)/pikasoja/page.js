import ProductPage from "../../components/ProductPage";
import NavBar from "../../components/NavBar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<NavBar />

			<div class="md: md:pt-20 pt-8">
				<ProductPage />
			</div>
		</main>
	);
}
