import { checkDbConnection } from "./lib/db.js";

export async function register() {
	if (process.env.NEXT_RUNTIME === "edge") return;

	try {
		await checkDbConnection();
	} catch (error) {
		console.error("❌ Failed to connect to Neon:", error);
	}
}
