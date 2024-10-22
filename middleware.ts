import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import AppConfig from './app.config';

// handle with configuration files
const RolePaths: { [key: string]: string[] } = {
    "admin": [
        AppConfig.routes.pages.protected.admin.overview,
        AppConfig.routes.pages.protected.admin.farms,
        AppConfig.routes.pages.protected.admin.investors,
        AppConfig.routes.pages.protected.admin.staff,
    ],
    "staff": ["/admin"],
    "investor": [
        AppConfig.routes.pages.protected.investor.overview,
        AppConfig.routes.pages.protected.investor.investments,
        AppConfig.routes.pages.protected.investor.checkout
    ]
}


const verifyRolePath = (role: string, path: string): boolean => {

    const rolePaths = RolePaths[role];
    if (!rolePaths) return false;

    return !!rolePaths.find(rolePath => rolePath === path);
}

const RolePermissions = {
    [AppConfig.routes.pages.protected.admin.overview]: { view: true, modify: true },
    [AppConfig.routes.pages.protected.admin.farms]: { view: true, modify: true },
    [AppConfig.routes.pages.protected.admin.investors]: { view: true, modify: true },
    [AppConfig.routes.pages.protected.admin.staff]: { view: false, modify: false }
}

const verifyPermissionPath = (path: string, permissions: { [key: string]: { view: boolean, modify: boolean } } = RolePermissions): boolean => {
    return permissions[path].view;
}

export default withAuth(
    function middleware(req) {

        if (req.nextauth.token?.role === "staff" && !verifyPermissionPath(req.nextUrl.pathname)) {
            return NextResponse.rewrite(new URL("/Denied", req.url));
        } else if (!verifyRolePath(req.nextauth.token?.role as string, req.nextUrl.pathname)) {
            return NextResponse.rewrite(new URL("/Denied", req.url));
        }

    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        }
    }
)

export const config = {
    matcher: [
        "/admin/:path*",
        "/user",
        "/investor/:path*",
        "/checkout/:path*"
    ]
}