import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import Credentials from 'next-auth/providers/credentials'
import { AuthType } from '.'

declare module "next-auth" {
    /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
    interface Session {
        user: {
            /** The user's role. */
            role: string
            fullname: string
            firstname: string
            lastname: string
        } & DefaultSession["user"]
    }

    interface User extends DefaultUser {
        fullname: string
        firstname: string
        lastname: string
        role: string
    }

    interface Credentials {
        email: string,
        password: string,
        authType: AuthType
    }
}