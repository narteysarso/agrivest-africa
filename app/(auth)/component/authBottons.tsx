"use client"

import AppConfig from '@/app.config'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const GoogleSignInButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleClick = () => {
        signIn("google");
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
    const handleClick = () => {
        signIn("facebook")
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
    const handleClick = async () => {
        try {
            setIsLoading(true);
            await signIn("linkedin");
        } catch (error) {

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
    const router = useRouter();
    const handleClick = () => {

        try {
            if (!confirm("Do you want to sign out?")) return;
            setIsLoading(true);
            signOut();
            router.push(AppConfig.routes.pages.home);
        } catch (error) {
            console.log(error);
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



