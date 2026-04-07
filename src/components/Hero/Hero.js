import { FaDiscord } from "react-icons/fa";
import "./Hero.css";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="hero">
			<Image
				src="/assets/hero-gradient.png"
				alt="Hero"
				className="absolute z-[-1] opacity-50"
				width={1914}
				height={1262}
				priority
			/>

			<div className="hero-content pt-25 md:pt-40 lg:pt-40">
				<div className="discord-hero">
					<FaDiscord size={24} />
					Join our Discord
				</div>
				<span className="mt-3 justify-center text-2xl leading-tight font-extrabold transition-all duration-1000 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl starting:scale-105 starting:blur-sm flex flex-wrap whitespace-pre-wrap">
					Build your game <span className="text-highlight">website</span>
				</span>
				<span className="justify-center text-2xl leading-tight font-extrabold transition-all duration-1000 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl starting:scale-105 starting:blur-sm flex flex-wrap whitespace-pre-wrap">
					without <span className="text-highlight">the hassle</span>
				</span>
				<div className="max-w-4xl items-center mx-auto px-3 p-2 sticky">
					<p className="hero-description mt-2 sm:text-2xl font-semibold tracking-wider">
						Launch a fast, modern server website designed to increase player
						trust and revenue.
					</p>
				</div>

				<div className="hero-btns flex gap-4 mt-6 justify-center">
					<button className="btn-primary">See Products</button>
					<button className="btn-secondary">About Us</button>
				</div>
			</div>
			<div className="mt-10">
				<div className="relative max-w-7xl mx-auto z-10 px-3">
					<figure className="rounded-lg p-3 backdrop-blur-lg bg-white/5">
						<img src="/assets/hero_img.png" alt="Hero Image" />
					</figure>
				</div>
			</div>
		</div>
	);
};

export default Hero;
