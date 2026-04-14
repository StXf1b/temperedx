"use client";
import { Search } from "lucide-react";
import "./Products.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBar = ({ initialQuery = "", initialType = "all" }) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const updateParam = (key, value) => {
		const params = new URLSearchParams(searchParams.toString());

		if (!value || value === "all") {
			params.delete(key);
		} else {
			params.set(key, value);
		}

		params.set("page", "1");
		router.replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="searchbar-wrapper">
			<div className="searchbar">
				<Search size={18} className="search-icon" />
				<input
					type="text"
					placeholder="Search products..."
					defaultValue={initialQuery}
					onChange={(e) => updateParam("q", e.target.value)}
				/>
			</div>

			<div className="filters">
				<select
					defaultValue={initialType}
					onChange={(e) => updateParam("type", e.target.value)}
					className="w-40"
				>
					<option value="all">All Games</option>
					<option value="minecraft">Minecraft</option>
					<option value="rust">Rust</option>
				</select>

				{/* <select>
					<option value="all">Most Popular</option>
					<option value="price-low">Price: Low to High</option>
					<option value="price-high">Price: High to Low</option>
					<option value="newest">Newest</option>
					<option value="just-updated">Just Updated</option>
				</select> */}
			</div>
		</div>
	);
};

export default SearchBar;
