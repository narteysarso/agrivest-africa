"use client"
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { LoaderCircle } from 'lucide-react'
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

import AppConfig from '@/app.config'
import { GoogleSignInButton } from './authBottons'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { AuthType } from '@/types'


const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(AppConfig.constants.defaultPasswordLength || 6, "message must be at least 8 characters long")
})


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    authType: AuthType
}

export default function LoginForm({ className, authType, ...props }: UserAuthFormProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<string | null>();
    const router = useRouter();

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            setErrors(null);
            setIsLoading(true);

            const { email, password } = data;

            const signInResponse = await signIn("credentials", {
                email,
                password,
                authType,
                redirect: false
            });

            if (signInResponse && signInResponse.error) {
                return setErrors(AppConfig.literals.auth.errors.invalid_credentials);
            }

            if (authType === AuthType.INVESTOR) {
                return router.push(AppConfig.routes.pages.protected.investor.overview);
            }

            if (authType === AuthType.STAFF) {
                return router.push(AppConfig.routes.pages.protected.admin.overview);
            }

        } catch (error: any) {
            setErrors(error?.message)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>

            <Form  {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">

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
                        Sign In with Email
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
                Dont have an account?{" "}
                <Link href={AppConfig.routes.pages.signup} className="underline">
                    Sign up
                </Link>
            </div>
        </div>
    )
}
