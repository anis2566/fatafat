type NavbarItems = {
    label: string;
    href: string;
}

export const NAVBAR_ITEMS: readonly NavbarItems[] = [
    {
        label: "FAQ",
        href: "/faq"
    },
    {
        label: "Responsible Gaming",
        href: "/responsible-gaming"
    },
    {
        label: "Contact Us",
        href: "/contact"
    },
]

export type WinnersItems = {
    imageUrl: string;
    name: string;
    location: string;
    amount: number;
    comment: string;
}

export const WINNERS_ITEMS: WinnersItems[] = [
    {
        name: "John Doe",
        imageUrl: "https://github.com/shadcn.png",
        location: "New Jersy, UK",
        amount: 60,
        comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, impedit inventore incidunt facilis dignissimos quisquam molestias temporibus nisi provident numquam esse asperiores, error porro dolorem quas ut exercitationem aliquam ad."
    },
    {
        name: "John Doe",
        imageUrl: "https://github.com/shadcn.png",
        location: "New Jersy, UK",
        amount: 60,
        comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, impedit inventore incidunt facilis dignissimos quisquam molestias temporibus nisi provident numquam esse asperiores, error porro dolorem quas ut exercitationem aliquam ad."
    },
    {
        name: "John Doe",
        imageUrl: "https://github.com/shadcn.png",
        location: "New Jersy, UK",
        amount: 60,
        comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, impedit inventore incidunt facilis dignissimos quisquam molestias temporibus nisi provident numquam esse asperiores, error porro dolorem quas ut exercitationem aliquam ad."
    },
]

type TrustItems = {
    label: string;
    image: string;
}

export const TRUST_ITEMS: TrustItems[] = [
    {
        label: "Instant Withdrawals",
        image: "/wallet.png"
    },
    {
        label: "100% Legal & Secure",
        image: "/web-browser.png"
    },
    {
        label: "Supreme Cashback",
        image: "/refund.png"
    },
    {
        label: "24/7 Tournaments",
        image: "/dices.png"
    },
    {
        label: "Certified",
        image: "/certificate.png"
    },
    {
        label: "Dedicated Customer Support",
        image: "/customer-service.png"
    },
]