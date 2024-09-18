'use client'

import React, { useState, useCallback } from 'react'
import { Upload, X } from 'lucide-react'
import Image from 'next/image'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { UseFormReturn } from 'react-hook-form'
import { Input } from './ui/input'

export default function ImageDragDrop({ form }: { form: UseFormReturn<any> }) {
    const [image, setImage] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }, [])

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setError(null)

        const file = e.dataTransfer.files?.[0]
        validateAndSetImage(file)
    }, [])

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setError(null)
        const file = e.target.files?.[0]
        if (file) {
            validateAndSetImage(file)
        }
    }, [])

    const validateAndSetImage = (file: File) => {
        if (!file.type.startsWith('image/')) {
            setError('Please upload an image file.')
            return
        }

        setImage(file);
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
    }

    const removeImage = useCallback(() => {
        setImage(null)
        setPreview(null)
        setError(null)
        form.resetField("image", { defaultValue: "" })
    }, [])

    return (
        <div className="w-full max-w-md mx-auto p-6">
            <div
                className={`border-2 border-dashed rounded-lg p-4 text-center ${image ? 'border-green-500' : 'border-gray-300 hover:border-gray-400'
                    } transition-colors duration-200 ease-in-out`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <FormField control={form.control} name="image" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Image</FormLabel>
                        <FormControl >
                            <>
                                {image ? (
                                    <div className="relative">
                                        <Image
                                            src={preview!}
                                            alt="Preview"
                                            width={250}
                                            height={250}
                                            className="max-w-full h-auto rounded"
                                        />
                                        <button
                                            onClick={removeImage}
                                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                            aria-label="Remove image"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                        <p className="mt-2 text-sm text-gray-600">
                                            Drag and drop an image here, or click to select a file
                                        </p>
                                    </div>
                                )}
                                <Input
                                    {...field}
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleFileChange(e)
                                    }}
                                    className="hidden"
                                    id="image"

                                />
                            </>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
            </div>
            {error && (
                <p className="mt-2 text-sm text-red-500" role="alert">
                    {error}
                </p>
            )}
            {image && (
                <p className="mt-2 text-sm text-gray-600">
                    File name: {image.name} ({Math.round(image.size / 1024)} KB)
                </p>
            )}
            <label
                htmlFor="image"
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Select an image
            </label>
        </div>
    )
}