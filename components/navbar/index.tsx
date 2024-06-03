import { Logo } from "../logo"
import { NavDrawer } from "./nav-drawer"
import { NavMenu } from "./nav-menu"

export const Navbar = () => {
    return (
        <div className="w-ful max-w-screen-xl mx-auto p-4 px-6 md:px-4 border-b border-primary">
            <div className="flex justify-between items-center">
                <div className="hidden md:block">
                    <Logo />
                </div>
                <NavDrawer />
                <NavMenu />
                <div className="md:hidden">
                    <Logo />
                </div>
            </div>
        </div>
    )
}