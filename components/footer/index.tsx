import { Copyright, Facebook, Twitter, Youtube } from "lucide-react"

import { Button } from "../ui/button"

import { Logo } from "../logo"
import { SocialIcon } from "../social-icon"

export const Footer = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto p-4 text-white space-y-4">
            <Logo />
            <div className="flex items-center gap-x-2">
                <SocialIcon icon={Facebook} bgcolor="bg-[#1877F2]" href="https://facebook.com" />
                <SocialIcon icon={Twitter} bgcolor="bg-[#1DA1F2]" href="https://twitter.com" />
                <SocialIcon icon={Youtube} bgcolor="bg-[#FF0000]" href="https://youtube.com" />
            </div>
            <div className="flex items-center flex-wrap">
                <Button variant="link" className="text-white hover:text-amber-500">Certifications</Button>
                <Button variant="link" className="text-white hover:text-amber-500">Privacy Policy</Button>
                <Button variant="link" className="text-white hover:text-amber-500">Terms & Conditions</Button>
                <Button variant="link" className="text-white hover:text-amber-500">Responsible Gaming</Button>
                <Button variant="link" className="text-white hover:text-amber-500">Fair Play</Button>
            </div>
            <div>
                <p className="flex items-center gap-x-2 text-muted-foreground">
                    <Copyright className="w-5 h-5" />
                    Fatafat Bazar. All Right Reserved.
                </p>
            </div>
        </div>
    )
}