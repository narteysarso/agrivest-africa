"use client"
import React, { useState } from 'react'

import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { BadgeCent, BadgeDollarSign, BadgeEuro, Bean, CalendarIcon, Vegan, Wheat } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import AppConfig from '@/app.config'
import { FarmType } from '@/types'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import ImageDragDrop from '../image-drag-drop'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar } from '../ui/calendar'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

export enum Currencies {
    USD = "USD",
    GHS = "GHS",
    EUR = "EUR"
}

enum InvestmentDurationUnits {
    DAYS = "days",
    MONTHS = "months",
    YEARS = "years"
};


const investmentDurationInDaysMultiplier = {
    [InvestmentDurationUnits.DAYS]: 1,
    [InvestmentDurationUnits.MONTHS]: 30,
    [InvestmentDurationUnits.YEARS]: 365
};


export const FarmFormSchema = z.object({
    imageUrl: z.string().trim().optional(),
    name: z.string().trim().min(AppConfig.constants.minFarmNameLength),
    description: z.string().trim().min(AppConfig.constants.minFarmDescriptionLength).max(AppConfig.constants.maxFarmDescriptionLength),
    investmentDuration: z.number().min(AppConfig.constants.defaultFarmInvestmentMinimumDurationInDays),
    investmentDurationUnit: z.nativeEnum(InvestmentDurationUnits),
    investmentDeadline: z.date().optional(),
    currency: z.nativeEnum(Currencies),
    season: z.object({
        from: z.date(),
        to: z.date(),
    }).optional(),
    type: z.nativeEnum(FarmType),
    unitCost: z.number().min(AppConfig.constants.minimumUnitCost),
    archerPerUnit: z.number().min(AppConfig.constants.minimumFarmArcherage).step(AppConfig.constants.farmArcherageIncremental),
    totalUnits: z.number().min(AppConfig.constants.minimumFarmUnits).step(AppConfig.constants.farmArcherageIncremental)
})



function FarmForm() {
    const form = useForm<z.infer<typeof FarmFormSchema>>({
        resolver: zodResolver(FarmFormSchema),
        defaultValues: {
            imageUrl: "",
            name: "",
            description: "",
            investmentDuration: AppConfig.constants.defaultFarmInvestmentMinimumDurationInDays,
            investmentDurationUnit: undefined,
            type: undefined,
            currency: undefined,
            season: undefined,
            archerPerUnit: AppConfig.constants.minimumFarmArcherage,
            totalUnits: AppConfig.constants.minimumFarmUnits,
            unitCost: AppConfig.constants.minimumUnitCost
        }
    })

    const onSubmit = (data: z.infer<typeof FarmFormSchema>) => {
        console.log(data);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full items-start md:gap-6 overflow-auto md:p-4 pt-0">
                <fieldset className="grid gap-6 rounded-lg border sm:p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">
                        Field Details
                    </legend>
                    <div className="grid gap-3">
                        <ImageDragDrop form={form} />
                    </div>
                    <div className="grid gap-3">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} placeholder="Give your farm a name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <div className="grid gap-3">
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type</FormLabel>
                                    <FormControl>
                                        <Select {...field}>

                                            <SelectTrigger
                                                id="model"
                                                className="items-start [&_[data-description]]:hidden"
                                            >
                                                <SelectValue placeholder="Select farm type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value={FarmType.MAIZE}>
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Wheat className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>

                                                                <span className="font-medium text-foreground">
                                                                    {`${FarmType.MAIZE.charAt(0).toUpperCase()}${FarmType.MAIZE.substring(1)}`}
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                {AppConfig.literals.maize_farm_description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value={FarmType.RICE}>
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Vegan className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>

                                                                <span className="font-medium text-foreground">
                                                                    {`${FarmType.RICE.charAt(0).toUpperCase()}${FarmType.RICE.substring(1)}`}
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                {AppConfig.literals.rice_farm_description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value={FarmType.GROUNDNUT}>
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Vegan className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>

                                                                <span className="font-medium text-foreground">
                                                                    {`${FarmType.GROUNDNUT.charAt(0).toUpperCase()}${FarmType.GROUNDNUT.substring(1)}`}
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                {AppConfig.literals.groundnut_farm_description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value={FarmType.SOYABEANS}>
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Vegan className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>

                                                                <span className="font-medium text-foreground">
                                                                    {`${FarmType.SOYABEANS.charAt(0).toUpperCase()}${FarmType.SOYABEANS.substring(1)}`}
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                {AppConfig.literals.soyabeans_farm_description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value={FarmType.BEANS}>
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Bean className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>

                                                                <span className="font-medium text-foreground">
                                                                    {`${FarmType.BEANS.charAt(0).toUpperCase()}${FarmType.BEANS.substring(1)}`}
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                {AppConfig.literals.beans_farm_description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="totalUnits"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Total Units</FormLabel>
                                    <FormControl>
                                        <Input type="number" min={AppConfig.constants.minimumFarmArcherage} {...field} placeholder="Total farm units to issue" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="archerPerUnit"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Archerage/Unit</FormLabel>
                                    <FormControl>
                                        <Input type="number" min={AppConfig.constants.minimumFarmArcherage} {...field} placeholder="How much archer is in one farm unit?" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="unitCost"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Unit Cost</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} placeholder="How much does a farm unit cost?" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                        <FormField
                            control={form.control}
                            name="currency"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Currency</FormLabel>
                                    <FormControl>
                                        <Select {...field}>
                                            <SelectTrigger
                                                id="model"
                                                className="items-start [&_[data-description]]:hidden"
                                            >
                                                <SelectValue placeholder="Select currency" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value={Currencies.USD}>
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <BadgeDollarSign className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>

                                                                <span className="font-medium text-foreground">
                                                                    {Currencies.USD}
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                {AppConfig.literals.currencies.USD}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value={Currencies.EUR}>
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <BadgeEuro className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>

                                                                <span className="font-medium text-foreground">
                                                                    {Currencies.EUR}
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                {AppConfig.literals.currencies.EUR}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value={Currencies.GHS}>
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <BadgeCent className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>

                                                                <span className="font-medium text-foreground">
                                                                    {Currencies.GHS}
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                {AppConfig.literals.currencies.GHS}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>

                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="investmentDuration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Investment Period</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} min={AppConfig.constants.defaultFarmInvestmentMinimumDurationInDays} placeholder="How long will this investment run" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                        <FormField
                            control={form.control}
                            name="investmentDurationUnit"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Duration Unit</FormLabel>
                                    <FormControl>
                                        <Select {...field}>
                                            <SelectTrigger
                                                id="model"
                                                className="items-start [&_[data-description]]:hidden"
                                            >
                                                <SelectValue placeholder="Duration Unit" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value={InvestmentDurationUnits.DAYS}>
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <BadgeDollarSign className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>

                                                                <span className="font-medium text-foreground">
                                                                    {InvestmentDurationUnits.DAYS}
                                                                </span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value={InvestmentDurationUnits.MONTHS}>
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <BadgeEuro className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>

                                                                <span className="font-medium text-foreground">
                                                                    {InvestmentDurationUnits.MONTHS}
                                                                </span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value={InvestmentDurationUnits.YEARS}>
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <BadgeCent className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>

                                                                <span className="font-medium text-foreground">
                                                                    {InvestmentDurationUnits.YEARS}
                                                                </span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                </SelectItem>

                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                    </div>

                    <div className="grid gap-3">
                        <FormField
                            control={form.control}
                            name="investmentDeadline"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Registration Deadline</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date < new Date()
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid gap-3">
                        <FormField
                            control={form.control}
                            name="season"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Season Range</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value?.from && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {field.value?.from ? (
                                                        field.value.to ? (
                                                            <>
                                                                {format(field.value.from, "LLL dd, y")} -{" "}
                                                                {format(field.value.to, "LLL dd, y")}
                                                            </>
                                                        ) : (
                                                            format(field.value.from, "LLL dd, y")
                                                        )
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0" align="start">
                                            <Calendar
                                                initialFocus
                                                mode="range"
                                                defaultMonth={field.value?.from}
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                numberOfMonths={2}
                                                disabled={(date) =>
                                                    date < new Date()
                                                }
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>


                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">
                        Description
                    </legend>
                    <div className="grid gap-3">
                        <FormField control={form.control} name="description" render={({ field }) => (
                            <FormItem>
                                <FormLabel></FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Describe your farm (150)" maxLength={150} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                </fieldset>
                <div className='grid grid-cols-2 gap-4 pt-10'>
                    <Button type="reset" variant={"destructive"}>Reset</Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form>
    )
}

export default FarmForm