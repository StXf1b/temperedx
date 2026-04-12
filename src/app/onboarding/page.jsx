"use client";

import { useState, useEffect } from "react";
import "./Onboarding.css";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Onboarding = () => {
	const [username, setUsername] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const { user, isLoaded } = useUser();
	const router = useRouter();
	useEffect(() => {
		if (!isLoaded) return;

		if (user?.username) {
			router.push("/");
		}
	}, [user, isLoaded]);

	const handleSubmit = async () => {
		if (!isLoaded) return;

		if (!username || username.length < 3) {
			setError("Username must be at least 3 characters");
			return;
		}

		try {
			setLoading(true);
			setError("");

			await user.update({
				username: username,
			});

			// ✅ redirect after success
			router.push("/");
		} catch (err) {
			console.error(err);
			setError(err.errors?.[0]?.message || "Failed to set username");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="overflow-x-hidden w-full">
			{/* BACKGROUNDS (same as your other pages) */}
			<div className="fixed inset-0 -z-20 bg-[url('/assets/squares.png')] opacity-2 dark:invert"></div>
			<div className="fixed inset-0 -z-1 bg-[url('/assets/mesh.jpg')] [background-size:110%] object-fill opacity-2"></div>
			<div className="gradient-hole-page fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>

			<div className="onboarding-container">
				<div className="onboarding-wrapper">
					<div className="onboarding-header flex justify-center items-center flex-col">
						<img src="/assets/logo.png" alt="TemperedX Logo" />
						<h1>Complete Your Profile</h1>
						<p>Choose a username to get started</p>
					</div>

					<div className="onboarding-input-container">
						<p>Username</p>
						<div className="onboarding-input">
							<input
								type="text"
								placeholder="Enter your username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>

						<button
							className="onboarding-button"
							onClick={handleSubmit}
							disabled={loading}
						>
							{loading ? "Saving..." : "Continue"}
						</button>
					</div>

					<p className="onboarding-note">
						This will be your public identity on the platform.
					</p>
					{error && <p className="error-text">{error}</p>}
				</div>
			</div>
		</div>
	);
};

export default Onboarding;
