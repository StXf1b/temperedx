"use client";
import { KeyRound, Mail, User } from "lucide-react";
import { FaDiscord, FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSignUp } from "@clerk/nextjs/legacy";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Signup.css";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [termsAccepted, setTermsAccepted] = useState(false);
	const { isLoaded, signUp } = useSignUp();
	const { isSignedIn } = useUser();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const router = useRouter();

	useEffect(() => {
		if (isLoaded && isSignedIn) {
			router.push("/");
		}
	}, [isLoaded, isSignedIn, router]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!isLoaded) return;

		setError("");
		// validation
		if (!username || !email || !password || !repeatPassword) {
			setError("Please fill in all fields.");
			return;
		}

		if (password !== repeatPassword) {
			setError("Passwords do not match.");
			return;
		}

		if (!termsAccepted) {
			setError("You must accept the terms.");
			return;
		}
		setLoading(true);
		try {
			// 1) Create clerk signup
			await signUp.create({
				emailAddress: email,
				password: password,
				username: username,
			});

			// 2) Send verification code
			await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

			// 3) Redirect to verify page
			router.push("/verify");
		} catch (err) {
			console.log(err);
			setError("Registration failed: " + err.message);
			setLoading(false);
		}
	};

	const handleGoogle = async () => {
		await signUp.authenticateWithRedirect({
			strategy: "oauth_google",
			redirectUrl: "/sso-callback",
			redirectUrlComplete: "/onboarding",
		});
	};

	const handleDiscord = async () => {
		await signUp.authenticateWithRedirect({
			strategy: "oauth_discord",
			redirectUrl: "/sso-callback",
			redirectUrlComplete: "/onboarding",
		});
	};

	return (
		<div className="overflow-x-hidden w-full">
			<div className="fixed inset-0 -z-20 bg-[url('/assets/squares.png')] opacity-2 dark:invert"></div>
			<div className="fixed inset-0 -z-1 bg-[url('/assets/mesh.jpg')] [background-size:110%] object-fill opacity-2"></div>
			<div className="gradient-hole-page fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>

			<div className="signup-container">
				<div className="signup-wrapper">
					<div className="signup-header">
						<img src="/assets/logo.png" alt="TemperedX Logo" />
						<h1>Create Account</h1>
						<p>Start building with TemperedX today</p>
					</div>

					<div className="signup-input-container">
						<p>Username</p>
						<div className="signup-input">
							<span>
								<User />
							</span>
							<input
								type="text"
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>

						<p className="mt-3">Email Address</p>
						<div className="signup-input">
							<span>
								<Mail />
							</span>
							<input
								type="email"
								placeholder="Email Address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<p className="mt-3">Password</p>
						<div className="signup-input">
							<span>
								<KeyRound />
							</span>
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<p className="mt-3">Repeat Password</p>
						<div className="signup-input">
							<span>
								<KeyRound />
							</span>
							<input
								type="password"
								placeholder="Repeat Password"
								value={repeatPassword}
								onChange={(e) => setRepeatPassword(e.target.value)}
							/>
						</div>
						<div className="terms-container">
							<label className="terms-checkbox">
								<input
									type="checkbox"
									checked={termsAccepted}
									onChange={(e) => setTermsAccepted(e.target.checked)}
								/>
								<span className="checkmark"></span>

								<span className="terms-text">
									I agree to the{" "}
									<Link href="/terms" className="terms-link">
										Terms of Service
									</Link>{" "}
									and{" "}
									<Link href="/privacy" className="terms-link">
										Privacy Policy
									</Link>
								</span>
							</label>
						</div>
						<div className="signup-button">
							{loading ? (
								<button disabled className="loading-button">
									Creating Account...
								</button>
							) : (
								<button onClick={handleSubmit}>Create Account</button>
							)}
						</div>
					</div>
					{error && <p className="error-message">{error}</p>}
					<div className="signup-footer">
						<span>────────── Or sign up with ──────────</span>

						<div className="social-login">
							<button className="social-button" onClick={handleGoogle}>
								<FaGoogle className="google-button" size={20} />
							</button>
							<button className="social-button" onClick={handleDiscord}>
								<FaDiscord className="discord-button" size={20} />
							</button>
						</div>

						<p className="login-redirect">
							Already have an account?
							<Link href="/login" className="login-link ml-1">
								Login here
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
