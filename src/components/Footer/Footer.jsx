import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-cards">
				<div className="main-card">
					<img src="/assets/logo.png" alt="TemperedX Logo" />
					<p>Building the future of gaming infrastructure.</p>

					<div className="socials">
						<Link href="#" className="social-link">
							<FaDiscord size={18} />
							<span>.gg/temperedx</span>
						</Link>

						<a href="mailto:contact@temperedx.com" className="social-link">
							<IoMail size={18} />
							<span>contact@temperedx.com</span>
						</a>
					</div>
				</div>
				<div className="link-card">
					<h3>Quick Links</h3>
					<ul>
						<li>
							<Link href="/about">About Us</Link>
						</li>
						<li>
							<Link href="/products">Products</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="link-card">
					<h3>Resources</h3>
					<ul>
						<li>
							<Link href="/docs">Documentation</Link>
						</li>
						<li>
							<Link href="/support">Support</Link>
						</li>
						<li>
							<Link href="/blog">FAQ</Link>
						</li>
					</ul>
				</div>
				<div className="link-card">
					<h3>Legal</h3>
					<ul>
						<li>
							<Link href="/privacy">Privacy Policy</Link>
						</li>
						<li>
							<Link href="/terms">Terms of Service</Link>
						</li>
						<li>
							<Link href="/contact">Contact Us</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer-bottom">
				<div>
					<p>© 2026 TemperedX. All rights reserved.</p>
				</div>
				<div>
					<Link href="/privacy" className="footer-link">
						Privacy Policy
					</Link>
					<Link href="/terms" className="footer-link">
						Terms of Service
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
