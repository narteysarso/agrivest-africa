"use client"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoaderCircle } from "lucide-react"
import Link from "next/link"
import AppConfig from '@/app.config'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { GoogleSignInButton } from './authBottons'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }
const FormSchema = z.object({
    email: z.string().email(),
    firstname: z.string(),
    lastname: z.string(),
    password: z.string().min(AppConfig.constants.defaultPasswordLength || 6, "message must be at least 8 characters long")
});

export function SignUpForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<string | null>();
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            firstname: "",
            lastname: "",
            password: ""
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {

            setIsLoading(true);

            const registerResponse = await fetch(AppConfig.routes.api.investor, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!registerResponse.ok) {
                setErrors(AppConfig.literals.investor.registration_default_failed);
            } else {
                router.push(AppConfig.routes.pages.signin);
            }
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form  {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                    <div className='grid grid-cols-2 gap-4'>
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Joe" {...field} type='text' />
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
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Doe" {...field} type='text' />
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
                        name="password"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Password:</FormLabel>
                                <FormControl>
                                    <Input placeholder="********" {...field} type='password' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {
                        errors && (
                            <FormMessage className='p-4 mb-2 text-white bg-red-500 w-full'>
                                {errors}
                            </FormMessage>
                        )
                    }

                    <Button type='submit' disabled={isLoading} size={"lg"} className='w-full'>
                        {isLoading && (
                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign up with Email
                    </Button>

                </form>
            </Form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <GoogleSignInButton />
            <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href={AppConfig.routes.pages.signin} className="underline">
                    Sign in
                </Link>
            </div>
        </div>
    )
}