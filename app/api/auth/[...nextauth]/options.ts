import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { pages } from "next/dist/build/templates/app-page";



export const authOptions : AuthOptions = {
    providers: [
        Credentials({
            name: "credentials",
            credentials: {},
            async authorize(credentials){
                const user = {
                    id: "1"
                }

                return user;
            },
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }
}