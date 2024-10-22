import { FarmCardProps, FarmType } from '@/types';

export const FarmTestData: FarmCardProps[] = [
    {
        id: "1",
        img: "/images/peanuts.gif",
        cost: 45,
        location: "Tamale",
        arr: 12.56,
        season: { start: Date.now(), end: Date.now() },
        title: 'Groundnut Farm',
        tags: ["crop", "groundnut"],
        description: 'Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.',
        currency: "USD",
        priority: 1,
        status: false,
        type: FarmType.CROP
    },
    {
        id: "2",
        img: "/images/beans.gif",
        cost: 105,
        location: "Tamale",
        arr: 9.56,
        season: { start: Date.now(), end: Date.now() },
        title: 'Beans Farm',
        tags: ["crop", "beans"],
        description: 'Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.',
        currency: "USD",
        priority: 1,
        status: true,
        type: FarmType.CROP
    },
    {
        id: "3",
        img: "/images/corn.gif",
        cost: 25,
        location: "Tamale",
        arr: 2.56,
        season: { start: Date.now(), end: Date.now() },
        title: 'Maize Farm',
        tags: ["crop", "maize"],
        description: 'Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.',
        currency: "USD",
        priority: 35,
        status: true,
        type: FarmType.CROP
    },
    {
        id: "4",
        img: "/images/rice.gif",
        cost: 75,
        location: "Tamale",
        arr: 11.56,
        season: { start: Date.now(), end: Date.now() },
        title: 'Rice Farm',
        tags: ["crop", "rice"],
        description: 'Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.',
        currency: "USD",
        priority: 8,
        status: true,
        type: FarmType.CROP
    },
    {
        id: "5",
        img: "/images/soya-beans.gif",
        cost: 85,
        location: "Tamale",
        arr: 10.56,
        season: { start: Date.now(), end: Date.now() },
        title: 'Soyabean Farm',
        tags: ["crop", "soyabeans"],
        description: 'Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.',
        currency: "USD",
        priority: 4,
        status: false,
        type: FarmType.CROP
    }
]