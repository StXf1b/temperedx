"use client";
import { KeyRound, Mail } from "lucide-react";
import { FaDiscord, FaGoogle } from "react-icons/fa";
import { useSignIn } from "@clerk/nextjs/legacy";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./Login.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const { signIn, isLoaded, setActive } = useSignIn();
	const { isSignedIn } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (isLoaded && isSignedIn) {
			router.push("/");
		}
	}, [isLoaded, isSignedIn, router]);

	const handleSignIn = async () => {
		if (!isLoaded) return;
		setError("");
		setLoading(true);
		try {
			const result = await signIn.create({
				identifier: email,
				password,
			});

			if (result.status === "complete") {
				await setActive({ session: result.createdSessionId });
				router.push("/");
			} else {
				console.log(result);
			}
		} catch (err) {
			console.log(err);
			setError("Invalid email or password.");
			setLoading(false);
		}
	};

	async function handleOAuth(provider) {
		if (!isLoaded) return;

		try {
			await signIn.authenticateWithRedirect({
				strategy: provider,
				redirectUrl: "/sso-callback",
				redirectUrlComplete: "/",
			});
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="overflow-x-hidden w-full">
			<div className="fixed inset-0 -z-20 bg-[url('/assets/squares.png')] opacity-2 dark:invert"></div>
			<div className="fixed inset-0 -z-1 bg-[url('/assets/mesh.jpg')] [background-size:110%] object-fill opacity-2"></div>
			<div className="gradient-hole-page fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>

			<div className="login-container">
				<div className="login-wrapper">
					<div className="login-header">
						<img src="/assets/logo.png" alt="TemperedX Logo" />
						<h1>Welcome Back</h1>
						<p>Please sign in to your account using your credentials</p>
					</div>
					<div className="login-input-container">
						<p>Email Address</p>
						<div className="login-input">
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
						<div className="login-input">
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
						<div className="forgot-password-container">
							<Link href="#" className="forgot-password">
								Forgot Password?
							</Link>
						</div>
						<div className="login-button">
							<button onClick={handleSignIn} disabled={loading}>
								{loading ? "Signing in..." : "Sign In"}
							</button>
						</div>
					</div>
					<div className="login-footer">
						<span>
							----------------------- Or sign in with ------------------------
						</span>
						<div className="social-login">
							<button
								className="social-button"
								onClick={() => handleOAuth("oauth_google")}
							>
								<FaGoogle className="google-button" size={20} />
							</button>
							<button
								className="social-button"
								onClick={() => handleOAuth("oauth_discord")}
							>
								<FaDiscord className="discord-button" size={20} />
							</button>
						</div>
						<p className="create-account">
							Don&apos;t have an account?
							<Link href="/signup" className="register-link ml-1">
								Signup here
							</Link>
						</p>
					</div>
					{error && <p className="error-message">{error}</p>}
				</div>
			</div>
		</div>
	);
};

export default Login;
