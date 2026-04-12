"use client";
import "./Product.css";
import React from "react";
import { products } from "@/lib/products";
import { useState } from "react";
import { Check, Layout, Clock, Star, ExternalLink } from "lucide-react";
import ProductOverview from "./ProductOverview";
import ProductChangelog from "./ProductChangelog";
import ProductReviews from "./ProductReviews";
import Link from "next/link";

const Page = ({ params }) => {
	const { id } = React.use(params);
	const [activeTab, setActiveTab] = useState("overview");

	const product = products.find((p) => p.id === parseInt(id));

	return (
		<div className="product-page">
			<div className="product-page-header">
				<h1>
					{product.title} <span>v{product.version}</span>
				</h1>
				<p>{product.description}</p>
			</div>
			<div className="product-content-wrapper">
				<div className="product-details-container">
					<div className="product-details-navigation">
						<button
							onClick={() => setActiveTab("overview")}
							className={activeTab == "overview" ? "btn-active" : ""}
						>
							<Layout size={16} />
							Overview
						</button>
						<button
							onClick={() => setActiveTab("changelog")}
							className={activeTab == "changelog" ? "btn-active" : ""}
						>
							<Clock size={16} />
							Changelog
						</button>
						<button
							onClick={() => setActiveTab("reviews")}
							className={activeTab == "reviews" ? "btn-active" : ""}
						>
							<Star size={16} />
							Reviews
						</button>
						<button
							onClick={() => setActiveTab("live-preview")}
							className={activeTab == "live-preview" ? "btn-active" : ""}
						>
							<ExternalLink size={16} />
							<Link href={product.livePreviewUrl} target="_blank">
								Live Preview
							</Link>
						</button>
					</div>
					<div className="product-details-content">
						{activeTab === "overview" && <ProductOverview product={product} />}
						{activeTab === "changelog" && (
							<ProductChangelog product={product} />
						)}
						{activeTab === "reviews" && <ProductReviews product={product} />}
					</div>
				</div>
				<div className="product-sidebar">
					<div className="buy-card">
						<div className="flex justify-between align-middle items-center">
							<span>Buy a license now</span>
							{product.discountedPrice ? (
								<div className="flex gap-2 justify-center items-center align-middle">
									<span className="original-price">€{product.price}</span>
									<span className="discounted-price">
										€{product.discountedPrice}
									</span>
								</div>
							) : (
								<span className="price">€{product.price}</span>
							)}
						</div>
						<h2>EULA</h2>
						<div className="flex flex-col gap-2">
							<div className="card-eula selected">
								<h3>Standard EULA</h3>
								<p>Use on any project you own with attribution</p>
							</div>
							<div className="card-eula">
								<span className="flex justify-between items-center align-middle">
									<h3>Extended EULA</h3>
									<p>+ €10.00</p>
								</span>
								<p>Use on any project you own without attribution</p>
							</div>
						</div>
						<h2>Support</h2>
						<div className="card-support-wrapper flex flex-col gap-4">
							<div className="card-support selected">
								<h3>Standard Support</h3>
								<p>Includes:</p>
								<ul>
									<li>
										<Check />
										Download the resource
									</li>
									<li>
										<Check /> Access to updates
									</li>
									<li>
										<Check /> Support via email or discord
									</li>
								</ul>
							</div>
							<div className="card-support">
								<span className="flex justify-between items-center align-middle">
									<h3>Enhanced Support</h3>
									<p>+ €20.00</p>
								</span>
								<p>Includes:</p>
								<ul>
									<li>
										<Check /> Installation & Setup
									</li>
									<li>
										<Check />
										Hosting Setup
									</li>
									<li>
										<Check />
										Database Management
									</li>
								</ul>
							</div>
						</div>
						<button className="buy-button">Buy Now</button>
						<p className="stripe-text">Payment handled securely by Stripe</p>
					</div>
					<div className="referal-card">
						<h2>Refer a friend</h2>
						<p>Refer a friend and get 10% off your next purchase.</p>
						<div className="ref-btns-container">
							<button className="refer-button">Copy Referral link</button>
							<button className="learn-more-button">
								Learn about referrals
							</button>
						</div>
					</div>
					<div className="info-card">
						<div className="first-row-cards">
							<div className="info-card-item">
								{product.downloads}
								<span>Downloads</span>
							</div>
							<div className="info-card-item">
								{product.likes}
								<span>Likes</span>
							</div>
							<div className="info-card-item">
								{product.rating}
								<span>Rating</span>
							</div>
						</div>
						<div className="second-row-cards">
							<div className="info-card-item2">
								{product.publishedAt}
								<span>Published</span>
							</div>
							<div className="info-card-item2">
								{product.updatedAt}
								<span>Last Update</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
