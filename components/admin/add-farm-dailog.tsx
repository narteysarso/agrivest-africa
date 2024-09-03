"use client"

import { Button } from '@/components/ui/button'
import { CircleX, Plus } from 'lucide-react'
import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import FarmForm from './farm-form'

function AddFarmDialog() {
    const [open, setOpen] = useState(false);
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button className='gap-4'> <Plus /> New Farm</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>

                    <AlertDialogTitle className='flex items-center justify-between'>
                        <p>Add a farm</p>
                        <Button variant={"ghost"} onClick={() => setOpen(false)}>
                            <CircleX />
                        </Button>
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        Provided the required information
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <FarmForm />

            </AlertDialogContent>
        </AlertDialog>

    )
}

export default AddFarmDialog