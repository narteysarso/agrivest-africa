import { default_literals } from './constants/literals';

export const DEFAULT_DATABASE_PROVIDER = "mongoose";

const AppConfig = {
    resource: {
        images: {
            defaultProfileImage: "/placeholder.svg",
        }
    },
    routes: {
        api: {
            staff: '/api/staff',
            investor: '/api/investor'
        },
        pages: {
            home: '/',
            farms: "/farms",
            faq: "/faq",
            contactus: '/contactus',
            market: "/market",
            privacy: "/privacy",
            termsandservices: "/termsandservices",
            about: "/about",
            signup: "/signup",
            signin: "/signin",
            protected: {
                admin: {
                    farms: "/admin/farms",
                    investors: "/admin/investors",
                    overview: "/admin",
                    staff: "/admin/staff"
                },
                investor: {
                    overview: "/investor",
                    farms: "/investor/farms"
                }
            }
        }
    },
    database: {
        providers: {
            mongoose: {
                name: "mongoose",
                host: process.env.MONGODB_HOST,
                password: process.env.MONGODB_PASSWORD,
                database: process.env.MONGODB_DBNAME,
                uri: process.env.MONGODB_URI
            }
        },
        defaultProvider: DEFAULT_DATABASE_PROVIDER
    },
    literals: default_literals
}

export default AppConfig;

