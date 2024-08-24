import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { pages } from "next/dist/build/templates/app-page";

type User = { email: string, role: string }
const dummyUsers: User[] = [
    {
        email: "narteysarso@gmail.com",
        role: "admin"
    },
    {
        email: "narteysarso@gmail.com",
        role: "user"
    }
]


export const options: AuthOptions = {
    providers: [
        GoogleProvider({
            profile(profile) {
                console.log("Profile of google:", profile);

                const user = dummyUsers.find(user => user.email === profile.email);

                if (!user) return profile;

                return {
                    ...profile,
                    id: "",
                    role: user.role
                }
            },
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!

        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role

            return token;
        },
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role as string;
            return session;
        }
    }
}