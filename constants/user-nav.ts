import AppConfig from '@/app.config';
import { NavigationItemsType } from '@/types';

export const navigationItems: NavigationItemsType[] = [
    {
        title: "Home",
        href: AppConfig.routes.pages.home,
        description: "",
    },
    {
        title: "Overview",
        href: AppConfig.routes.pages.protected.admin.overview,
        description: "",
    },
    {
        title: "Investors",
        href: AppConfig.routes.pages.protected.admin.investors,
        description: "",
    },
    {
        title: "Farms",
        href: AppConfig.routes.pages.protected.admin.farms,
        description: "",
    },
    {
        title: "Staff",
        href: AppConfig.routes.pages.protected.admin.staff,
        description: "",
    },
];

export const mainNavigationItems = [
    {
        title: "Home",
        href: AppConfig.routes.pages.home,
        description: "",
    },
    {
        title: "Farms",
        href: AppConfig.routes.pages.farms,
    },
    {
        title: "Market",
        href: AppConfig.routes.pages.market,
    },
    {
        title: "Company",
        description: "Managing a small business today is already tough.",
        items: [
            {
                title: "About us",
                href: AppConfig.routes.pages.about,
            },
            {
                title: "Most Asked Questions",
                href: AppConfig.routes.pages.faq,
            },
            {
                title: "Contact us",
                href: AppConfig.routes.pages.contactus,
            },
        ],
    },
];

