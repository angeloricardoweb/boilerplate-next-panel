'use client'
import { DashboardLayout } from '@/components/partials/DashboardLayout'
import { DashboardSidebarProps } from '@/components/partials/DashboardSidebar'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {

    const links: DashboardSidebarProps['links']  = [
        {
            href: "/dashboard/parecerista/projetos",
            icon: "material-symbols:list",
            text: "Projetos"
        },
    ]

    return (
        <DashboardLayout links={links}>
            {children}
        </DashboardLayout>
    )
}


