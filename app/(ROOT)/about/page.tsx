'use client'

import { useState } from "react";
import Image from "next/image";
import { Check, GripVertical } from "lucide-react";

export default function About() {


    return (
        <>
            <div className="w-full py-5 lg:py-10" style={{ "backgroundColor": "#fec921" }}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
                        <div className="flex gap-4 flex-col">

                            <div className="flex gap-4 flex-col">
                                <h2 className="text-4xl md:text-6xl max-w-lg tracking-tighter text-left font-regular">
                                    Welcome to Agrivest Africa!
                                </h2>
                                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                                    We’re more than just a platform; we’re a movement dedicated to uplifting smallholder
                                    farmers in rural Africa. By connecting farmers with the resources they need, including
                                    financial support and education on sustainable practices, we’re transforming agriculture and
                                    rural communities.
                                </p>
                                <p>Our vision : <b>empowered farmers</b>, <b>thriving communities</b>, and <b>sustainable farming for
                                    a better future</b>.</p>
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="bg-muted rounded-md aspect-square relative background-gradient-orange">
                                <Image src={"/images/holder-vegetables.png"} alt={"farmer"} fill className="object-cover" />
                            </div>
                            <div className="bg-muted rounded-md row-span-2 relative background-gradient-green">
                                <Image src={"/images/farmer4.png"} alt={"farmer"} fill className="object-cover" />
                            </div>
                            <div className="bg-muted rounded-md aspect-square relative">
                                <Image src={"/images/farmer6.jpg"} alt={"farmer"} fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-5 lg:py-10">
                <div className="container mx-auto">
                    <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
                        <div className="flex gap-10 flex-col">
                            <div className="flex gap-4 flex-col">

                                <div className="flex gap-2 flex-col">
                                    <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                                        What Sets Us Apart
                                    </h2>
                                    <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                                        Together, we can build a better future for Africa’s farmers.
                                    </p>
                                </div>
                            </div>
                            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
                                <div className="flex flex-row gap-6 items-start">
                                    <Check className="w-4 h-4 mt-2 text-primary" />
                                    <div className="flex flex-col gap-1">
                                        <p>Crowdfunding:</p>
                                        <p className="text-muted-foreground text-sm">
                                            Giving farmers access to capital through community-driven investments.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6 items-start">
                                    <Check className="w-4 h-4 mt-2 text-primary" />
                                    <div className="flex flex-col gap-1">
                                        <p>Marketplace</p>
                                        <p className="text-muted-foreground text-sm">
                                            Connecting farmers with buyers to ensure fair trade.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6 items-start">
                                    <Check className="w-4 h-4 mt-2 text-primary" />
                                    <div className="flex flex-col gap-1">
                                        <p>Sustainable Practices</p>
                                        <p className="text-muted-foreground text-sm">
                                            Teaching farmers eco-friendly methods that boost productivity
                                            and protect the environment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-square relative">
                            <Image
                                src={"https://res.cloudinary.com/dencsfc5x/image/upload/v1729681293/IMG_6653_1_u0p4lj.jpg"}
                                alt='image'
                                fill
                                className=" border-2 rounded-md drop-shadow-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-5 lg:py-10">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-4 flex-col items-start">

                            <div className="flex gap-2 flex-col">
                                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                    Starting something new!
                                </h2>
                                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                                    Join us on the journey of revolutionalizing farmer support
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-cover bg-no-repeat rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col" style={{
                                backgroundImage: "url('https://res.cloudinary.com/dencsfc5x/image/upload/v1729681272/IMG_6845_st7p0f.jpg')"
                            }}>

                                <div className="flex flex-col bg-zinc-900 p-5 bg-opacity-50 rounded-md">
                                    <h3 className="text-xl tracking-tight">Suport for all</h3>
                                    <p className="text-white max-w-xs text-base">
                                        Our goal is to streamline SMB trade, making it easier and faster
                                        than ever.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-cover bg-no-repeat aspect-square p-6 flex justify-between flex-col" style={{
                                backgroundImage: "url('https://res.cloudinary.com/dencsfc5x/image/upload/v1729681277/IMG_6706_kagp4d.jpg')"
                            }}>

                                <div className="flex flex-col bg-zinc-900 p-5 bg-opacity-50 rounded-md">
                                    <h3 className="text-xl tracking-tight">Suport for all</h3>
                                    <p className="text-white max-w-xs text-base">
                                        Our goal is to streamline SMB trade, making it easier and faster
                                        than ever.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-cover bg-no-repeat rounded-md aspect-square p-6 flex justify-between flex-col" style={{
                                backgroundImage: "url('https://res.cloudinary.com/dencsfc5x/image/upload/v1729681290/IMG_6735_e5gkml.jpg')"
                            }}>

                                <div className="flex flex-col bg-zinc-900 p-5 bg-opacity-50 rounded-md">
                                    <h3 className="text-xl tracking-tight">Suport for all</h3>
                                    <p className="text-white max-w-xs text-base">
                                        Our goal is to streamline SMB trade, making it easier and faster
                                        than ever.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-cover bg-no-repeat rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col" style={{
                                backgroundImage: "url('https://res.cloudinary.com/dencsfc5x/image/upload/v1729681288/IMG_6897_vsxj6o.jpg')"
                            }}>

                                <div className="flex flex-col bg-zinc-900 p-5 bg-opacity-50 rounded-md">
                                    <h3 className="text-xl tracking-tight">Suport for all</h3>
                                    <p className=" text-white max-w-xs text-base">
                                        Our goal is to streamline SMB trade, making it easier and faster
                                        than ever.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
