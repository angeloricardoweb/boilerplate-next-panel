import React from 'react'
import { ButtonChangeAccount } from './ButtonChangeAccount'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { usePathname } from 'next/navigation'

export type DashboardSidebarProps = {
    links: {
        href: string
        icon: string
        text: string
    }[]
}

export function DashboardSidebar({ links }: DashboardSidebarProps) {
    const pathName = usePathname()

    return (
        <ul className="menu bg-base-200 w-56 rounded-box">
            {
                links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href
                        }
                            className={`${pathName === link.href && 'active'}`}>
                            <Icon icon={link.icon} className="w-5 h-5 mr-2" />
                            {link.text}
                        </Link>
                    </li>
                ))
            }
            <li>
                <ButtonChangeAccount />
            </li>
        </ul>
    )
}
