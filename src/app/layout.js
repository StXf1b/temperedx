import { Inter, JetBrains_Mono } from "next/font/google";
import { clashDisplay } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ClerkProviderWrapper from "@/components/providers/ClerkProviderWrapper";
const inter = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "TemperedX — Build your game server website without the hassle",
	description:
		"TemperedX provides a seamless experience for creating and managing your game server website. With our intuitive interface and powerful features, you can easily set up a stunning website that showcases your game server's unique identity. Say goodbye to the complexities of web development and let TemperedX handle the technical details, so you can focus on what matters most – building an amazing gaming community.",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${jetbrainsMono.variable} ${clashDisplay.variable} h-full antialiased`}
		>
			<body className="min-h-full bg-[var(--bg)] text-[var(--text)] font-sans">
				<ClerkProviderWrapper>
					<Navbar />
					{children}
					<Footer />
				</ClerkProviderWrapper>
			</body>
		</html>
	);
}
