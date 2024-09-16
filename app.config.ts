import { default_literals } from './constants/literals';

export const DEFAULT_DATABASE_PROVIDER = "mongoose";
export const DEFUALT_PASSWORD_LENGTH = 6;
export const MINIMUM_FARM_ARCHERAGE = 1;
export const FARM_ARCHERAGE_INCREMENTAL = 0.01;
export const MIN_FARM_NAME_LENGTH = 5;
export const MAX_FARM_DESCRIPTIION_LENGTH = 150;
export const MIN_FARM_DESCRIPTIION_LENGTH = 20;
export const MIN_NAME_LENGHT = 2;
export const MINIMUM_UNIT_COST = 1;
export const MINIMUM_FARM_UNIT = 1;
export const MINIMUM_FARM_INVESTMENT_DURATION_IN_DAYS = 1;

const AppConfig = {
    constants: {
        defaultPasswordLength: DEFUALT_PASSWORD_LENGTH,
        minimumFarmArcherage: MINIMUM_FARM_ARCHERAGE,
        minimumFarmUnits: MINIMUM_FARM_UNIT,
        farmArcherageIncremental: FARM_ARCHERAGE_INCREMENTAL,
        maxFarmDescriptionLength: MAX_FARM_DESCRIPTIION_LENGTH,
        minFarmDescriptionLength: MIN_FARM_DESCRIPTIION_LENGTH,
        minFarmNameLength: MIN_FARM_NAME_LENGTH,
        minNameLength: MIN_NAME_LENGHT,
        minimumUnitCost: MINIMUM_UNIT_COST,
        defaultFarmInvestmentMinimumDurationInDays: MINIMUM_FARM_INVESTMENT_DURATION_IN_DAYS
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

