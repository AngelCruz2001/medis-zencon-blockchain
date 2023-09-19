'use client'

import Link from "next/link"
import { Logo, DashboardIcon, PatientOverviewIcon, MedicalHistoryIcon, PrescriptionsIcon, DiagnosticToolsIcon } from "@/svg"
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
        label: "Patient Overview",
        href: pathname + "/patients",
        Icon: PatientOverviewIcon
    },
    {
        label: "Medical History",
        href: pathname + "/medicalhistory",
        Icon: MedicalHistoryIcon
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
    }
]

const linkVariants = {
    active: 'bg-gray-200',
    disbled: 'hover:bg-gray-100'
}

export const Sidebar = () => {
    const pathname = usePathname();
    return (
        <nav className="bg-white h-[100vh] max-h-[100vh] w-[280px] py-4 px-5 shadow-light z-10" >
            <div className="w-[80%] mx-auto">
                <Logo />
            </div>
            <ul className="flex flex-col gap-2 mt-14" >
                {
                    links.map(({ label, href, Icon }) => {
                        const isActive = pathname === href;
                        return (
                            <li>
                                <Link href={href} className={`flex items-center gap-2 text-sm rounded-md p-2 transition-colors ${isActive ? linkVariants.active : linkVariants.disbled}`} >
                                    <Icon />
                                    {label}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
