"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';
import { LoaderCircle } from 'lucide-react';
import { signOut } from 'next-auth/react';
import AppConfig from '@/app.config';


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