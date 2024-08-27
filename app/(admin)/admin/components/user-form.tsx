'use client'

import AppConfig from '@/app.config';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useState } from 'react';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoaderCircle } from "lucide-react"
import { UserInput } from '@/types';

const defaultUserData: UserInput = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}

export default function UserForm({ className, ...props }: React.HTMLAttributes<HTMLElement>): ReactNode {

    const router = useRouter();
    const [formData, setFormData] = useState<Partial<UserInput>>(defaultUserData);
    const [error, setErrors] = useState<string>();
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {

        const { name, value } = e.currentTarget;

        setFormData(prev => {
            if (!prev) return { [name]: value }
            return { ...prev, [name]: value }
        }
        );
    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        try {
            setLoading(true);

            e.preventDefault();
            setErrors(undefined);

            const res = await fetch(AppConfig.routes.user.createUser, {
                method: "POST",
                body: JSON.stringify({ formData }),
                headers: {
                    "content-type": "application/json"
                }
            })

            if (!res.ok) {
                const result = await res.json();
                throw Error(result.message);
            }

            router.refresh();
            router.push("/")

        } catch (error: any) {
            setErrors(error?.message);
        } finally {
            setLoading(false);
        }
    }

    return (<>
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={handleSubmit} method='post'>
                <div className="grid gap-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-4">
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Max" required value={formData?.firstname} />
                        </div>
                        <div className="grid gap-4">
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Robinson" required onChange={handleChange} value={formData?.lastname} />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            value={formData?.email}
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className="grid gap-4">
                        <Label htmlFor="email">
                            Password
                        </Label>
                        <Input
                            id="password"
                            placeholder="*****"
                            type="password"
                            autoCorrect="off"
                            required
                            value={formData?.password}
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Create User
                    </Button>
                </div>
            </form>
            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    ""
                )}{" "}
                Google
            </Button>
        </div>
    </>)
}