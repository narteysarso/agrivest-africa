"use client"
import React, { useRef } from 'react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Bird, Rabbit, Turtle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Button } from '../ui/button'

enum FarmType {
    MAIZE = "maize",
    RICE = "rice"
}

const FormSchema = z.object({
    image: z.string().trim().optional(),
    name: z.string().trim().min(5),
    description: z.string().trim().max(150),
    type: z.nativeEnum(FarmType),
    availableArcherage: z.number().min(0).step(0.01)
})
function FarmForm() {
    const fileRef = useRef();
    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues: {
            image: "",
            name: "",
            description: "",
            type: undefined,
            availableArcherage: 0
        }
    })
    return (
        <Form {...form}>
            <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">
                        Field Details
                    </legend>
                    <div className="grid gap-3">
                        <FormField control={form.control} name="image" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <>
                                        <Input type="file" hidden {...field} placeholder="Choose an image" />
                                    </>
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
                                                <SelectValue placeholder="Select a model" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="genesis">
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Rabbit className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>
                                                                Neural{" "}
                                                                <span className="font-medium text-foreground">
                                                                    Genesis
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                Our fastest model for general use cases.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="explorer">
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Bird className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>
                                                                Neural{" "}
                                                                <span className="font-medium text-foreground">
                                                                    Explorer
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                Performance and speed for efficiency.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="quantum">
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Turtle className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>
                                                                Neural{" "}
                                                                <span className="font-medium text-foreground">
                                                                    Quantum
                                                                </span>
                                                            </p>
                                                            <p className="text-xs" data-description>
                                                                The most powerful model for complex
                                                                computations.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
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
                                        <Input type="text" {...field} placeholder="Give your farm a name" />
                                    </FormControl>
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
                            </FormItem>
                        )} />
                    </div>
                </fieldset>
            </form>
        </Form>
    )
}

export default FarmForm