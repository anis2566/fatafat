import { GridBackground } from "../aceternity/grid-background"
import { InfiniteMovingCards } from "../aceternity/infinite-moving-cards"
import { WINNERS_ITEMS } from "@/constant"

export const Winners = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500">
            <div className="w-full max-w-screen-xl mx-auto">
                <h1 className="text-center text-[30px] font-bold">FataFat Bazar <span className="text-amber-500">Winners</span></h1>
                <InfiniteMovingCards items={WINNERS_ITEMS} speed="normal" />
            </div>
        </div>
    )
}