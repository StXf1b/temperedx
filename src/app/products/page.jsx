"use client";
import "./Products.css";
import ProductsHeader from "./ProductsHeader";
import SearchBar from "./SearchBar";
import ProductsItem from "./ProductsItem";
import { products } from "@/lib/products";
import Pagination from "./Pagination";
import { useState } from "react";

const Products = () => {
	// Pagination state and handler
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	const totalPages = Math.ceil(products.length / itemsPerPage);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<div>
			<div className="fixed inset-0 -z-20 bg-[url('/assets/squares.png')] opacity-2 dark:invert"></div>
			<div className="fixed inset-0 -z-1 bg-[url('/assets/mesh.jpg')] [background-size:110%] object-fill opacity-2"></div>
			<div className="gradient-hole-page fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>
			<div className="products-container">
				<ProductsHeader />
				<SearchBar />
				<div className="product-list-grid">
					{products
						.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
						.map((product) => (
							<ProductsItem key={product.id} item={product} />
						))}
				</div>
				<div className="pagination">
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default Products;
