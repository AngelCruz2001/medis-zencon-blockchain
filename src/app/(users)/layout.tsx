import { FC } from "react"
import {Logo, DashboardIcon} from "@/svg"
import Link from "next/link"

interface Link {
    label: string;
    href: string
    Icon: FC
}
const links: Link[] = [
    {
        label: "Dashboard",
        href: "/doctor/dashboard",
        Icon: DashboardIcon
    }
]

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex justify-between h-full max-w-full max-h-full overflow-hidden">

            {/* SIDEBAR */}
            <nav className="bg-foreground h-[100vh] max-h-[100vh] w-[200px] py-4 px-5" >
                <div className="max-w-full">
                <Logo />
                </div>
                <ul>
                    {
                        links.map(({label, href, Icon}) => (
                            <li>
                                <Link href={href} className="flex items-center gap-2" >
                                    <Icon />
                                    {label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <div className="flex flex-row flex-grow">
                {/* Navbar */}

                <main className="flex flex-col flex-grow p-5">
                    {children}
                </main>
            </div>
        </div>
    )
}