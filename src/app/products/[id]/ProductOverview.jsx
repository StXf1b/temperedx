"use client";

import "./ProductOverview.css";

const ProductOverview = ({ product }) => {
	return (
		<div className="overview">
			{product.overview_content?.map((content, i) => (
				<img key={i} src={content.src} alt={content.alt} />
			))}
		</div>
	);
};

export default ProductOverview;
