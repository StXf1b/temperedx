"use client";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
	if (totalPages <= 1) return null;

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<nav className="pagination-wrapper" aria-label="Pagination Navigation">
			<button
				className="pagination-btn"
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				←
			</button>

			{pages.map((page) => (
				<button
					key={page}
					className={`pagination-btn ${page === currentPage ? "active" : ""}`}
					onClick={() => onPageChange(page)}
					aria-current={page === currentPage ? "page" : undefined}
				>
					{page}
				</button>
			))}

			<button
				className="pagination-btn"
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				→
			</button>
		</nav>
	);
}
