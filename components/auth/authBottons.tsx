"use client"

import AppConfig from '@/app.config'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const GoogleSignInButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setErrors] = useState<string>();
    const handleClick = () => {
        try {
            setIsLoading(true);
            signIn("google");
        } catch (error) {
            setErrors("Failed to authenticate with google");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Button variant="outline" type="button" disabled={isLoading} onClick={handleClick}>
            {isLoading ? (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                ""
            )}{" "}
            Google
        </Button>
    )
}

export const FacebookSignInButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setErrors] = useState<string>()
    const handleClick = async () => {
        try {
            setIsLoading(true);
            await signIn("facebook")
        } catch (error: any) {
            setErrors(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Button variant="outline" type="button" disabled={isLoading} onClick={handleClick}>
            {isLoading ? (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                ""
            )}{" "}
            Google
        </Button>
    )
}

export const LinkedInSignInButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setErrors] = useState<string>()
    const handleClick = async () => {
        try {
            setIsLoading(true);
            await signIn("linkedin");
        } catch (error: any) {
            setErrors(error.message);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <Button variant="outline" type="button" disabled={isLoading} onClick={handleClick}>
            {isLoading ? (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                ""
            )}{" "}
            Google
        </Button>
    )
}

export const SignOutButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setErrors] = useState<string>()
    const router = useRouter();
    const handleClick = async () => {

        try {
            if (!confirm("Do you want to sign out?")) return;
            setIsLoading(true);
            await signOut();
            router.push(AppConfig.routes.pages.home);
        } catch (error: any) {
            setErrors(error.message);
        } finally {
            setIsLoading(false);
        }

    }
    return (
        <Button variant="outline" type="button" className='w-full' disabled={isLoading} onClick={handleClick}>
            {isLoading ? (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                ""
            )}{" "}
            SignOut
        </Button>
    )
}




