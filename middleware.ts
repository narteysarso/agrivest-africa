import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

// handle with configuration files
const RolePaths: { [key: string]: string[] } = {
    "admin": ["/admin"],
    "user": ["/user"]
}

const verifyRolePath = (role: string, path: string): boolean => {

    const rolePaths = RolePaths[role];
    if (!rolePaths) return false;

    return path.startsWith(rolePaths[0]);
}


export default withAuth(
    function middleware(req) {

        console.log(req.nextauth.token);

        if (!verifyRolePath(req.nextauth.token?.role as string, req.nextUrl.pathname)) {
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
        "/admin",
        "/user"
    ]
}