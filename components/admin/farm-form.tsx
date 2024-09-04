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
import { Vegan, Wheat } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import Image from 'next/image'
import AppConfig from '@/app.config'
import { FarmType } from '@/types'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'


const FormSchema = z.object({
    image: z.string().trim().optional(),
    name: z.string().trim().min(AppConfig.constants.minFarmNameLength),
    description: z.string().trim().min(AppConfig.constants.minFarmDescriptionLength).max(AppConfig.constants.maxFarmDescriptionLength),
    type: z.nativeEnum(FarmType),
    availableArcherage: z.number().min(AppConfig.constants.minimumFarmArcherage).step(AppConfig.constants.farmArcherageIncremental)
})
function FarmForm() {
    const [imagePreview, setImagePreview] = useState<string>(AppConfig.resource.images.defaultProfileImage);
    const [errors, setErrors] = useState<string | null>(null)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            image: "",
            name: "",
            description: "",
            type: undefined,
            availableArcherage: 0
        }
    })

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        console.log(data);
    }

    const handleImageChange = (e: React.BaseSyntheticEvent) => {
        try {
            const file = e.target.files[0];
            if (!file) throw new Error("Failed to select file. Choose another file");
            console.log(file)
            const uri = URL.createObjectURL(file);
            setImagePreview(uri);
        } catch (error) {
            console.log(error)
            setImagePreview(AppConfig.resource.images.defaultProfileImage);
            setErrors("Failed to set image");
        }

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full items-start md:gap-6 overflow-auto md:p-4 pt-0">
                <fieldset className="grid gap-6 rounded-lg border sm:p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">
                        Field Details
                    </legend>
                    <div className="grid gap-3">
                        <FormField control={form.control} name="image" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl onChange={handleImageChange}>
                                    <div className="grid grid-col grid-cols-1 gap-4">
                                        <div className='w-full flex justify-center'>
                                            <Image
                                                src={imagePreview}
                                                width={250} height={250}
                                                alt="Image preview"
                                                placeholder={"blur"}
                                                blurDataURL={AppConfig.resource.images.defaultProfileImage}
                                                loading={"lazy"}

                                            />
                                        </div>
                                        <Input type="file" hidden {...field} placeholder="Choose an image" />
                                    </div>
                                </FormControl>
                            </FormItem>
                        )} />
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
                                                <SelectItem value="explorer">
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
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid gap-3">
                        <FormField
                            control={form.control}
                            name="availableArcherage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Available Archerage</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} placeholder="Give your farm a name" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
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