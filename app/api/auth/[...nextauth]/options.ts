import AppConfig from '@/app.config';
import Staff from '@/database/mongoose/models/Staff';
import { verfiyPassword } from '@/lib/helpers';
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
                }
            },
            async authorize(credentials, req) {

                try {
                    if (!credentials?.email || !credentials?.password) throw Error("Invalid request body");

                    const foundStaff = await Staff.findOne({ email: credentials.email });

                    if (!foundStaff) throw Error("Staff not found");

                    if (!verfiyPassword(credentials.password, foundStaff.password)) throw Error("Invalid user credentials");

                    // perform DTO on `foundStaff` before return;
                    delete foundStaff.password;

                    return foundStaff;

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
        signIn: AppConfig.routes.pages.signin
    }
}