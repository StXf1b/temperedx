import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
	const { userId, sessionClaims } = await auth();

	if (isAdminRoute(req)) {
		const role = sessionClaims?.role;

		if (!userId || role !== "admin") {
			return NextResponse.redirect(new URL("/", req.url));
		}
	}
});
