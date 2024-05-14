
/**
 * An Array accessible to publics no need authentication
 * 
 * @type {string[]}
 */

export const pubLicRoutes = [
    "/"
]

/**
 * An array of routes that are used for authentication
 * 
 * @type {string[]}
 */


export const authRoutes = [
    "/auth/login",
    "/auth/register"
]

export const apiAuthPrefix = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT="/settings";