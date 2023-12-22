import ContactPage from "../../components/EmailSection";
import NavBar from "../../components/NavBar";

export default function Contact() {
	return (
		<main  className="flex min-h-screen flex-col bg-[#bebebe]">
            <div class="header"> 
			<NavBar />
            </div>
			<div class=" md:pt-20 pt-8">
            <ContactPage />
			</div>
		</main>
	);
}
