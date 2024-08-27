"use client";

import { mainNavigationItems } from '@/constants/user-nav';
import { Menu, MoveRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import Link from "next/link";

function MobileNav() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
            <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            {isOpen && (
                <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                    {mainNavigationItems.map((item) => (
                        <div key={item.title}>
                            <div className="flex flex-col gap-2">
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="flex justify-between items-center"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="text-lg">{item.title}</span>
                                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                    </Link>
                                ) : (
                                    <p className="text-lg">{item.title}</p>
                                )}
                                {item.items &&
                                    item.items.map((subItem) => (
                                        <Link
                                            key={subItem.title}
                                            href={subItem.href}
                                            className="flex justify-between items-center"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="text-muted-foreground">
                                                {subItem.title}
                                            </span>
                                            <MoveRight className="w-4 h-4 stroke-1" />
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MobileNav