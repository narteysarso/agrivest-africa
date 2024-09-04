"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { StaffPayloadSchema } from '@/types/services/staff.service'
import { useState } from 'react'
import AppConfig from '@/app.config'
import { StaffRole } from '@/types'

const FormSchema = z.object({
    firstname: z.string().min(AppConfig.constants.minNameLength, {
        message: "first name must be at least 2 characters.",
    }),
    lastname: z.string().min(AppConfig.constants.minNameLength, {
        message: "last name must be at least 2 characters.",
    }),
    email: z.string().email(),
    role: z.nativeEnum(StaffRole)
})

export default function StaffForm() {
    const [errors, setErrors] = useState<string | null>();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            role: StaffRole.STAFF
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {

        const results = StaffPayloadSchema.safeParse(data);
        if (!results.success) {
            setErrors(results.error.issues.reduce((prev, issue,) => (`${prev} ${issue.path[0]} : ${issue.message}`), ""));
        }

        const response = await fetch("/api/staff", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(results.data)
        });

        const result = await response.json();

    }

    return (
        <Form  {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                <div className='grid grid-cols-2 gap-4'>
                    <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Firstname</FormLabel>
                                <FormControl>
                                    <Input placeholder="John" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Lastname</FormLabel>
                                <FormControl>
                                    <Input placeholder="Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="nn@example.com" {...field} type='email' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem className="my-8 grid grid-cols-2 items-center">
                            <FormLabel>Assign Role:</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex items-center space-x-6"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value={StaffRole.ADMIN} />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Admin
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value={StaffRole.STAFF} />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Staff
                                        </FormLabel>
                                    </FormItem>

                                </RadioGroup>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className='grid grid-cols-2 gap-4 pt-10'>
                    <Button type="reset" variant={"destructive"}>Reset</Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form>
    )
}
