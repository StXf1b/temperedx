import {
	Code,
	Palette,
	Server,
	ShoppingCart,
	TrendingUp,
	Zap,
} from "lucide-react";
import "./Features.css";

const Features = () => {
	const features = [
		{
			id: 1,
			title: "Server Store",
			label: "Monetization",
			description:
				"Create a modern store for your server and sell ranks, kits, and perks with ease.",
			icon: <ShoppingCart />,
		},
		{
			id: 2,
			title: "Easy Setup",
			label: "Setup",
			description:
				"Launch your website in minutes with a simple configuration, no coding required.",
			icon: <Zap />,
		},
		{
			id: 3,
			title: "Custom Design",
			label: "Design",
			description:
				"Change colors, text, and layout to match your server’s brand perfectly.",
			icon: <Palette />,
		},
		{
			id: 4,
			title: "Live Server Status",
			label: "Game Data",
			description:
				"Display real-time information about your server's status and performance.",
			icon: <Server />,
		},
		{
			id: 5,
			title: "Built to Convert",
			label: "Growth",
			description:
				"Designed to increase player trust and boost your server’s revenue.",
			icon: <TrendingUp />,
		},
		{
			id: 6,
			title: "Modern Tech",
			label: "Tech",
			description:
				"Built with performance and scalability in mind using modern web technologies.",
			icon: <Code />,
		},
	];
	return (
		<section className="features">
			<div className="features-title-container">
				<span className="tagline">Features</span>
				<div className="features-title">
					<span className="mt-3 font-bold justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl starting:scale-105 starting:blur-sm flex flex-wrap whitespace-pre-wrap">
						Powerful Features to Build
					</span>
					<span className="font-bold justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl starting:scale-105 starting:blur-sm flex flex-wrap whitespace-pre-wrap">
						Your Server Website
					</span>
				</div>
				<p className="features-description ">
					Discover the tools and features that make our platform the perfect
					solution for your server website needs.
				</p>
			</div>
			<div className="feature-grid">
				{features.map((feature) => (
					<div className="feature-card" key={feature.id}>
						<div className="feature-card-title">
							<span>{feature.icon}</span>
							<h3>{feature.label}</h3>
						</div>
						<h1>{feature.title}</h1>
						<p>{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
