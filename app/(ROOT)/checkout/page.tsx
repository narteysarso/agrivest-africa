import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

function Checkout() {
    const { farmId } = useParams();

    useEffect(() => {

        (async () => {

        })()
    }, [farmId]);

    return (

        <div className="w-full py-5 lg:py-10 relative">
            <div className="container mx-auto">
                <div className="flex text-center justify-center items-center gap-4 flex-col z-[9]">

                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                            Check out
                        </h2>
                        {/* <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Managing a small farm today is already tough. <br /> <span> Let&apos;s make it easy</span>
            </p> */}
                    </div>


                </div>
            </div>

            {/* backgrounds starts */}
            <div className="backgroundShapes z-[-200]">
                <span className="absolute left-0 top-0">
                    <svg
                        width="495"
                        height="470"
                        viewBox="0 0 495 470"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="55"
                            cy="442"
                            r="138"
                            stroke="white"
                            strokeOpacity="0.04"
                            strokeWidth="50"
                        />
                        <circle
                            cx="446"
                            r="39"
                            stroke="white"
                            strokeOpacity="0.04"
                            strokeWidth="20"
                        />
                        <path
                            d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                            stroke="white"
                            strokeOpacity="0.08"
                            strokeWidth="12"
                        />
                    </svg>
                </span>
                <span className="absolute bottom-0 right-0">
                    <svg
                        width="493"
                        height="470"
                        viewBox="0 0 493 470"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="462"
                            cy="5"
                            r="138"
                            stroke="white"
                            strokeOpacity="0.04"
                            strokeWidth="50"
                        />
                        <circle
                            cx="49"
                            cy="470"
                            r="39"
                            stroke="white"
                            strokeOpacity="0.04"
                            strokeWidth="20"
                        />
                        <path
                            d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                            stroke="white"
                            strokeOpacity="0.06"
                            strokeWidth="13"
                        />
                    </svg>
                </span>
            </div>
            <div className="absolute -left-9 bottom-0 z-[-200] backgroundShapes">
                <svg
                    width="134"
                    height="106"
                    viewBox="0 0 134 106"
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
            <div className="absolute -right-6 -top-6 z-[-200] backgroundShapes">
                <svg
                    width="134"
                    height="106"
                    viewBox="0 0 134 106"
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

    )
}

export default Checkout