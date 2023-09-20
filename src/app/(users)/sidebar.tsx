'use client'

import Link from "next/link"
import { Logo, DashboardIcon, PatientOverviewIcon, MedicalHistoryIcon, PrescriptionsIcon, DiagnosticToolsIcon, LogoutIcon, LogoSmallIcon } from "@/svg"
import { usePathname } from 'next/navigation'
import { FC } from "react";

interface Link {
    label: string;
    href: string
    Icon: FC
}
const pathname = '/doctor'
const links: Link[] = [
    {
        label: "Dashboard",
        href: pathname + "/dashboard",
        Icon: DashboardIcon
    },
    {
        label: "Patients",
        href: pathname + "/patients",
        Icon: PatientOverviewIcon
    },
    {
        label: "Prescriptions",
        href: pathname + "/prescriptions",
        Icon: PrescriptionsIcon
    },
    {
        label: "Diagnostic Tools",
        href: pathname + "/diagnostic-tools",
        Icon: DiagnosticToolsIcon
    },
]

const linkVariants = {
    active: 'bg-gray-200',
    disbled: 'hover:bg-gray-100'
}

export const Sidebar = () => {
    const pathname = usePathname();
    return (
        <nav className="bg-white h-[100vh] max-h-[100vh] md:w-[250px] py-4 px-2 md:px-5 shadow-light z-20" >
            <div className="w-[80%] mx-auto hidden md:flex">
                <Logo />
            </div>
            {/* <div className="w-5 h-5 mx-auto md:hidden">
                <LogoSmallIcon />
            </div> */}
            <ul className="flex flex-col gap-2 mt-14" >
                {
                    links.map(({ label, href, Icon }, index) => {
                        const isActive = pathname === href;

                        return (
                            <li key={index}>
                                <Link href={href} className={`flex items-center gap-3 text-sm rounded-md p-2 transition-colors ${isActive ? linkVariants.active : linkVariants.disbled}`} >
                                    <span className="h-5 w-5 flex items-center justify-center" ><Icon /></span>
                                    {/* <Icon /> */}
                                    <span className="hidden md:inline" >
                                        {label}
                                    </span>
                                </Link>
                            </li>
                        )

                    })
                }
            </ul>
        </nav>
    )
}
