'use client'
import { DashboardLayout } from '@/components/partials/DashboardLayout'
import { DashboardSidebarProps } from '@/components/partials/DashboardSidebar'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {

    const links: DashboardSidebarProps['links'] = [
        {
            href: "/dashboard/colaborador/solicitacoes",
            icon: "material-symbols:add-circle-outline-rounded",
            text: "Solicitações"
        },
        {
            href: "/dashboard/colaborador/projetos",
            icon: "material-symbols:edit-document-outline",
            text: "Projetos"
        },
    ]

    return (
        <DashboardLayout links={links}>
            {children}
        </DashboardLayout>
    )
}
