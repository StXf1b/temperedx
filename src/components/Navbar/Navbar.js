"use client";

import { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [atTop, setAtTop] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(true); // Placeholder for auth state

	useEffect(() => {
		const handleScroll = () => {
			setAtTop(window.scrollY < 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			data-at-top={atTop}
			className="group fixed top-0 w-full z-50 flex justify-center"
		>
			{/* NAVBAR */}
			<nav className=" flex h-16 w-full max-w-5xl items-center justify-between px-4 md:mt-4 lg:mt-4 md:px-8 transition-all duration-200 ease-in border-white/10 md:rounded-full bg-transparent group-data-[at-top=false]:bg-[#0B0F1A]/80 group-data-[at-top=false]:backdrop-blur-xl group-data-[at-top=false]:border group-data-[at-top=false]:border-white/10 group-data-[at-top=false]:shadow-md hover:group-data-[at-top=false]:shadow-lg">
				{/* LEFT */}
				<div className="flex items-center gap-3">
					<button
						className="md:hidden cursor-pointer"
						onClick={() => setOpen(true)}
					>
						<Menu size={24} />
					</button>

					<Link href="/">
						<img src="/assets/logo.png" alt="logo" width={170} height={100} />
					</Link>
				</div>

				{/* CENTER LINKS */}
				<div className="hidden md:flex items-center gap-5 text-md font-medium text-white/80">
					<Link
						href="#"
						className="hover:text-white hover:bg-[#454545]/21 rounded-lg px-3 py-2 transition"
					>
						Home
					</Link>
					<Link
						href="#"
						className="hover:text-white hover:bg-[#454545]/21 rounded-lg px-3 py-2 transition"
					>
						About
					</Link>
					<Link
						href="#"
						className="hover:text-white hover:bg-[#454545]/21 rounded-lg px-3 py-2 transition"
					>
						Products
					</Link>
					<Link
						href="#"
						className="hover:text-white hover:bg-[#454545]/21 rounded-lg px-4 py-2 transition"
					>
						Contact
					</Link>
				</div>

				{/* RIGHT BUTTON */}
				{isLoggedIn ? (
					<div className="flex items-center justify-center">
						<div>
							<p className="text-white/80 mr-3">StXfTb</p>
						</div>
						<div>
							<img
								src="/assets/avatar.png"
								alt="User Avatar"
								className="h-10 w-10 rounded-full cursor-pointer"
							/>
						</div>
					</div>
				) : (
					<button className="flex cursor-pointer items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md hover:bg-white/20 transition">
						<LogIn size={16} />
						Login
					</button>
				)}
			</nav>

			{/* SIDEBAR */}
			<div
				className={`fixed top-0 left-0 h-full w-72 bg-[#0B0F1A] z-50 transform transition-transform duration-300 ${
					open ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="flex flex-col h-full p-6">
					{/* TOP */}
					<div className="flex items-center justify-between mb-5">
						<Link href="/">
							<img src="/assets/logo.png" alt="logo" width={170} height={100} />
						</Link>
						<button className="cursor-pointer" onClick={() => setOpen(false)}>
							<X size={22} />
						</button>
					</div>

					{/* LINKS */}
					<div className="flex flex-col text-lg">
						<Link
							href="#"
							className="hover:text-white hover:bg-[#454545]/21 rounded-lg px-2 py-2 transition"
							onClick={() => setOpen(false)}
						>
							Home
						</Link>
						<Link
							href="#"
							className="hover:text-white hover:bg-[#454545]/21 rounded-lg px-2 py-2 transition"
							onClick={() => setOpen(false)}
						>
							About
						</Link>
						<Link
							href="#"
							className="hover:text-white hover:bg-[#454545]/21 rounded-lg px-2 py-2 transition"
							onClick={() => setOpen(false)}
						>
							Products
						</Link>
						<Link
							href="#"
							className="hover:text-white hover:bg-[#454545]/21 rounded-lg px-2 py-2 transition"
							onClick={() => setOpen(false)}
						>
							Contact
						</Link>
					</div>

					{/* FOOTER */}
					<div className="mt-auto text-xs text-white/50">
						© 2026 TemperedX. All rights reserved.
					</div>
				</div>
			</div>

			{/* OVERLAY */}
			{open && (
				<div
					className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
					onClick={() => setOpen(false)}
				/>
			)}
		</div>
	);
}
