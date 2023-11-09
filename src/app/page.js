
import Homepage from "./components/Homepage";
import AboutSection from "./components/AboutSection";
import ProductPage from "./components/ProductPage";

export default function Home() {
	return (
    <main className="flex min-h-screen flex-col">
      {/* <NavBar /> */}
      
      <div class="container mt-24 mx-auto">
        <ProductPage/>
        {/* <Homepage/>
        <AboutSection/> */}
        </div>

    </main>
	);
}
