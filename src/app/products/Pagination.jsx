"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ currentPage, totalPages }) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const goToPage = (page) => {
		const nextPage = Math.max(1, Math.min(totalPages, page));
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", String(nextPage));
		router.push(`${pathname}?${params.toString()}`);
	};

	if (totalPages <= 1) return null;

	return (
		<nav className="pagination-wrapper" aria-label="Pagination Navigation">
			<button
				className="pagination-btn"
				disabled={currentPage === 1}
				onClick={() => goToPage(currentPage - 1)}
			>
				←
			</button>

			{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
				<button
					key={page}
					onClick={() => goToPage(page)}
					className={
						page === currentPage
							? "pagination-btn active-page"
							: "pagination-btn"
					}
				>
					{page}
				</button>
			))}

			<button
				className="pagination-btn"
				onClick={() => goToPage(currentPage + 1)}
				disabled={currentPage >= totalPages}
			>
				→
			</button>
		</nav>
	);
}
