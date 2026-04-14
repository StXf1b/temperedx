// src/app/products/[slug]/page.jsx
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/data/products";
import ProductPageClient from "./ProductPageClient";
import "./Product.css";

export default async function Page({ params }) {
	const { id } = await params;
	const product = await getProductBySlug(id);

	if (!product) {
		notFound();
	}

	return <ProductPageClient product={product} />;
}
