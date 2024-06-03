import Image from "next/image";
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href={"/"} className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
            <span className="hidden md:flex text-lg font-semibold">FataFat<span className="text-amber-500 ml-2">Bazar</span></span>
        </Link>
    )
}