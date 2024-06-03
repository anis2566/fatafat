import { TRUST_ITEMS } from "@/constant"
import { HeroHighlight, Highlight } from "../aceternity/hero-highlight"
import { LampDemo } from "../aceternity/lamp"
import { TrustCard } from "./trust-card"
import { Button } from "../ui/button"
import { BsAndroid2 } from "react-icons/bs"

export const Trust = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center space-y-16 px-4">
            <p className="text-center text-2xl p-2 font-bold tracking-wide">
                India's First & Most Trusted Real Money
                <Highlight className="text-center text-2xl p-2 font-bold tracking-wide ml-2"> Fatafat Bazar App</Highlight>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-16 w-full">
                {
                    TRUST_ITEMS.map((item) => (
                        <TrustCard key={item.label} {...item} />
                    ))
                }
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-transparent shadow-md shadow-primary p-4 border border-primary rounded-md">flafla</div>
                <div>
                    <h1 className="text-3xl font-bold tracking-wider">Trusted By</h1>
                    <h1 className="text-2xl text-muted-foreground">Lakhs of Verified Players</h1>
                    <Button className="flex items-center gap-x-3 w-full max-w-[300px] mt-4">
                        <BsAndroid2 className="h-5 w-5 text-amber-500" />
                        Download App
                    </Button>
                </div>
            </div>
        </div>
    )
}