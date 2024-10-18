import React from 'react'
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import "@/styles/shape-bg.css";

function AboutUs() {
    return (
        <div className="w-full py-5 lg:py-10 relative" id="about">
            <div className="container mx-auto z-[200]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex gap-4 flex-col items-start">
                        <div>
                            <Badge>Platform</Badge>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                                Agrivest Africa : The start of something new
                            </h2>
                            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                                Welcome to the number one equity crowd-funding platform focused on Connecting agrivestors, small to medium scale farmers and commodities in Africa.
                                We are maximizing returns and promoting sustainable agricultural practices across africa. join us on our journey to a new world.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
                            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
                                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                                    100.000
                                    <span className="text-muted-foreground text-sm tracking-normal">
                                        +120.00%
                                    </span>
                                </h2>
                                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                                    Monthly active farmets
                                </p>
                            </div>
                            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
                                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                                    150
                                    <span className="text-muted-foreground text-sm tracking-normal">
                                        2%
                                    </span>
                                </h2>
                                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                                    Active users
                                </p>
                            </div>
                            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
                                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                                    GHS 400
                                    <span className="text-muted-foreground text-sm tracking-normal">
                                        +2%
                                    </span>
                                </h2>
                                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                                    Average Unit Cost
                                </p>
                            </div>
                            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
                                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                                    GHS 476.00
                                    <span className="text-muted-foreground text-sm tracking-normal">
                                        +15-23%
                                    </span>
                                </h2>
                                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                                    Avg. Annual revenue
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* backgrounds starts */}
            <div className="absolute left-[30vw] -z-[9] -bottom-6 backgroundShapes">
                <svg
                    width="500"
                    height="406"
                    viewBox="0 0 500 406"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="1.66667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 60.3333 104)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 60.3333 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 88.6667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 117.667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 74.6667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 103 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 132 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 31 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 103 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 132 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 31 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 103 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 132 1.66707)"
                        fill="white"
                    />
                </svg>
            </div>
            <div className="absolute left-[33vw] -z-[9] -bottom-20 backgroundShapes">
                <svg
                    width="500"
                    height="406"
                    viewBox="0 0 500 406"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="1.66667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 60.3333 104)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 60.3333 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 88.6667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 117.667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 74.6667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 103 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 132 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 31 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 103 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 132 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 31 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 103 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 132 1.66707)"
                        fill="white"
                    />
                </svg>
            </div>
            <div className="absolute left-[39vw] -z-[9] -bottom-40 backgroundShapes">
                <svg
                    width="500"
                    height="406"
                    viewBox="0 0 500 406"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="1.66667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 60.3333 104)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 60.3333 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 88.6667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 117.667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 74.6667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 103 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 132 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 31 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 103 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 132 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 31 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 103 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 132 1.66707)"
                        fill="white"
                    />
                </svg>
            </div>
            <div className="absolute left-[42vw] -z-[9] -bottom-60 backgroundShapes">
                <svg
                    width="500"
                    height="406"
                    viewBox="0 0 500 406"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="1.66667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 60.3333 104)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 60.3333 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 88.6667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 117.667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 74.6667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 103 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 132 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 31 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 103 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 132 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 31 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 103 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 132 1.66707)"
                        fill="white"
                    />
                </svg>
            </div>
            <div className="absolute right-60 -z-[20] -bottom-70 backgroundShapes">
                <svg
                    width="500"
                    height="406"
                    viewBox="0 0 500 406"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="1.66667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 60.3333 104)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="104"
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 60.3333 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 88.6667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 117.667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 74.6667 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 103 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 132 31.0001)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 31 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 103 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 132 16.3336)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 31 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="31"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3336)"
                        fill="white"
                    />
                    <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="60.3333"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="88.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="117.667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="74.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="103"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 103 1.66707)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="white"
                    />
                    <circle
                        cx="132"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 132 1.66707)"
                        fill="white"
                    />
                </svg>
            </div>
            {/* backgrounds starts */}
        </div>
    );
}

export default AboutUs