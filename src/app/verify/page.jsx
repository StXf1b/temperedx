"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs/legacy";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Verify.css";

const VerifyEmail = () => {
	const [code, setCode] = useState(["", "", "", "", "", ""]);
	const { isLoaded, signUp, setActive } = useSignUp();
	const router = useRouter();
	const [error, setError] = useState("");

	const handleChange = (value, index) => {
		if (!/^[0-9]?$/.test(value)) return;

		const newCode = [...code];
		newCode[index] = value;
		setCode(newCode);

		// auto focus next input
		if (value && index < 5) {
			document.getElementById(`code-${index + 1}`)?.focus();
		}
	};
	async function handleVerify(e) {
		e.preventDefault();

		try {
			const completeSignUp = await signUp.attemptEmailAddressVerification({
				code: code.join(""),
			});

			// IMPORTANT: completeSignUp.createdSessionId must exist
			if (completeSignUp.status === "complete") {
				await setActive({ session: completeSignUp.createdSessionId });

				// 🚀 SUCCESS — redirect to dashboard
				router.push("/");
			} else {
				console.log("Verification not complete:", completeSignUp);
			}
		} catch (err) {
			console.error(err);
			setError("Invalid or expired verification code.");
		}
	}

	return (
		<div className="overflow-x-hidden w-full">
			{/* BACKGROUNDS (same as your other pages) */}
			<div className="fixed inset-0 -z-20 bg-[url('/assets/squares.png')] opacity-2 dark:invert"></div>
			<div className="fixed inset-0 -z-1 bg-[url('/assets/mesh.jpg')] [background-size:110%] object-fill opacity-2"></div>
			<div className="gradient-hole-page fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>

			<div className="verify-container">
				<div className="verify-wrapper">
					<div className="verify-header">
						<img src="/assets/logo.png" alt="TemperedX Logo" />
						<h1>Verify Your Email</h1>
						<p>Enter the 6-digit code sent to your email</p>
					</div>

					{/* CODE INPUT */}
					<div className="code-inputs">
						{code.map((digit, index) => (
							<input
								key={index}
								id={`code-${index}`}
								type="text"
								maxLength="1"
								value={digit}
								onChange={(e) => handleChange(e.target.value, index)}
							/>
						))}
					</div>
					<div id="clerk-captcha" />
					{/* VERIFY BUTTON */}
					<button className="verify-button" onClick={handleVerify}>
						Verify Email
					</button>

					{/* RESEND */}
					<p className="resend-text">
						Didn’t receive the code?{" "}
						<button className="resend-button">Resend</button>
					</p>

					{/* BACK */}
					<Link href="/signup" className="back-link">
						← Back to signup
					</Link>
				</div>
			</div>
		</div>
	);
};

export default VerifyEmail;
