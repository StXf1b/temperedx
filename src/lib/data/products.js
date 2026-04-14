// src/lib/data/products.js
import { sql } from "@/lib/db";

function formatDate(value) {
	if (!value) return null;
	return new Date(value).toISOString().slice(0, 10);
}

function mapProductCard(row) {
	return {
		id: row.id,
		slug: row.slug,
		title: row.title,
		description: row.description,
		thumbnail: row.thumbnail_url,
		price: Number(row.base_price),
		discountedPrice:
			row.discounted_price === null ? null : Number(row.discounted_price),
		type: row.type,
		version: row.current_version,
		publishedAt: formatDate(row.published_at),
		updatedAt: formatDate(row.updated_at),
		rating: Number(row.rating_avg),
		downloads: row.downloads_count,
		likes: row.likes_count,
		livePreviewUrl: row.live_preview_url,
	};
}

export async function getProducts({
	page = 1,
	limit = 6,
	query = "",
	type = "all",
}) {
	const safePage = Math.max(1, Number(page) || 1);
	const safeLimit = Math.max(1, Number(limit) || 6);
	const offset = (safePage - 1) * safeLimit;

	const trimmedQuery = query.trim();
	const search = `%${trimmedQuery}%`;

	const rows = await sql`
		SELECT
			id,
			slug,
			title,
			description,
			thumbnail_url,
			type,
			base_price,
			discounted_price,
			current_version,
			published_at,
			updated_at,
			rating_avg,
			downloads_count,
			likes_count,
			live_preview_url
		FROM products
		WHERE is_published = true
		  AND (
		    ${trimmedQuery} = ''
		    OR title ILIKE ${search}
		    OR description ILIKE ${search}
		  )
		  AND (
		    ${type} = 'all'
		    OR type::text = ${type}
		  )
		ORDER BY published_at DESC NULLS LAST, created_at DESC
		LIMIT ${safeLimit}
		OFFSET ${offset}
	`;

	const countRows = await sql`
		SELECT COUNT(*)::int AS count
		FROM products
		WHERE is_published = true
		  AND (
		    ${trimmedQuery} = ''
		    OR title ILIKE ${search}
		    OR description ILIKE ${search}
		  )
		  AND (
		    ${type} = 'all'
		    OR type::text = ${type}
		  )
	`;

	const totalCount = Number(countRows[0]?.count ?? 0);

	return {
		products: rows.map(mapProductCard),
		totalCount,
		totalPages: Math.max(1, Math.ceil(totalCount / safeLimit)),
		currentPage: safePage,
	};
}

export async function getProductBySlug(slug) {
	const productRows = await sql`
		SELECT
			id,
			slug,
			title,
			description,
			thumbnail_url,
			type,
			base_price,
			discounted_price,
			current_version,
			published_at,
			updated_at,
			rating_avg,
			rating_count,
			downloads_count,
			likes_count,
			live_preview_url
		FROM products
		WHERE slug = ${slug}
		  AND is_published = true
		LIMIT 1
	`;

	const product = productRows[0];
	if (!product) return null;

	const [blocks, reviews, releases, changes] = await Promise.all([
		sql`
			SELECT id, block_type, title, content, order_index
			FROM product_content_blocks
			WHERE product_id = ${product.id}
			ORDER BY order_index ASC, created_at ASC
		`,
		sql`
			SELECT id, author_name, rating, comment, created_at
			FROM product_reviews
			WHERE product_id = ${product.id}
			  AND status = 'published'
			ORDER BY created_at DESC
		`,
		sql`
			SELECT id, version, release_date
			FROM product_releases
			WHERE product_id = ${product.id}
			ORDER BY release_date DESC
		`,
		sql`
			SELECT
				c.id,
				c.release_id,
				c.change_type,
				c.description,
				c.order_index
			FROM product_release_changes c
			JOIN product_releases r ON r.id = c.release_id
			WHERE r.product_id = ${product.id}
			ORDER BY r.release_date DESC, c.order_index ASC
		`,
	]);

	const changesByRelease = changes.reduce((acc, item) => {
		if (!acc[item.release_id]) acc[item.release_id] = [];
		acc[item.release_id].push({
			type: item.change_type,
			text: item.description,
		});
		return acc;
	}, {});

	const overviewContent = blocks.flatMap((block) => {
		if (block.block_type === "image") {
			return [block.content];
		}

		if (
			block.block_type === "gallery" &&
			Array.isArray(block.content?.images)
		) {
			return block.content.images;
		}

		return [];
	});

	const changelogs = releases.map((release) => ({
		version: release.version,
		date: formatDate(release.release_date),
		changes: changesByRelease[release.id] ?? [],
	}));

	return {
		id: product.id,
		slug: product.slug,
		title: product.title,
		description: product.description,
		thumbnail: product.thumbnail_url,
		price: Number(product.base_price),
		discountedPrice:
			product.discounted_price === null
				? null
				: Number(product.discounted_price),
		type: product.type,
		version: product.current_version,
		publishedAt: formatDate(product.published_at),
		updatedAt: formatDate(product.updated_at),
		rating: Number(product.rating_avg),
		downloads: product.downloads_count,
		likes: product.likes_count,
		livePreviewUrl: product.live_preview_url,
		reviews: reviews.map((review) => ({
			id: review.id,
			user_name: review.author_name,
			rating: review.rating,
			comment: review.comment,
			created_at: formatDate(review.created_at),
		})),
		overview_content: overviewContent,
		changelogs,
		content_blocks: blocks, // useful later if you want richer overview rendering
	};
}
