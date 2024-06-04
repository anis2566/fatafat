import { FaStar } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs"

import { Button } from "../ui/button"
import { Progress } from "../ui/progress"

import { Highlight } from "../aceternity/hero-highlight"
import { TrustCard } from "./trust-card"
import { TRUST_ITEMS } from "@/constant"

export const Services = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center space-y-16 px-4" id="trust">
            <p className="text-center text-2xl p-2 font-bold tracking-wide text-white flex flex-col md:flex-row">
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

            <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-transparent shadow-md shadow-primary p-4 border border-primary rounded-md flex items-center gap-x-3 md:col-span-2 text-white">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold">5.00</h1>
                        <div className="flex items-center">
                            <FaStar color="yellow" />
                            <FaStar color="yellow" />
                            <FaStar color="yellow" />
                            <FaStar color="yellow" />
                            <FaStar color="yellow" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-x-3 w-full">
                            <p>5</p>
                            <Progress value={100} className="bg-indigo-600" />
                        </div>
                        <div className="flex items-center gap-x-3 w-full">
                            <p>4</p>
                            <Progress value={80} className="bg-indigo-600" />
                        </div>
                        <div className="flex items-center gap-x-3 w-full">
                            <p>3</p>
                            <Progress value={60} className="bg-indigo-600" />
                        </div>
                        <div className="flex items-center gap-x-3 w-full">
                            <p>2</p>
                            <Progress value={40} className="bg-indigo-600" />
                        </div>
                        <div className="flex items-center gap-x-3 w-full">
                            <p>1</p>
                            <Progress value={20} className="bg-indigo-600" />
                        </div>
                    </div>
                </div>
                <div className="text-white">
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