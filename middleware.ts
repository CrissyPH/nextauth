import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, pubLicRoutes } from "@/route";



const { auth } = NextAuth(authConfig);

//@ts-ignore
export default auth((req) => {

    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix)

    const isPublicRoute = pubLicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoutes) {
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login", nextUrl))
    }
    return null;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};