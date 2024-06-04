import { BsAndroid2 } from "react-icons/bs"

import { BackgroundGradientAnimation } from "@/components/aceternity/background-gradient-animation"
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards"
import { LampContainer } from "@/components/aceternity/lamp"
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect"
import { Button } from "@/components/ui/button"

import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { GamingCondition } from "@/components/gaming-conditions"
import { Navbar } from "@/components/navbar"
import { Services } from "@/components/services"
import { WINNERS_ITEMS } from "@/constant"

const Home = () => {
  return (
    <BackgroundGradientAnimation className="space-y-16">
      <Navbar />
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-screen-xl mx-auto text-white" id="hero">
        <div className="flex flex-col justify-center items-center md:items-start px-4">
          <TextGenerateEffect words="Play Game" textClassName="text-[40px] md:text-[50px] text-white font-bold tracking-widest" />
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
      <Services />
      <div className="w-full max-w-screen-xl mx-auto">
        <LampContainer>
          <h1 className="text-center text-[30px] font-bold text-white">FataFat Bazar <span className="text-amber-500">Winners</span></h1>
          <InfiniteMovingCards items={WINNERS_ITEMS} speed="normal" />
        </LampContainer>
      </div>
      <GamingCondition />
      <FAQ />
      <Footer />
    </BackgroundGradientAnimation>
  )
}

export default Home