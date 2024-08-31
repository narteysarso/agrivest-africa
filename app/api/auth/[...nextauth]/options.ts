import AppConfig from '@/app.config';
import Staff from '@/database/mongoose/models/Staff';
import { investorService, userService } from '@/services';
import { AuthType } from '@/types';
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

type Staff = { email: string, role: string }
const dummyStaffs: Staff[] = [
    {
        email: "narteysarso@gmail.com",
        role: "admin"
    },
    {
        email: "narteysarso@gmail.com",
        role: "staff"
    }
]


export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Login With Email",
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "name@example.com"
                },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "******"
                },
                authType: {
                    label: "authType",
                    type: "text"
                }
            },
            async authorize(credentials, req) {
                try {
                    if (!credentials?.email || !credentials?.password || !credentials.authType) throw Error("Invalid request body");

                    const user = (credentials.authType !== AuthType.STAFF) ? await investorService.login({ ...credentials }) : await userService.loginStaff({ ...credentials });

                    if (!user) throw new Error("Invalid credentials")

                    return user;

                } catch (error) {
                    console.log(error);
                }

                return null
            },
        }),
        GoogleProvider({
            profile(profile) {

                const user = dummyStaffs.find(user => user.email === profile.email);

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
    },
    pages: {
        signIn: AppConfig.routes.pages.staffsignin
    }
}