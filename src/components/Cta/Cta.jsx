import React from "react";
import "./Cta.css";
import { Cog, Paintbrush, User } from "lucide-react";

const Cta = () => {
	return (
		<div>
			<div className="cta-title-container">
				<span className="cta-tagline">Custom Work</span>
				<div className="cta-title">
					<span className="mt-3 font-bold justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl starting:scale-105 starting:blur-sm flex flex-wrap whitespace-pre-wrap">
						Need something custom?
					</span>
				</div>
				<p className="cta-description">
					Get a fully tailored website built specifically for your server and
					community.
				</p>
				<div className="cta-items">
					<div className="cta-item">
						<span>
							<Paintbrush />
						</span>
						<h3>Custom Designs</h3>
					</div>
					<div className="cta-item">
						<span>
							<Cog />
						</span>
						<h3>Advanced Functionality</h3>
					</div>
					<div className="cta-item">
						<span>
							<User />
						</span>
						<h3>Personalized Support</h3>
					</div>
				</div>
				<button className="btn-primary arrow mt-7">Get in Touch</button>
			</div>
		</div>
	);
};

export default Cta;
