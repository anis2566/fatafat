import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export const FAQ = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto p-4 text-white" id="faq">
            <h1 className="text-center text-3xl font-bold">FAQs</h1>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-primary">
                    <AccordionTrigger>Is it safe to play on fatafatBazar?</AccordionTrigger>
                    <AccordionContent>
                        It is 100% safe place to play on Fatafat Bazar.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-primary">
                    <AccordionTrigger>How does a real money game work?</AccordionTrigger>
                    <AccordionContent>
                        Just recharge and play. Upi transfer is available. If you win then you can withdraw money by simply requestion in app. Fund will be transfered in your bank account within 2 hours.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-primary">
                    <AccordionTrigger>Can I actually win money on Fatafat Bazar?</AccordionTrigger>
                    <AccordionContent>
                        Yes you can. It&apos;s a number game and based on prediction you can win and be rewarded.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-primary">
                    <AccordionTrigger>Is it safe to add money to Fatafat Bazar?</AccordionTrigger>
                    <AccordionContent>
                        It&apos;s 100 % safe to add money into wallet. You can withdraw your money at any point of time.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-primary">
                    <AccordionTrigger>How can I withdraw my money?</AccordionTrigger>
                    <AccordionContent>
                        You just need to send a withdrawal request from app and after approval you will get the money in your bank account within 2 hours.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}