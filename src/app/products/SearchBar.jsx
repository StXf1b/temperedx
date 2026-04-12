import { Search } from "lucide-react";
import "./Products.css";

const SearchBar = () => {
	return (
		<div className="searchbar-wrapper">
			<div className="searchbar">
				<Search size={18} className="search-icon" />
				<input type="text" placeholder="Search products..." />
			</div>

			<div className="filters">
				<select>
					<option value="all">All Games</option>
					<option value="minecraft">Minecraft</option>
					<option value="rust">Rust</option>
				</select>

				<select>
					<option value="all">Most Popular</option>
					<option value="price-low">Price: Low to High</option>
					<option value="price-high">Price: High to Low</option>
					<option value="newest">Newest</option>
					<option value="just-updated">Just Updated</option>
				</select>
			</div>
		</div>
	);
};

export default SearchBar;
