import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Features from "@/components/Features/Features";
import Products from "@/components/Products/Products";
import Cta from "@/components/Cta/Cta";
export default function Home() {
	return (
		<div className="overflow-x-hidden w-full">
			<div className="fixed inset-0 -z-20 bg-[url('/assets/squares.png')] opacity-2 dark:invert"></div>
			<div className="fixed inset-0 -z-1 bg-[url('/assets/mesh.jpg')] [background-size:110%] object-fill opacity-2"></div>
			<div className="gradient-hole-page fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>
			{/* Navbar */}
			<Navbar />
			{/* Hero Section */}
			<Hero />
			{/* Features Section */}
			<Features />

			{/* Products Section */}
			<Products />
			{/* Cta Section */}
			<Cta />
		</div>
	);
}
