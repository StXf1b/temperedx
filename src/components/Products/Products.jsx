import "./Products.css";

const Products = () => {
	return (
		<section className="products">
			<div className="products-title-container">
				<span className="products-tagline">Products</span>
				<h1 className="mt-3 font-bold justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl starting:scale-105 starting:blur-sm flex flex-wrap whitespace-pre-wrap">
					Our Products
				</h1>
				<p className="products-description">
					Explore our range of products designed to help you create the perfect
					game server website with ease and efficiency.
				</p>
			</div>

			<div className="products-section">
				<div className="products-grid-container">
					<div className="card">
						<img src="/assets/product1.png" alt="Minecraft Server Kit" />
						<div className="card-info">
							<h2>Minecraft Server Kit</h2>
							<p>A complete kit for setting up your own Minecraft server.</p>
							<button className="card-btn">View more</button>
						</div>
					</div>

					<div className="card coming-soon">
						<img src="/assets/product2.png" alt="Rust Server Kit" />
						<div className="card-info">
							<h2>Rust Server Kit</h2>
							<p>A complete kit for setting up your own Rust server.</p>
							<button className="card-btn disabled">Coming Soon</button>
						</div>
					</div>
				</div>
				<div className="see-more-products">
					<button className="btn-primary arrow">View All Products</button>
				</div>
			</div>
		</section>
	);
};

export default Products;
