"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoaderCircle } from "lucide-react"
import Link from "next/link"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GoogleSignInButton } from './authBottons'
import AppConfig from '@/app.config'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    csrfToken?: string;
    redirect?: string;
}

export function UserLoginForm({ className, csrfToken, redirect, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [errors, setErrors] = React.useState<string | null>();
    const router = useRouter();

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {

        try {
            setIsLoading(true)
            event.preventDefault()

            const data = new FormData(event.currentTarget);
            setErrors(null);

            const signInResponse = await signIn("credentials", {
                email: data.get("email"),
                password: data.get("password"),
                redirect: false
            });

            if (signInResponse && signInResponse.error) {
                setErrors(signInResponse.error);
            } else {
                router.push(redirect || AppConfig.routes.pages.protected.admin.overview);
            }

        } catch (error: any) {
            setErrors(error?.message)
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <Input
                            name='email'
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label htmlFor="password">
                            Password
                        </Label>
                        <Input
                            name="password"
                            placeholder="****"
                            type="password"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    {
                        errors && (
                            <span className='p-4 mb-2 text-white bg-red-500 w-full'>
                                {errors}
                            </span>
                        )
                    }
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In with Email
                    </Button>
                </div>
            </form>
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