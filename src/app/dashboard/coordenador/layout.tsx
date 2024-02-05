'use client'
import { DashboardLayout } from '@/components/partials/DashboardLayout'
import { DashboardSidebarProps } from '@/components/partials/DashboardSidebar'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {

    const links: DashboardSidebarProps['links']  = [
        {
            href: "/dashboard/coordenador/criar-projeto",
            icon: "material-symbols:add-circle-outline-rounded",
            text: "Registro de novo projeto"
        },
        {
            href: "/dashboard/coordenador/relatorio-de-projeto",
            icon: "material-symbols:edit-document-outline",
            text: "Relatório de projeto"
        },
        {
            href: "/dashboard/coordenador/prorrogacao-de-projeto",
            icon: "material-symbols:edit-calendar-rounded",
            text: "Prorrogação de vigência para projeto"
        },
        {
            href: "/dashboard/coordenador/solicitacao-de-colaboracao",
            icon: "material-symbols:group-add-outline-rounded",
            text: "Solicitação de colaboração"
        },
    ]

    return (
        <DashboardLayout links={links}>
            {children}
        </DashboardLayout>
    )
}


