import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
	throw new Error("Missing DATABASE_URL in .env.local");
}

export const sql = neon(process.env.DATABASE_URL);

export async function checkDbConnection() {
	const result = await sql`
		SELECT current_database() AS db, NOW() AS connected_at
	`;

	console.log(
		`✅ Neon connected successfully to "${result[0].db}" at ${result[0].connected_at}`,
	);

	return result[0];
}
