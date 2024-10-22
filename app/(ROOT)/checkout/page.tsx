'use client'

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Check, Minus, Plus } from 'lucide-react';
import { FarmCardProps, FarmStatus, FarmType } from '@/types';
import AppConfig from '@/app.config';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PaymentMethod } from '@/components/payment-card';
import { getFarmById } from '@/lib/utils';

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
    rosMax: 15,
    rosMin: 10

}

function Checkout() {
    const searchParams = useSearchParams()
    const [farm, setFarm] = useState(defaultValues);
    const [isLoading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(farm.cost);
    const [harvestType, setHarvestType] = useState("");
    const [email, setEmail] = useState("");
    const [termChecked, setTermsChecked] = useState<boolean>(false);
    const [errors, setErrors] = useState<string[]>([""]);

    const increaseQuantity = () => {
        const newQty = Math.max(1, quantity + 1);
        changeQuantity(newQty)
    }

    const decreaseQuantity = () => {
        const newQty = Math.max(1, quantity - 1);
        changeQuantity(newQty);
    }

    const changeQuantity = (newQuantity: number) => {
        const newTotal = newQuantity * (farm.cost || 0);
        setQuantity(newQuantity);
        setTotal(newTotal)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10)
        if (!isNaN(value) && value >= 0) {
            setQuantity(value)
        }
    }

    const handleHarvestChange = (value: string) => {
        setHarvestType(prev => value);
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(prev => event.target.value);
    }

    const handleTermsCheck = (event: any) => {
        setTermsChecked(prev => !prev);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const allFormData = ({
            ...farm,
            quantity,
            total,
            harvestType,
            email,
            termChecked,
        })

        //TODO: complete payment
    }

    useEffect(() => {

        (async () => {
            setErrors([]);
            const farmId = searchParams.get('farmId')
            if (!farmId) return;

            setLoading(true);
            try {
                const farm = await getFarmById(farmId);
                if (!farm) throw new Error("farm not found");
                setFarm(farm);
                setTotal(farm.cost)
            } catch (error: any) {
                setErrors(prev => [...prev, error.message])
            } finally {
                setLoading(false);
            }

        })()
    }, []);

    return (

        <div className="w-full py-5 lg:py-10">
            <div className="container mx-auto">
                <div className="flex text-center justify-center items-center gap-4 flex-col z-[9]">
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                            Checkout
                        </h2>
                        <p className="text-sm leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                            Fill in the details and complete your transaction
                        </p>
                    </div>
                </div>
                <div className="grid container py-8 grid-cols-1 gap-8 lg:grid-cols-2">

                    <div>
                        <Card className="w-full rounded-md z-[9] bg-opacity-75">
                            <CardHeader>
                                <CardTitle className='flex flex-col gap-2' >
                                    <Image
                                        src={farm?.img || AppConfig.resource.images.defaultProfileImage}
                                        alt="Preview"
                                        width={250}
                                        height={250}
                                        className="w-full max-w-full h-auto rounded"
                                    />
                                    <div className="flex flex-col gap-1 ">
                                        <span className="items-center font-normal">
                                            {farm?.title}
                                        </span>
                                        <span>
                                            {farm?.tags && farm?.tags.map((tag, idx) => (<Badge key={idx}>{tag}</Badge>))}
                                        </span>
                                    </div>
                                </CardTitle>
                                <CardDescription>
                                    {farm?.description}
                                </CardDescription>
                            </CardHeader>

                        </Card>
                    </div>
                    <div>
                        <Card className="">
                            <CardHeader>
                                <CardTitle className="text-2xl">Farm Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="grid gap-4" onSubmit={handleSubmit}>
                                    <div className="grid gap-2">
                                        <Label htmlFor="farmName">Preferred Farm name</Label>
                                        <Input
                                            id="farmName"
                                            type="text"
                                            disabled={isLoading}
                                            placeholder="Enter your farm name"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="harvestProceeds">Harvest Proceeds as</Label>
                                        <Select value={harvestType} disabled={isLoading} onValueChange={handleHarvestChange} required>
                                            <SelectTrigger id="harvestProceeds">
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="cash">Cash</SelectItem>
                                                <SelectItem value="crop">Crop</SelectItem>
                                                <SelectItem value="rollOnToTrade">Roll on to trade</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Your email</Label>
                                        <Input
                                            id="email"
                                            disabled={isLoading}
                                            value={email}
                                            onChange={handleEmailChange}
                                            type="email"
                                            placeholder="m@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className=''>
                                            <Label htmlFor="farmName">Number of Units</Label>
                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    disabled={isLoading}
                                                    type='button'
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={decreaseQuantity}
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </Button>
                                                <Input
                                                    disabled={isLoading}
                                                    id="quantity"
                                                    type="number"
                                                    value={quantity}
                                                    onChange={handleInputChange}
                                                    className="w-20 text-center"
                                                    min="1"
                                                    aria-label="Quantity"
                                                />
                                                <Button
                                                    disabled={isLoading}
                                                    type='button'
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={increaseQuantity}
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <Label htmlFor="farmName">Total Cost</Label>
                                            <Input

                                                id="subTotal"
                                                type="number"
                                                value={total}
                                                disabled={true}
                                                className="w-20 text-center"
                                                min="1"
                                                aria-label="Quantity"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 justify-start mt-5">
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-2 text-primary" />
                                            <div className="flex flex-col">
                                                <p>Farming Season:</p>
                                                <p className="text-muted-foreground text-sm">
                                                    {new Date(farm?.season?.start!).toLocaleDateString()} - {new Date(farm?.season?.start!).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-4">
                                            <Check className="w-4 h-4 mt-2 text-primary" />
                                            <div className="flex flex-col">
                                                <p>Location</p>
                                                <p className="text-muted-foreground text-sm">
                                                    {farm?.location}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex items-center space-x-2 py-10">
                                        <Checkbox disabled={isLoading} id="terms" checked={termChecked} required onClick={handleTermsCheck} />
                                        <Label htmlFor="terms" className="text-sm">
                                            Agree to our terms and conditions
                                        </Label>
                                    </div>
                                    <Button type='submit' disabled={isLoading} className="w-full">Make Payment</Button>
                                </form>
                            </CardContent>
                        </Card>
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

Checkout.defaultProps = defaultValues;

export default Checkout