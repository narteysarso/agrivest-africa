"use client"

import { Button } from '@/components/ui/button'
import { CircleX, Plus } from 'lucide-react'
import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import StaffForm from './staff-form'

function AddStaff() {
    const [open, setOpen] = useState(false);
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button className='gap-4'> <Plus /> New Staff</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>

                    <AlertDialogTitle className='flex items-center justify-between'>
                        <p>Add new staff</p>
                        <Button variant={"ghost"} onClick={() => setOpen(false)}>
                        <CircleX />
                        </Button>
                    </AlertDialogTitle>
                    
                    <AlertDialogDescription>
                        Provided the required information
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <StaffForm />

            </AlertDialogContent>
        </AlertDialog>

    )
}

export default AddStaff