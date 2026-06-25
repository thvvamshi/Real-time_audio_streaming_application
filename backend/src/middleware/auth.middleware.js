import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
	try {
		const auth = await req.auth();
		if (!auth.userId) {
			return res.status(401).json({
				message: "Unauthorized",
			});
		}

		req.userId = auth.userId;
		next();
	} catch (err) {
		next(err);
	}
};

export const requireAdmin = async (req, res, next) => {
	try {
		const currentUser = await clerkClient.users.getUser(req.userId);

		const isAdmin =
			currentUser.primaryEmailAddress?.emailAddress === process.env.ADMIN_EMAIL;

		if (!isAdmin) {
			return res.status(403).json({
				message: "Admin only",
			});
		}

		next();
	} catch (err) {
		next(err);
	}
};