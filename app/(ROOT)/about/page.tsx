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
                        <div className="bg-muted rounded-md aspect-square"></div>
                    </div>
                </div>
            </div>

            <div className="w-full py-5 lg:py-10">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-4 flex-col items-start">
                           
                            <div className="flex gap-2 flex-col">
                                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                    Something new!
                                </h2>
                                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                                    Managing a small business today is already tough.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
                                
                                <div className="flex flex-col">
                                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                                    <p className="text-muted-foreground max-w-xs text-base">
                                        Our goal is to streamline SMB trade, making it easier and faster
                                        than ever.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col">
                               
                                <div className="flex flex-col">
                                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                                    <p className="text-muted-foreground max-w-xs text-base">
                                        Our goal is to streamline SMB trade, making it easier and faster
                                        than ever.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
                               
                                <div className="flex flex-col">
                                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                                    <p className="text-muted-foreground max-w-xs text-base">
                                        Our goal is to streamline SMB trade, making it easier and faster
                                        than ever.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
                                
                                <div className="flex flex-col">
                                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                                    <p className="text-muted-foreground max-w-xs text-base">
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
