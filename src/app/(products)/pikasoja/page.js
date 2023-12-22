import ProductPage from "../../components/ProductPage";
import NavBar from "../../components/NavBar";


export default function PikaSoja() {
	return (
		<main className="flex min-h-screen flex-col">
		<div class="header"> 
			<NavBar />
            </div>

			<div class="md: md:pt-20 pt-8">
				<ProductPage />
			</div>
		</main>
	);
}
