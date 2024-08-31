import { default_literals } from './constants/literals';

export const DEFAULT_DATABASE_PROVIDER = "mongoose";
export const DEFUALT_PASSWORD_LENGTH = 6;

const AppConfig = {
    constants: {
        defaultPasswordLength: DEFUALT_PASSWORD_LENGTH,
    },
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
            staffsignin: "/staffsignin",
            protected: {
                admin: {
                    farms: "/admin/farms",
                    investors: "/admin/investors",
                    overview: "/admin",
                    staff: "/admin/staff"
                },
                investor: {
                    overview: "/investor",
                    investments: "/investor/investments"
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

