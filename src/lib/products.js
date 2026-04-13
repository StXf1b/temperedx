export const products = [
	{
		id: 1,
		title: "TemperedX Rust Website Kit",
		description:
			"A modern website kit built for Rust servers, including store integration, server stats, and a fully customisable UI.",
		thumbnail: "/assets/product2.png",
		price: 24.99,
		discountedPrice: 14.99,
		type: "rust",
		version: "1.3.2",
		publishedAt: "2026-02-10",
		updatedAt: "2026-04-02",
		rating: 4.8,
		downloads: 842,
		likes: 210,
		livePreviewUrl: "https://rust.temperedx.com",

		reviews: [
			{
				id: 1,
				user_name: "Ryan",
				rating: 5,
				comment:
					"Exactly what I needed for my Rust server. Setup was way easier than expected.",
				created_at: "2026-04-04",
			},
			{
				id: 2,
				user_name: "Connor",
				rating: 5,
				comment:
					"Design is super clean and modern. Players actually trust the store now.",
				created_at: "2026-03-29",
			},
			{
				id: 3,
				user_name: "Ethan",
				rating: 4,
				comment:
					"Really good overall, just needed a bit of tweaking for my setup.",
				created_at: "2026-03-21",
			},
			{
				id: 4,
				user_name: "Ethan",
				rating: 4,
				comment:
					"Really good overall, just needed a bit of tweaking for my setup.",
				created_at: "2026-03-21",
			},
		],

		overview_content: [
			{
				alt: "Rust website template preview",
				src: "/assets/rust-photo1.webp",
			},
		],

		changelogs: [
			{
				version: "1.3.2",
				date: "2026-04-02",
				changes: [
					{ type: "feature", text: "Added new store layout options" },
					{ type: "feature", text: "Added Tebex integration support" },
					{ type: "feature", text: "Added Tebex integration support" },
					{ type: "feature", text: "Added Tebex integration support" },
					{ type: "feature", text: "Added Tebex integration support" },
					{ type: "improvement", text: "Improved mobile navigation layout" },
					{ type: "improvement", text: "Improved mobile navigation layout" },
					{ type: "improvement", text: "Improved mobile navigation layout" },
					{ type: "improvement", text: "Improved mobile navigation layout" },
					{ type: "fix", text: "Fixed checkout button alignment issue" },
					{ type: "fix", text: "Fixed checkout button alignment issue" },
				],
			},
			{
				version: "1.2.0",
				date: "2026-03-18",
				changes: [
					{ type: "feature", text: "Added Tebex integration support" },
					{ type: "improvement", text: "Optimised page load performance" },
				],
			},
		],
	},

	{
		id: 2,
		title: "TemperedX Minecraft Website Kit",
		description:
			"A complete website solution for Minecraft servers with store, player stats, and a modern UI.",
		thumbnail: "/assets/product1.png",
		price: 19.99,
		type: "minecraft",
		version: "1.5.0",
		publishedAt: "2026-01-20",
		updatedAt: "2026-04-05",
		rating: 4.9,
		downloads: 1520,
		likes: 430,
		livePreviewUrl: "https://minecraft.temperedx.com",
		reviews: [
			{
				id: 1,
				user_name: "Liam",
				rating: 5,
				comment:
					"Best website template I’ve used. Looks super professional out of the box.",
				created_at: "2026-04-05",
			},
			{
				id: 2,
				user_name: "Noah",
				rating: 5,
				comment:
					"Players actually started buying more after I switched to this.",
				created_at: "2026-04-01",
			},
			{
				id: 3,
				user_name: "Oliver",
				rating: 4,
				comment: "Very solid template, documentation could be slightly better.",
				created_at: "2026-03-25",
			},
		],

		overview_content: [
			{
				alt: "Rust website template preview",
				src: "/assets/product2.png",
			},
			{
				alt: "Rust website template preview",
				src: "/assets/product2.png",
			},
			{
				alt: "split",
				alt: "Optimised for Rust servers",
				src: "/assets/product2.png",
			},
			{
				alt: "split",
				src: "/assets/product2.png",
			},
		],

		changelogs: [
			{
				version: "1.5.0",
				date: "2026-04-05",
				changes: [
					{ type: "feature", text: "Added player stats API integration" },
					{ type: "improvement", text: "Improved homepage animations" },
				],
			},
			{
				version: "1.4.0",
				date: "2026-03-22",
				changes: [
					{ type: "feature", text: "Added new store layout options" },
					{ type: "fix", text: "Fixed mobile navbar bug" },
				],
			},
		],
	},

	{
		id: 3,
		title: "TemperedX Minecraft Lite",
		description:
			"A lightweight version of the Minecraft website kit, perfect for smaller servers.",
		thumbnail: "/assets/product1.png",
		price: 9.99,
		type: "minecraft",
		version: "1.1.0",
		publishedAt: "2026-03-01",
		updatedAt: "2026-03-28",
		rating: 4.4,
		downloads: 620,
		likes: 120,
		livePreviewUrl: "https://minecraft-lite.temperedx.com",
		reviews: [
			{
				id: 1,
				user_name: "Daniel",
				rating: 4,
				comment:
					"Good for the price, does everything I need for a small server.",
				created_at: "2026-03-30",
			},
		],

		overview_content: [
			{
				alt: "Rust website template preview",
				src: "/assets/product2.png",
			},
			{
				alt: "Rust website template preview",
				src: "/assets/product2.png",
			},
			{
				alt: "split",
				alt: "Optimised for Rust servers",
				src: "/assets/product2.png",
			},
			{
				alt: "split",
				src: "/assets/product2.png",
			},
		],

		changelogs: [
			{
				version: "1.1.0",
				date: "2026-03-28",
				changes: [{ type: "improvement", text: "Improved loading speed" }],
			},
		],
	},

	{
		id: 4,
		title: "TemperedX Rust Pro (Coming Soon)",
		description:
			"An advanced Rust website kit with deeper integrations and premium features.",
		thumbnail: "/assets/product2.png",
		price: 29.99,
		type: "rust",
		version: "0.0.0",
		publishedAt: "2026-04-10",
		updatedAt: "2026-04-10",
		livePreviewUrl: "https://rust-pro.temperedx.com",
		rating: 0,
		downloads: 0,
		likes: 0,
		reviews: [],
		overview_content: [],
		changelogs: [],
	},
];
