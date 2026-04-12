"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";

export default function ClerkProviderWrapper({ children }) {
	return (
		<ClerkProvider
			appearance={{
				theme: dark,
			}}
		>
			{children}
		</ClerkProvider>
	);
}
