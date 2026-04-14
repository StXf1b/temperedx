import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { sql } from "@/lib/db";

function getPrimaryEmail(data) {
	const primary =
		data.email_addresses?.find(
			(email) => email.id === data.primary_email_address_id,
		) || data.email_addresses?.[0];

	return primary?.email_address || null;
}

function getDisplayName(data, email) {
	const fullName = [data.first_name, data.last_name].filter(Boolean).join(" ");
	if (fullName) return fullName;
	if (data.username) return data.username;
	if (email) return email.split("@")[0];
	return null;
}

export async function POST(req) {
	try {
		const evt = await verifyWebhook(req);

		if (evt.type === "user.created" || evt.type === "user.updated") {
			const data = evt.data;
			const email = getPrimaryEmail(data);

			if (!email) {
				return new Response("Missing user email", { status: 400 });
			}

			const username = data.username ?? null;
			const displayName = getDisplayName(data, email);
			const avatarUrl = data.image_url ?? null;

			await sql`
				INSERT INTO app_users (
					clerk_user_id,
					email,
					username,
					display_name,
					avatar_url
				)
				VALUES (
					${data.id},
					${email},
					${username},
					${displayName},
					${avatarUrl}
				)
				ON CONFLICT (clerk_user_id)
				DO UPDATE SET
					email = EXCLUDED.email,
					username = EXCLUDED.username,
					display_name = EXCLUDED.display_name,
					avatar_url = EXCLUDED.avatar_url,
					updated_at = NOW()
			`;
		}

		return new Response("OK", { status: 200 });
	} catch (error) {
		console.error("Clerk webhook error:", error);
		return new Response("Webhook error", { status: 400 });
	}
}
