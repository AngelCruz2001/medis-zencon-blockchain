'use client'

import Link from "next/link"
import { Logo, DashboardIcon, PatientOverviewIcon, MedicalHistoryIcon, PrescriptionsIcon, DiagnosticToolsIcon, LogoutIcon } from "@/svg"
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
        <nav className="bg-white h-[100vh] max-h-[100vh] w-[250px] py-4 px-5 shadow-light z-20" >
            <div className="w-[80%] mx-auto">
                <Logo />
            </div>
            <ul className="flex flex-col gap-2 mt-14" >
                {
                    links.map(({ label, href, Icon }, index) => {
                        const isActive = pathname === href;

                        if (label === "Logout") {
                            return (
                                <li>
                                    <Link href={href} className={`flex items-center gap-2 text-sm rounded-md p-2 transition-colors ${isActive ? linkVariants.active : linkVariants.disbled} mt-5`} >
                                        <Icon />
                                        {label}
                                    </Link>
                                </li>
                            )
                        } else {
                            return (
                                <li key={index}>
                                    <Link href={href} className={`flex items-center gap-2 text-sm rounded-md p-2 transition-colors ${isActive ? linkVariants.active : linkVariants.disbled}`} >
                                        <Icon />
                                        {label}
                                    </Link>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </nav>
    )
}
