import { Check, MoveRight, Tags } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { FarmCardProps, FarmStatus, FarmType, StaffRole } from '@/types';
import { Badge } from './ui/badge';
import Image from 'next/image';
import AppConfig from '@/app.config';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { useSession } from 'next-auth/react';
import useCart from '@/hooks/useCart';


const defaultValues: FarmCardProps = {
    id: "0",
    img: "",
    cost: 35,
    location: "Tamale",
    arr: 12.56,
    season: { start: Date.now(), end: Date.now() },
    title: 'Rice Farm',
    tags: ["crop", "maize"],
    description: 'Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.',
    currency: "USD",
    status: false,
    type: FarmType.CROP,
    rosMax: 0,
    rosMin: 0
}

function FarmCard({
    id,
    img,
    title,
    description,
    currency,
    cost,
    location,
    tags,
    arr,
    season,
    status,
    type,
    rosMax,
    rosMin
}: FarmCardProps = defaultValues) {

    const { data: session } = useSession()
    const { setShowCart, addItemToCartList } = useCart()
    return (
        <Card className="w-full rounded-md z-[9] bg-opacity-75">
            <CardHeader>
                <CardTitle className='flex flex-col gap-2' >
                    <div className='absolute'>
                        {status ? <Badge >{FarmStatus.AVAILABLE}</Badge> : <Badge className="bg-yellow-500 text-yellow-900 border border-yellow-600 hover:bg-yellow-400">{FarmStatus.SOLD_OUT}</Badge>}
                    </div>
                    <Image
                        src={img || AppConfig.resource.images.defaultProfileImage}
                        alt="Preview"
                        width={250}
                        height={250}
                        className="w-full max-w-full h-auto rounded"
                    />
                    <div className="flex flex-col gap-1 ">
                        <span className="items-center font-normal">
                            {title}
                        </span>
                        <span>
                            {tags && tags.map((tag, idx) => (<Badge key={idx}>{tag}</Badge>))}
                        </span>
                    </div>
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
                    {
                        session && (session.user.role !== StaffRole.ADMIN && session.user.role !== StaffRole.STAFF) ?
                            (
                                <Button className="gap-4" disabled={!status} onClick={() => {
                                    addItemToCartList({
                                        id,
                                        img,
                                        title,
                                        description,
                                        currency,
                                        cost,
                                        location,
                                        tags,
                                        arr,
                                        season,
                                        status,
                                        type
                                    })
                                    setShowCart(true);
                                }}>
                                    Sponsor farm<MoveRight className="w-4 h-4" />
                                </Button>
                            ) :
                            (<Link href={AppConfig.routes.pages.signin}>
                                <Button variant="outline" className="gap-4">
                                    Sign in today <MoveRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            )
                    }
                    <Separator />
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
                                <p>Annual Return</p>
                                <p className="text-muted-foreground text-sm">
                                    {rosMin}% - {rosMax}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

FarmCard.defaultProps = defaultValues;

export default FarmCard