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

export const investorNavigationItems: NavigationItemsType[] = [
    {
        title: "Home",
        href: AppConfig.routes.pages.home,
        description: "",
    },
    {
        title: "Overview",
        href: AppConfig.routes.pages.protected.investor.overview,
        description: "",
    },
    {
        title: "Investements",
        href: AppConfig.routes.pages.protected.investor.investments,
        description: "",
    }
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
        title: "Company",
        description: "Managing a small business today is already tough.",
        items: [
            {
                title: "About us",
                href: `${AppConfig.routes.pages.about}`,
            },
        ],
    },
];

