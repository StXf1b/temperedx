// src/app/products/page.jsx
import "./Products.css";
import ProductsHeader from "./ProductsHeader";
import SearchBar from "./SearchBar";
import ProductsItem from "./ProductsItem";
import Pagination from "./Pagination";
import { getProducts } from "@/lib/data/products";

export default async function ProductsPage({ searchParams }) {
	const params = await searchParams;

	const page = Number(params.page ?? 1);
	const query = params.q ?? "";
	const type = params.type ?? "all";

	const { products, totalPages, currentPage } = await getProducts({
		page,
		limit: 6,
		query,
		type,
	});

	return (
		<div>
			<div className="fixed inset-0 -z-20 bg-[url('/assets/squares.png')] opacity-2 dark:invert"></div>
			<div className="fixed inset-0 -z-1 bg-[url('/assets/mesh.jpg')] [background-size:110%] object-fill opacity-2"></div>
			<div className="gradient-hole-page fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>

			<div className="products-container">
				<ProductsHeader />
				<SearchBar initialQuery={query} initialType={type} />

				<div className="product-list-grid">
					{products.map((product) => (
						<ProductsItem key={product.id} item={product} />
					))}
				</div>

				<div className="pagination">
					<Pagination currentPage={currentPage} totalPages={totalPages} />
				</div>
			</div>
		</div>
	);
}
