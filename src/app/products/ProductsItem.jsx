import { Heart, Download, Star } from "lucide-react";
import Link from "next/link";

const ProductsItem = ({ item }) => {
	const handleIcon = (type) => {
		switch (type) {
			case "minecraft":
				return "/assets/minecraft.png";
			case "rust":
				return "/assets/rust.svg";
			default:
				return "/assets/default.svg";
		}
	};

	return (
		<Link href={`/products/${item.slug}`} className="content-card">
			{/* IMAGE */}
			<div className="card-image">
				<img src={item.thumbnail} alt={item.title} />

				{/* overlay gradient */}
				<div className="card-overlay" />

				{/* PRICE */}
				<div className="card-price-container">
					{item.discountedPrice ? (
						<>
							<span className="card-price-old">${item.price}</span>
							<span className="card-price-new">${item.discountedPrice}</span>
						</>
					) : (
						<span className="card-price-new">${item.price}</span>
					)}
				</div>
			</div>

			{/* CONTENT */}
			<div className="card-details">
				<p className="last-update">Updated {item.updatedAt}</p>

				<h3 className="card-title">{item.title}</h3>
				<div className="type-img-container">
					<img
						src={handleIcon(item.type)}
						alt={item.type}
						className="card-type-icon"
					/>
				</div>

				<p className="card-description">{item.description}</p>
			</div>

			{/* FOOTER */}
			<div className="card-footer">
				<div className="rating">
					<Star size={14} /> {item.rating}
				</div>

				<div className="stats">
					<span>
						<Download size={14} /> {item.downloads}
					</span>
					<span>
						<Heart size={14} /> {item.likes}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default ProductsItem;
