'use client'
import { ProjectsTable } from '@/components/partials/ProjectsTable'
import { Subtitle } from '@/components/typography/Subtitle'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page() {
    const router = useRouter()

    function goToProjectDetails(id: string) {
        router.push(`/dashboard/coordenador/relatorio-de-projeto/${id}`)
    }

    return (
        <div>
            <Subtitle text='Relatório de projeto' />
            <ProjectsTable goToProjectDetails={goToProjectDetails} type="relatorio" />
        </div>
    )
}
