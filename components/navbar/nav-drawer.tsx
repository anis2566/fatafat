"use client"

import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

import { NAVBAR_ITEMS } from "@/constant"
import { Logo } from "../logo"
import { cn } from "@/lib/utils"

export const NavDrawer = () => {
    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger className="md:hidden" asChild>
                <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="w-5 h-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] bg-slate-900 text-white z-50 pt-20 md:pt-0">
                <SheetHeader>
                    <div className="flex items-center gap-x-2 -mt-3">
                        <Logo />
                        <span className="text-lg font-semibold">FataFat<span className="text-amber-500 ml-2">Bazar</span></span>
                    </div>
                </SheetHeader>
                <Separator className="my-6" />
                <div className="space-y-2">
                    {
                        NAVBAR_ITEMS.map(item => {
                            const active = item.href === pathname
                            return (
                                <SheetClose asChild key={item.href}>
                                    <Button variant="ghost" className={cn("w-full justify-start", active && "bg-muted")}>
                                        {item.label}
                                    </Button>
                                </SheetClose>
                            )
                        })
                    }
                </div>
            </SheetContent>
        </Sheet>

    )
}