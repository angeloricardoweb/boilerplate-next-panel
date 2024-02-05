import { ColaboradoresRequestTable } from '@/components/partials/ColaboradoresRequestTable'
import { ProjectsTable } from '@/components/partials/ProjectsTable'
import { Subtitle } from '@/components/typography/Subtitle'
import React from 'react'

export default function Page() {
    return (
        <div>
            <Subtitle text='Solicitações' />
            <ColaboradoresRequestTable/>
        </div>
    )
}
