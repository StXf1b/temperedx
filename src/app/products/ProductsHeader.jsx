import "./Products.css";

const ProductsHeader = () => {
	return (
		<div className="products-header">
			<span className="tagline">Products</span>
			<span className="mt-3 font-bold justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl starting:scale-105 starting:blur-sm flex flex-wrap whitespace-pre-wrap">
				Explore our range of products
			</span>
			<p>Discover the latest designs and innovations in our product lineup</p>
		</div>
	);
};

export default ProductsHeader;
