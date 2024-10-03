import { Check, MoveRight, Tags } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { StaffRole } from '@/types';
import { Badge } from './ui/badge';
import Image from 'next/image';

interface FarmCardProps {
    arr?: number,
    location?: string,
    currency?: string,
    title?: string,
    description?: string,
    cost?: number,
    tags?: string[],
    season?: { start: number, end: number }
}

const defaultValues: FarmCardProps = {
    cost: 35,
    location: "Tamale",
    arr: 12.56,
    season: { start: Date.now(), end: Date.now() },
    title: 'Rice Farm',
    tags: ["crop", "maize"],
    description: 'Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.',
    currency: "USD"
}


async function FarmCard({
    title,
    description,
    currency,
    cost,
    location,
    tags,
    arr,
    season
}: FarmCardProps = defaultValues) {

    const session = await getServerSession(authOptions);

    return (
        <Card className="w-full rounded-md z-[9] bg-opacity-75">
            <CardHeader>
                <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal">
                        {title}
                    </span>
                    <span>
                        {tags && tags.map((tag, idx) => (<Badge key={idx}>{tag}</Badge>))}
                    </span>
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                    <p className="flex flex-row  items-center gap-2 text-xl">
                        <span className="text-4xl">{currency} {cost}</span>
                        <span className="text-sm text-muted-foreground">
                            {" "}
                            / Unit
                        </span>
                    </p>
                    <div className="flex flex-col gap-4 justify-start">
                        <div className="flex flex-row gap-4">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col">
                                <p>Farming Season:</p>
                                <p className="text-muted-foreground text-sm">
                                    {new Date(season?.start!).toLocaleDateString()} - {new Date(season?.start!).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col">
                                <p>Location</p>
                                <p className="text-muted-foreground text-sm">
                                    {location}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col">
                                <p>Average Annual Return</p>
                                <p className="text-muted-foreground text-sm">
                                    {arr} %
                                </p>
                            </div>
                        </div>
                    </div>
                    {
                        session && (session.user.role !== StaffRole.ADMIN && session.user.role !== StaffRole.STAFF) ?
                            (<Button className="gap-4">
                                Sponsor farm<MoveRight className="w-4 h-4" />
                            </Button>) :
                            (<Button variant="outline" className="gap-4">
                                Sign up today <MoveRight className="w-4 h-4" />
                            </Button>)
                    }
                </div>
            </CardContent>
        </Card>
    )
}

FarmCard.defaultProps = defaultValues;

export default FarmCard