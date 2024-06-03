import { BackgroundGradientAnimation } from "../aceternity/background-gradient-animation"
import { TextGenerateEffect } from "../aceternity/text-generate-effect"
import { Button } from "../ui/button"
import { BsAndroid2 } from "react-icons/bs"
import { Navbar } from "../navbar"
import { InfiniteMovingCards } from "../aceternity/infinite-moving-cards"
import { WINNERS_ITEMS } from "@/constant"
import { LampContainer } from "../aceternity/lamp"
import { Trust } from "../trust"

export const Hero = () => {
    return (
        <div>
            <BackgroundGradientAnimation className="space-y-16">
                <Navbar />
                <div className="grid md:grid-cols-2 gap-8 w-full max-w-screen-xl mx-auto">
                    <div className="flex flex-col justify-center items-center md:items-start px-4">
                        <TextGenerateEffect words="Play Game" textClassName="text-[40px] md:text-[50px] font-bold tracking-widest" />
                        <h1 className="text-[25px] md:text-[30px]">Win up to <span className="text-amber-500 font-semibold">Unlimited</span></h1>
                        <Button className="flex items-center gap-x-3 w-full max-w-[300px] mt-4">
                            <BsAndroid2 className="h-5 w-5 text-amber-500" />
                            Download App
                        </Button>
                        <p className="mt-4">Over 50k + Downloads &#128293; Unlimited + Daily Winnings
                        </p>
                    </div>
                    <div className="aspect-video">
                        <img
                            src="/banner-main-image.png"
                            alt="Banner"
                            className="object-cover"
                        />
                    </div>
                </div>
                <Trust />
                <div className="w-full max-w-screen-xl mx-auto">
                    <LampContainer>
                        <h1 className="text-center text-[30px] font-bold">FataFat Bazar <span className="text-amber-500">Winners</span></h1>
                        <InfiniteMovingCards items={WINNERS_ITEMS} speed="normal" />
                    </LampContainer>
                </div>
            </BackgroundGradientAnimation>
        </div>
    )
}