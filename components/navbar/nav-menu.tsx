"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "../ui/button"

import { NAVBAR_ITEMS } from "@/constant"
import { cn } from "@/lib/utils"

export const NavMenu = () => {
    const pathname = usePathname()

    return (
        <div className="hidden md:flex items-center gap-x-3">
            {
                NAVBAR_ITEMS.map((item) => {
                    const active = item.href === pathname
                    return (
                        <Button key={item.href} asChild variant="ghost" className={cn("hover:bg-transparent hover:text-amber-500", active && "text-amber-500")}>
                            <Link href={item.href}>{item.label}</Link>
                        </Button>
                    )
                })
            }
        </div>
    )
}